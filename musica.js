/* musica.js — musica di sottofondo del museo

   Come funziona:
   - index.html è un contenitore: tiene la musica e mostra le stanze in un
     riquadro. Cambiando stanza la pagina della musica non si ricarica,
     quindi la canzone continua senza interruzioni.
   - I browser non fanno partire l'audio finché il visitatore non clicca
     o preme un tasto: la musica parte al primo clic in qualsiasi stanza.
   - In basso a sinistra c'è un pulsante per accendere e spegnere la musica.
   - Se una stanza viene aperta da sola (senza passare da index.html),
     la musica funziona lo stesso, ma ricomincia a ogni cambio di pagina. */
(function () {
    var audio = document.getElementById('bgMusic');

    // ---------- CASO 1: pagina aperta dentro il contenitore ----------
    if (window.self !== window.top) {
        if (audio) { audio.pause(); audio.remove(); }   // suona già il contenitore
        ['pointerdown', 'keydown', 'touchstart'].forEach(function (ev) {
            document.addEventListener(ev, function () {
                try { window.parent.postMessage('museo-interazione', '*'); } catch (e) {}
            }, true);
        });
        return;
    }

    // ---------- CASO 2: contenitore (index.html) o pagina aperta da sola ----------
    if (!audio) return;

    var CHIAVE = 'museo-musica';
    var stato = {};
    try { stato = JSON.parse(sessionStorage.getItem(CHIAVE)) || {}; } catch (e) {}
    var spenta = stato.spenta === true;   // il visitatore l'ha spenta di proposito

    audio.volume = 0.5;
    audio.preload = 'auto';

    function salva() {
        try { sessionStorage.setItem(CHIAVE, JSON.stringify({ spenta: spenta })); } catch (e) {}
    }
    function suona() {
        if (!spenta && audio.paused) audio.play().catch(function () {});
    }

    // pulsante accendi/spegni
    var pulsante = document.createElement('button');
    pulsante.id = 'musica-toggle';
    pulsante.type = 'button';
    function aggiorna() {
        pulsante.textContent = audio.paused ? '🔇 Musica spenta' : '🔊 Musica';
        pulsante.title = audio.paused ? 'Clicca per accendere la musica' : 'Clicca per spegnere la musica';
    }
    pulsante.addEventListener('click', function (e) {
        e.stopPropagation();
        if (audio.paused) { spenta = false; audio.play().catch(function () {}); }
        else { spenta = true; audio.pause(); }
        salva();
    });
    audio.addEventListener('play', aggiorna);
    audio.addEventListener('pause', aggiorna);
    aggiorna();
    document.body.appendChild(pulsante);

    // clic dentro le stanze (arrivano dal riquadro)
    window.addEventListener('message', function (e) {
        if (e.data === 'museo-interazione') suona();
    });

    // clic sulla pagina stessa
    ['pointerdown', 'keydown', 'touchstart'].forEach(function (ev) {
        document.addEventListener(ev, function (e) {
            if (e.target !== pulsante) suona();
        }, true);
    });

    // prova a partire subito (funziona solo se il browser lo permette)
    suona();
})();
