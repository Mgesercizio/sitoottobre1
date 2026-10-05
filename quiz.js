/* =====================================================================
   quiz.js — Il Quiz del Monaco

   PER MODIFICARE LE DOMANDE basta cambiare l'elenco PROVE qui sotto.
   Ogni domanda ha:
     testo      → la domanda
     risposte   → le risposte possibili (l'ordine viene mescolato)
     giusta     → il numero della risposta giusta, contando da 0
                  (nel sondaggio non c'è: ogni risposta va bene)
     indizio    → cosa dice il monaco se lo tocchi
     spiegazione→ compare dopo aver risposto
     stanza     → la pagina del museo dove si trova l'argomento
     nomeStanza → come chiamare quella pagina nel testo
   ===================================================================== */
var PROVE = [
    {
        id: "visita",
        icona: "🎭",
        titolo: "Com'è andata la visita?",
        descrizione: "3 domande per dirci cosa ti è piaciuto",
        sondaggio: true,
        domande: [
            {
                testo: "Quale stanza ti è piaciuta di più?",
                risposte: ["Fisica: i moti e le formule", "Matematica: le coniche", "Storia: leggende e scoperte", "Il planetario con i video delle orbite"],
                reazioni: ["Un vero fisico! Galileo sarebbe fiero.", "Parabole, ellissi, iperboli… un intenditore!", "Ah, le storie! Anche io ne ho viste tante.", "Le stelle incantano anche me."]
            },
            {
                testo: "Che cosa ti ha colpito di più?",
                risposte: ["Girare per le stanze con il visore", "I video e le animazioni", "Le curiosità e le leggende", "Gli esempi svolti e le formule"],
                reazioni: ["Sembra di esserci davvero, vero?", "Muoversi aiuta a capire.", "Una buona storia non si dimentica.", "Parli la lingua dei matematici!"]
            },
            {
                testo: "Quanto ti è piaciuta l'esperienza?",
                risposte: ["🤩 Tantissimo, ci tornerei!", "😃 Molto", "🙂 Abbastanza", "😐 Poco"],
                reazioni: ["Ti aspetto alla prossima visita!", "Mi fa molto piacere!", "Grazie della sincerità!", "Grazie: ci servirà a migliorare."]
            }
        ]
    },
    {
        id: "ricordi",
        icona: "🧠",
        titolo: "Cosa ricordi?",
        descrizione: "5 domande su storie, leggende e scoperte",
        domande: [
            {
                testo: "Come dimostrò Giotto la sua bravura al messaggero del Papa?",
                risposte: ["Disegnò un cerchio perfetto a mano libera", "Dipinse un ritratto del Papa", "Costruì una cupola in miniatura", "Tracciò un'ellisse con il compasso"],
                giusta: 0,
                indizio: "Gli bastò un pennello e un solo gesto…",
                spiegazione: "Giotto tracciò un cerchio perfetto senza compasso: solo un grande artista poteva farlo con tanta naturalezza.",
                stanza: "storia2.html", nomeStanza: "la storia della circonferenza"
            },
            {
                testo: "Secondo le fonti, con che cosa Archimede avrebbe difeso Siracusa dalle navi romane?",
                risposte: ["Specchi ustori a forma di parabola", "Catapulte a forma di iperbole", "Mura perfettamente circolari", "Cannoni a lunga gittata"],
                giusta: 0,
                indizio: "Pensa al Sole e al fuoco di una curva…",
                spiegazione: "Gli specchi parabolici concentrano i raggi del Sole nel fuoco. Forse non furono mai usati davvero, ma dimostrano che la proprietà focale era nota.",
                stanza: "storia1.html", nomeStanza: "la storia della parabola"
            },
            {
                testo: "Da quale problema nasce la parabola, secondo il racconto?",
                risposte: ["Costruire un altare di volume doppio, come chiese l'oracolo di Delo", "Misurare la distanza tra la Terra e la Luna", "Calcolare il valore di π", "Tracciare la rotta delle navi"],
                giusta: 0,
                indizio: "C'era la peste, e un oracolo diede un ordine strano.",
                spiegazione: "Raddoppiare il lato del cubo avrebbe reso il volume 8 volte più grande: serviva un'equazione di secondo grado. La soluzione la trovò Menecmo.",
                stanza: "storia1.html", nomeStanza: "la storia della parabola"
            },
            {
                testo: "Secondo Keplero, che forma hanno le orbite dei pianeti?",
                risposte: ["Ellissi, con il Sole in uno dei fuochi", "Circonferenze, con il Sole al centro", "Parabole", "Iperboli"],
                giusta: 0,
                indizio: "Due fuochi… e il Sole ne occupa uno.",
                spiegazione: "È la Prima Legge di Keplero: le orbite sono ellittiche e il Sole sta in un fuoco.",
                stanza: "storia2.1.html", nomeStanza: "la storia dell'ellisse"
            },
            {
                testo: "Prima del GPS, navi e aerei usavano il sistema LORAN. Su quale curva si basava?",
                risposte: ["L'iperbole", "La parabola", "La circonferenza", "L'ellisse"],
                giusta: 0,
                indizio: "Conta la differenza delle distanze da due punti fissi.",
                spiegazione: "Il LORAN misura la differenza di tempo tra i segnali di due stazioni: i punti con la stessa differenza di distanza formano un'iperbole.",
                stanza: "storia1.1.html", nomeStanza: "la storia dell'iperbole"
            }
        ]
    },
    {
        id: "imparato",
        icona: "📐",
        titolo: "Cosa hai imparato?",
        descrizione: "5 domande di fisica e matematica",
        domande: [
            {
                testo: "Il moto parabolico è la combinazione di quali due moti?",
                risposte: ["Rettilineo uniforme in orizzontale e uniformemente accelerato in verticale", "Due moti rettilinei uniformi", "Uniformemente accelerato in orizzontale e uniforme in verticale", "Due moti circolari"],
                giusta: 0,
                indizio: "In orizzontale nessuno spinge; in verticale tira la gravità.",
                spiegazione: "In orizzontale la velocità resta costante, in verticale agisce la gravità: lo scoprì Galileo.",
                stanza: "fisica1.1.html", nomeStanza: "la teoria del moto parabolico"
            },
            {
                testo: "Nel punto di altezza massima, quanto vale la velocità verticale vy?",
                risposte: ["Zero", "È la massima possibile", "È uguale a g", "È uguale a v₀"],
                giusta: 0,
                indizio: "Lassù il pallone smette di salire e non ha ancora iniziato a scendere.",
                spiegazione: "L'altezza massima si raggiunge proprio quando vy = 0.",
                stanza: "fisica1.2.6.html", nomeStanza: "la formula dell'altezza massima"
            },
            {
                testo: "Nel moto circolare uniforme, dove punta l'accelerazione centripeta?",
                risposte: ["Verso il centro della circonferenza", "Nella stessa direzione della velocità", "Verso l'esterno", "Non c'è accelerazione"],
                giusta: 0,
                indizio: "Il nome stesso lo dice: centri-peta.",
                spiegazione: "La velocità scalare è costante, ma il vettore velocità cambia direzione: serve un'accelerazione diretta verso il centro.",
                stanza: "fisica2.html", nomeStanza: "la stanza del moto circolare"
            },
            {
                testo: "L'ellisse è il luogo dei punti per cui è costante…",
                risposte: ["la somma delle distanze da due fuochi", "la differenza delle distanze da due fuochi", "la distanza da un solo punto", "la distanza da un fuoco e da una retta"],
                giusta: 0,
                indizio: "Somma, differenza… per l'iperbole era la differenza.",
                spiegazione: "Somma costante: ellisse. Differenza costante: iperbole. Stessa distanza da un punto: circonferenza. Stessa distanza da fuoco e direttrice: parabola.",
                stanza: "matematica1.html", nomeStanza: "la sala dell'ellisse e della circonferenza"
            },
            {
                testo: "Se i due fuochi di un'ellisse coincidono, che figura si ottiene?",
                risposte: ["Una circonferenza", "Una parabola", "Un'iperbole", "Una retta"],
                giusta: 0,
                indizio: "Eccentricità zero: niente più schiacciamento.",
                spiegazione: "Con i fuochi coincidenti l'eccentricità è 0: la circonferenza è un'ellisse speciale.",
                stanza: "matematica1.html", nomeStanza: "la sala dell'ellisse e della circonferenza"
            }
        ]
    }
];

/* frasi del monaco */
var FRASI = {
    benvenuto: "Benvenuto! Scegli una prova sulla pergamena.",
    giusto: ["Esatto!", "Bravissimo!", "Perfetto, lo sapevi!", "Giusto! Hai una memoria di ferro.", "Ottimo lavoro!"],
    sbagliato: ["Quasi… leggi la spiegazione!", "Non proprio. Riprova la prossima volta!", "Ahi! Ma ora lo sai.", "Sbagliato, ma si impara così."],
    pensa: ["Pensaci bene…", "Prenditi il tuo tempo.", "Questa è facile… forse!", "Chi ricorda, vince."],
    tocco: ["Sono il custode del museo.", "Ehi, che solletico!", "Il mio mantello è della 4ªDS!", "Scegli una prova, ti aspetto."]
};

/* ===================================================================== */
(function () {
    var perg = document.getElementById("pergamena");
    var fumetto = document.getElementById("fumetto");
    var monaco = document.getElementById("monaco");
    var toccaMonaco = document.getElementById("tocca-monaco");
    var contatore = document.getElementById("contatore");
    var punti = document.getElementById("punti");
    var perline = document.getElementById("perline");
    var targaSotto = document.getElementById("targa-sotto");

    var prova = null, ordine = [], indice = 0, corrette = 0, risposto = false;
    var esiti = [], scelte = [], fatte = {};

    function caso(lista) { return lista[Math.floor(Math.random() * lista.length)]; }
    function mescola(n) {
        var a = [];
        for (var i = 0; i < n; i++) a.push(i);
        for (var j = n - 1; j > 0; j--) { var k = Math.floor(Math.random() * (j + 1)); var t = a[j]; a[j] = a[k]; a[k] = t; }
        return a;
    }
    function el(tag, classe, testo) {
        var e = document.createElement(tag);
        if (classe) e.className = classe;
        if (testo != null) e.textContent = testo;
        return e;
    }
    function dice(frase) {
        fumetto.textContent = frase;
        fumetto.classList.remove("nuovo");
        void fumetto.offsetWidth;
        fumetto.classList.add("nuovo");
    }
    function anima(tipo) {
        monaco.classList.remove("salta", "scuote");
        void monaco.offsetWidth;
        monaco.classList.add(tipo);
    }

    /* ---------- registro sul dispositivo (per il docente) ---------- */
    var CHIAVE = "museo-quiz-registro";
    function leggiRegistro() {
        try { return JSON.parse(localStorage.getItem(CHIAVE)) || {}; } catch (e) { return {}; }
    }
    function salvaRegistro(r) {
        try { localStorage.setItem(CHIAVE, JSON.stringify(r)); } catch (e) {}
    }
    function registra() {
        var r = leggiRegistro();
        var voce = r[prova.id] || { volte: 0, punti: 0, conteggi: {} };
        voce.volte++;
        if (prova.sondaggio) {
            scelte.forEach(function (s, i) {
                var k = i + "-" + s;
                voce.conteggi[k] = (voce.conteggi[k] || 0) + 1;
            });
        } else {
            voce.punti += corrette;
        }
        r[prova.id] = voce;
        salvaRegistro(r);
    }

    /* ---------- targa ---------- */
    function aggiornaTarga() {
        perline.innerHTML = "";
        document.getElementById("grande").style.display = prova ? "none" : "";
        if (!prova) {
            targaSotto.textContent = "Tre prove per chi ha visitato il museo";
            contatore.textContent = "";
            punti.textContent = "";
            return;
        }
        targaSotto.textContent = prova.titolo;
        var n = prova.domande.length;
        contatore.textContent = indice < n ? "Domanda " + (indice + 1) + " di " + n : "Finito!";
        punti.textContent = prova.sondaggio ? "" : "Punti: " + corrette;
        for (var i = 0; i < n; i++) {
            var p = el("span");
            if (esiti[i] === true) p.className = prova.sondaggio ? "fatta" : "giusta";
            else if (esiti[i] === false) p.className = "sbagliata";
            else if (i === indice) p.className = "ora";
            perline.appendChild(p);
        }
    }

    /* ---------- menu ---------- */
    function menu() {
        prova = null;
        aggiornaTarga();
        toccaMonaco.textContent = "Tocca il monaco";
        perg.innerHTML = "";
        perg.appendChild(el("h2", null, "Scegli una prova"));
        perg.appendChild(el("p", "intro", "Rispondi toccando la risposta che preferisci"));
        PROVE.forEach(function (p) {
            var b = el("button", "prova" + (fatte[p.id] ? " fatta" : ""));
            b.type = "button";
            b.appendChild(el("span", "icona", p.icona));
            b.appendChild(el("b", null, p.titolo));
            b.appendChild(el("small", null, p.descrizione));
            b.addEventListener("click", function () { inizia(p); });
            perg.appendChild(b);
        });
        var piede = el("div", "piede");
        var reg = el("button", "link-lieve", "📜 Registro per il docente");
        reg.type = "button";
        reg.addEventListener("click", registro);
        piede.appendChild(reg);
        perg.appendChild(piede);
        dice(Object.keys(fatte).length ? "Vuoi tentare un'altra prova?" : FRASI.benvenuto);
    }

    /* ---------- domande ---------- */
    function inizia(p) {
        prova = p; indice = 0; corrette = 0; esiti = []; scelte = [];
        toccaMonaco.textContent = p.sondaggio ? "Tocca il monaco" : "Tocca il monaco per un indizio";
        mostraDomanda();
    }

    function mostraDomanda() {
        var d = prova.domande[indice];
        risposto = false;
        ordine = mescolaSeServe(d);
        aggiornaTarga();
        perg.innerHTML = "";
        perg.appendChild(el("div", "numero", prova.titolo));
        perg.appendChild(el("p", "domanda", d.testo));
        var box = el("div", "risposte");
        ordine.forEach(function (i) {
            var b = el("button", "risposta", d.risposte[i]);
            b.type = "button";
            b.dataset.i = i;
            b.addEventListener("click", function () { rispondi(i, b); });
            box.appendChild(b);
        });
        perg.appendChild(box);
        dice(prova.sondaggio ? "Dimmi la verità!" : caso(FRASI.pensa));
    }
    function mescolaSeServe(d) {
        // nel sondaggio le risposte restano in ordine (es. la scala "Tantissimo … Poco")
        if (prova.sondaggio) return d.risposte.map(function (_, i) { return i; });
        return mescola(d.risposte.length);
    }

    function rispondi(i, bottone) {
        if (risposto) return;
        risposto = true;
        var d = prova.domande[indice];
        var tutti = perg.querySelectorAll(".risposta");
        tutti.forEach(function (b) { b.disabled = true; });

        if (prova.sondaggio) {
            scelte.push(i);
            esiti[indice] = true;
            tutti.forEach(function (b) { b.classList.add(b === bottone ? "scelta" : "spenta"); });
            dice(d.reazioni[i]);
            anima("salta");
        } else {
            var ok = i === d.giusta;
            esiti[indice] = ok;
            if (ok) corrette++;
            tutti.forEach(function (b) {
                var n = Number(b.dataset.i);
                if (n === d.giusta) b.classList.add("giusta");
                else if (b === bottone) b.classList.add("sbagliata");
                else b.classList.add("spenta");
            });
            dice(caso(ok ? FRASI.giusto : FRASI.sbagliato));
            anima(ok ? "salta" : "scuote");
            var sp = el("p", "spiegazione");
            sp.appendChild(document.createTextNode(d.spiegazione + " "));
            if (d.stanza) {
                var a = el("a", null, "Rivedi " + d.nomeStanza);
                a.href = d.stanza;
                sp.appendChild(a);
            }
            perg.appendChild(sp);
        }
        aggiornaTarga();

        var piede = el("div", "piede");
        piede.appendChild(el("span"));
        var avanti = el("button", "bottone", indice + 1 < prova.domande.length ? "Avanti" : "Vedi il risultato");
        avanti.type = "button";
        avanti.addEventListener("click", function () {
            indice++;
            if (indice < prova.domande.length) mostraDomanda(); else risultato();
        });
        piede.appendChild(avanti);
        perg.appendChild(piede);
    }

    /* ---------- risultato ---------- */
    function risultato() {
        fatte[prova.id] = true;
        registra();
        toccaMonaco.textContent = "Tocca il monaco";
        aggiornaTarga();
        perg.innerHTML = "";

        if (prova.sondaggio) {
            perg.appendChild(el("h2", null, "Grazie!"));
            perg.appendChild(el("p", "intro", "Ecco le tue risposte"));
            var ul = el("ul", "riepilogo");
            prova.domande.forEach(function (d, i) {
                var li = el("li");
                li.appendChild(el("b", null, d.testo + " "));
                li.appendChild(document.createTextNode(d.risposte[scelte[i]]));
                ul.appendChild(li);
            });
            perg.appendChild(ul);
            dice("Grazie! Ora mettiti alla prova con gli altri quiz.");
            anima("salta");
        } else {
            var n = prova.domande.length;
            perg.appendChild(el("h2", null, prova.titolo));
            perg.appendChild(el("div", "voto", corrette + " / " + n));
            var premio, frase;
            if (corrette === n) { premio = "🏆 Gran Maestro del Museo"; frase = "Tutte giuste! Mi inchino davanti a te."; }
            else if (corrette >= Math.ceil(n * 0.6)) { premio = "🎓 Apprendista esperto"; frase = "Molto bene! Ancora un piccolo ripasso."; }
            else { premio = "📖 Novizio curioso"; frase = "Il museo ti aspetta: facciamo un giro di ripasso?"; }
            perg.appendChild(el("p", "titolo-premio", premio));
            dice(frase);
            anima(corrette === n ? "salta" : "scuote");

            // stanze da ripassare, senza ripetizioni
            var daRivedere = [], viste = {};
            prova.domande.forEach(function (d, i) {
                if (!esiti[i] && d.stanza && !viste[d.stanza]) { viste[d.stanza] = true; daRivedere.push(d); }
            });
            if (daRivedere.length) {
                var rip = el("div", "ripasso");
                rip.appendChild(document.createTextNode("Da ripassare nel museo:"));
                var lista = el("ul");
                daRivedere.forEach(function (d) {
                    var li = el("li"), a = el("a", null, d.nomeStanza);
                    a.href = d.stanza;
                    li.appendChild(a);
                    lista.appendChild(li);
                });
                rip.appendChild(lista);
                perg.appendChild(rip);
            }
        }

        var piede = el("div", "piede");
        var ancora = el("button", "bottone chiaro", "Rifai la prova");
        ancora.type = "button";
        var p = prova;
        ancora.addEventListener("click", function () { inizia(p); });
        var torna = el("button", "bottone", "Altre prove");
        torna.type = "button";
        torna.addEventListener("click", menu);
        piede.appendChild(ancora);
        piede.appendChild(torna);
        perg.appendChild(piede);
    }

    /* ---------- registro per il docente ---------- */
    function registro() {
        prova = null;
        toccaMonaco.textContent = "Tocca il monaco";
        aggiornaTarga();
        var r = leggiRegistro();
        perg.innerHTML = "";
        perg.appendChild(el("h2", null, "Registro del monaco"));
        perg.appendChild(el("p", "intro", "Risposte date su questo visore"));
        var box = el("div", "registro");

        PROVE.forEach(function (p) {
            var v = r[p.id];
            box.appendChild(el("h3", null, p.icona + " " + p.titolo + " (" + (v ? v.volte : 0) + " volte)"));
            if (!v) { box.appendChild(el("div", null, "Nessuna risposta ancora.")); return; }
            if (p.sondaggio) {
                p.domande.forEach(function (d, qi) {
                    box.appendChild(el("div", null, d.testo)).style.fontStyle = "italic";
                    d.risposte.forEach(function (testo, ri) {
                        var c = v.conteggi[qi + "-" + ri] || 0;
                        var riga = el("div", "riga");
                        riga.appendChild(el("span", null, testo));
                        var barra = el("span", "barra"), dentro = el("i");
                        dentro.style.width = (v.volte ? Math.round(c / v.volte * 100) : 0) + "%";
                        barra.appendChild(dentro);
                        riga.appendChild(barra);
                        riga.appendChild(el("span", "num", c));
                        box.appendChild(riga);
                    });
                });
            } else {
                var media = (v.punti / v.volte).toFixed(1).replace(".", ",");
                box.appendChild(el("div", null, "Punteggio medio: " + media + " su " + p.domande.length));
            }
        });
        perg.appendChild(box);

        var piede = el("div", "piede");
        var azzera = el("button", "link-lieve", "Azzera il registro");
        azzera.type = "button";
        var conferma = false;
        azzera.addEventListener("click", function () {
            if (!conferma) { conferma = true; azzera.textContent = "Tocca di nuovo per confermare"; return; }
            try { localStorage.removeItem(CHIAVE); } catch (e) {}
            registro();
        });
        var torna = el("button", "bottone", "Torna alle prove");
        torna.type = "button";
        torna.addEventListener("click", menu);
        piede.appendChild(azzera);
        piede.appendChild(torna);
        perg.appendChild(piede);
        dice("Qui annoto tutte le risposte, per il professore.");
    }

    /* ---------- tocco sul monaco: indizio o battuta ---------- */
    monaco.addEventListener("click", function () {
        anima("salta");
        if (prova && !prova.sondaggio && !risposto && indice < prova.domande.length) {
            dice("Indizio: " + prova.domande[indice].indizio);
        } else {
            dice(caso(FRASI.tocco));
        }
    });

    menu();
})();
