/* museo.js — adatta le "stanze" (tela 1280x720) a qualsiasi schermo */
(function () {
    var W = 1280, H = 720;
    var b = document.body;
    if (!b || !b.classList.contains('stanza')) return;
    function adatta() {
        var s = Math.min(window.innerWidth / W, window.innerHeight / H);
        var x = (window.innerWidth - W * s) / 2;
        var y = (window.innerHeight - H * s) / 2;
        b.style.transform = 'translate(' + x + 'px,' + y + 'px) scale(' + s + ')';
    }
    window.addEventListener('resize', adatta);
    adatta();
})();

/* ---- riquadri a schede: linguette per cambiare pagina ---- */
(function () {
    document.querySelectorAll('.schede').forEach(function (box) {
        var pagine = box.querySelectorAll('.pagina');
        if (!pagine.length) return;
        var barra = document.createElement('div');
        barra.className = 'linguette';
        function mostra(n) {
            pagine.forEach(function (p, i) { p.classList.toggle('attiva', i === n); });
            Array.prototype.forEach.call(barra.children, function (b, i) { b.classList.toggle('attiva', i === n); });
        }
        pagine.forEach(function (p, i) {
            var b = document.createElement('button');
            b.type = 'button';
            b.textContent = p.getAttribute('data-titolo') || String(i + 1);
            // stopPropagation: toccare una linguetta non apre la lente
            b.addEventListener('click', function (e) { e.stopPropagation(); mostra(i); });
            barra.appendChild(b);
        });
        if (pagine.length > 1) box.insertBefore(barra, box.firstChild);
        mostra(0);
    });
})();

/* ---- testo della cornice ingrandibile (utile soprattutto nel visore) ---- */
(function () {
    var b = document.body;
    if (!b || !b.classList.contains('stanza')) return;
    // solo i riquadri di sola lettura (non quelli con pulsanti o caselle)
    var riquadri = document.querySelectorAll('.content, #p1, #p2, .quadro.esempio');
    if (!riquadri.length) return;

    var avviso = document.createElement('div');
    avviso.className = 'avviso-zoom';
    avviso.textContent = '🔍 Tocca il testo per ingrandirlo';
    b.appendChild(avviso);

    riquadri.forEach(function (r) {
        r.classList.add('zoomabile');
        r.addEventListener('click', function () {
            var lente = document.createElement('div');
            lente.className = 'lente';
            var foglio = document.createElement('div');
            foglio.className = 'lente-foglio';
            foglio.innerHTML = r.innerHTML;
            var chiudi = document.createElement('button');
            chiudi.className = 'lente-chiudi';
            chiudi.type = 'button';
            chiudi.textContent = '✕ Chiudi';
            foglio.appendChild(chiudi);
            lente.appendChild(foglio);
            // si chiude toccando fuori dal foglio o su "Chiudi"
            lente.addEventListener('click', function (e) {
                if (e.target === lente || e.target === chiudi) lente.remove();
            });
            b.appendChild(lente);
        });
    });
})();
