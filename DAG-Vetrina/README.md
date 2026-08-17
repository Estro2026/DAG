# DAG Gioielli — Vetrina

Sito vetrina statico (HTML/CSS/JS). Nessuna componente shop / e-commerce.
Aprire `index.html` in locale o servire la cartella come root del sito.

## Struttura

```
DAG-Vetrina/
├── index.html              Home
├── about.html              About
├── filosofia.html          Filosofia
├── collections.html        Collezioni
├── stores.html             Rivenditori (mappa/filtri → js/stores.js)
├── events.html             Eventi e collaborazioni
├── contact.html            Contatti (form)
├── privacy.html            Privacy policy
├── cookie.html             Cookie policy
│
├── css/wireframe.css       Unico foglio di stile (variabili, tipografia,
│                           layout, componenti, responsive)
├── js/
│   ├── main.js             Header sticky, drawer mobile, animazioni .fade
│   ├── hotspots.js         Hotspot interattivi home
│   └── stores.js           Filtri elenco rivenditori
│
├── assets/                 Logo e immagini di libreria
├── *.webp / *.png          Immagini editoriali referenziate a root
└── brand/                  Wireframe alta fedeltà + palette e font (PDF)
```

## Note per lo sviluppo

- **Font**: EB Garamond + Poppins, caricati via `@import` Google Fonts in cima a `css/wireframe.css`. Per l'hosting self-service sostituire con `@font-face` locali.
- **Meta/SEO**: title, description, canonical, OG e JSON-LD sono già presenti in ogni pagina; aggiornare il dominio definitivo (attualmente `https://www.daggioielli.it/`) e le immagini OG.
- **Link legacy**: nei footer di `privacy.html` e `cookie.html` restano due voci `stones.html` / `textured.html` (pagine non presenti in vetrina) — da rimappare su `collections.html` in fase di sviluppo.
- Design, layout, responsive e comportamenti sono invariati rispetto al prototipo approvato.
