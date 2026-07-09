# DAG Gioielli — Wireframe ad alta fedeltà sito vetrina

Documento operativo per progettare e sviluppare in Visual Studio Code / GitHub un wireframe ad alta fedeltà del sito vetrina DAG Gioielli.

---

## 1. Obiettivo del progetto

Realizzare un sito istituzionale per DAG Gioielli che racconti il brand, rafforzi il posizionamento e diventi il punto di contatto ufficiale per clienti, rivenditori e boutique.

Il sito non deve essere percepito come un semplice catalogo prodotti o come un e-commerce mass market. Deve funzionare come ingresso nell’universo DAG: un atelier contemporaneo dove design, ricerca estetica e manifattura artigianale convivono in equilibrio.

L’esperienza deve essere principalmente di branding. La funzione commerciale deve diventare una conseguenza naturale del percorso utente: scoprire il brand, comprenderne il valore, trovare un rivenditore o entrare in contatto.

---

## 2. Sintesi strategica

DAG è un marchio artigianale con forte radice milanese, elegante, caldo e contemporaneo. Il prodotto è protagonista, ma non deve essere isolato da ciò che lo rende speciale: gesto manuale, ricerca materica, textile jewelry, pietre, intreccio, filiera e produzione su richiesta.

Il sito deve collocarsi all’intersezione tra:

- la forza narrativa e la sensibilità materica di Marie Laure Chamorel;
- la pulizia visiva e il linguaggio editoriale di Room Service;
- l’autenticità dell’artigianalità e dell’heritage di Villa Milano;
- evitando l’approccio commerciale, standardizzato e poco distintivo di Sharing Bijoux.

Il risultato deve essere più vicino a una rivista di design che a un classico sito commerciale di gioielli.

---

## 3. Unique Value Proposition

DAG realizza gioielli contemporanei che uniscono ricerca estetica, manifattura artigianale e produzione su richiesta.

Ogni pezzo nasce da un processo curato, non da una logica industriale. Il valore non risiede soltanto nell’oggetto finale, ma nel percorso che lo genera: il gesto, il tempo, il telaio, la scelta delle pietre, l’intreccio di materiali e culture.

Il brand coniuga la dimensione autentica di un laboratorio artigianale milanese con una distribuzione selezionata sul territorio.

---

## 4. Obiettivi di business

### Obiettivo primario

Generare lead qualificati tramite form di contatto.

### Obiettivi secondari

- Presentare il brand in modo autorevole e coerente.
- Rafforzare il posizionamento nel settore della gioielleria contemporanea.
- Creare una presenza digitale solida e riconoscibile.
- Valorizzare la rete di rivenditori e boutique.
- Rendere il sito il riferimento ufficiale del brand.
- Aumentare il valore percepito del prodotto.
- Rendere comprensibile la produzione su richiesta come elemento di valore, non come limite.

### KPI principali

- Lead generati tramite form di contatto.
- Tempo medio sul sito.
- Navigazione delle pagine About, Philosophy e Collezioni.
- Accessi alla pagina Stores.
- Qualità del traffico.
- Interazioni con hotspot prodotto sulle immagini ambientate.
- Click su “Trova un rivenditore”.
- Invii form da parte di boutique e concept store.

---

## 5. Target

### Target principale

Donna 30-55 anni.

È sensibile al design, all’artigianalità e al Made in Italy. Cerca oggetti di qualità più che prodotti di tendenza. Predilige un’eleganza discreta, contemporanea e non ostentata. Acquista meno, ma meglio.

Non cerca necessariamente il lusso classico o elitario, ma autenticità, ricerca, valore e riconoscibilità.

### Target secondario

- Persone che conoscono già DAG e cercano informazioni ufficiali.
- Clienti che desiderano trovare un rivenditore.
- Boutique, concept store e buyer interessati al brand.
- Uffici stile, showroom e interlocutori legati al sistema moda.

### Bisogni dell’utente

- Capire cosa rende speciale DAG.
- Comprendere il valore del prodotto.
- Scoprire dove acquistarlo.
- Sapere come funziona la produzione artigianale.
- Avere fiducia nel brand.
- Orientarsi tra rivenditori, collezioni e contatti.

---

## 6. Pain point da risolvere

### 1. Assenza di una presenza digitale autorevole

Il brand deve avere un punto di riferimento online capace di raccontarne il valore, non solo mostrare immagini prodotto.

### 2. Tradurre l’artigianalità in esperienza digitale

Il prodotto nasce da una produzione su richiesta e da un processo manuale. Il sito deve trasformare il tempo di attesa in un elemento di valore: cura, unicità, lentezza, attenzione.

### 3. Facilitare l’orientamento

Con circa 300 rivenditori, la pagina Stores deve permettere all’utente di individuare facilmente dove trovare il brand.

---

## 7. Direzione creativa

### Mood generale

Elegante, essenziale, caldo, materico, contemporaneo, editoriale.

Il sito deve diventare una cornice neutra, con tocchi terracotta e oro spento, capace di lasciare spazio al colore delle fotografie e dei gioielli.

### Principi visivi

- Grande spazio alla fotografia.
- Ampio utilizzo di spazi bianchi.
- Layout essenziali, ariosi e asimmetrici.
- Tipografia elegante.
- Ritmo lento e contemplativo.
- Pochi elementi per schermata.
- Microanimazioni leggere.
- Prodotto sempre protagonista.
- Alternanza tra immagini full width e griglie editoriali.
- Dettagli di laboratorio e lavorazione manuale in evidenza.
- Continuità visiva tra tutte le pagine.

### Da evitare

- Look da fast fashion.
- Pressione all’acquisto.
- Countdown o urgenze artificiali.
- Pop-up invasivi.
- CTA aggressive.
- Layout da marketplace.
- Griglie prodotto troppo dense.
- Visual eccessivamente commerciali.
- Comunicazione da disponibilità immediata, se il prodotto è su richiesta.
- Linguaggio classico da alta gioielleria troppo distante o elitario.

---

## 8. Font e sistema tipografico

### Font primario — Titoli

`EB Garamond`

Pesi richiesti:

- Regular
- Semibold
- Bold

Utilizzo:

- H1
- H2
- Hero headline
- Titoli editoriali
- Citazioni
- Numeri grandi
- Titoli di sezioni narrative

### Font secondario — Sottotitoli e body

`Poppins`

Pesi richiesti:

- Light
- Regular
- Semibold
- Bold

Utilizzo:

- Body copy
- Navigazione
- Label
- CTA
- Form
- Microcopy
- Didascalie
- Filtri Stores
- Testi tecnici di prodotto

### Gerarchia suggerita desktop

```css
h1 {
  font-family: "EB Garamond", serif;
  font-size: clamp(64px, 8vw, 132px);
  line-height: 0.88;
  letter-spacing: -0.04em;
  font-weight: 500;
}

h2 {
  font-family: "EB Garamond", serif;
  font-size: clamp(44px, 5.5vw, 88px);
  line-height: 0.95;
  letter-spacing: -0.035em;
  font-weight: 500;
}

h3 {
  font-family: "EB Garamond", serif;
  font-size: clamp(32px, 3vw, 56px);
  line-height: 1;
  letter-spacing: -0.02em;
  font-weight: 500;
}

.body-large {
  font-family: "Poppins", sans-serif;
  font-size: clamp(18px, 1.4vw, 24px);
  line-height: 1.55;
  font-weight: 300;
}

.body {
  font-family: "Poppins", sans-serif;
  font-size: 15px;
  line-height: 1.75;
  font-weight: 300;
}

.label {
  font-family: "Poppins", sans-serif;
  font-size: 11px;
  line-height: 1;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  font-weight: 500;
}
```

---

## 9. Palette colore

### Palette principale

```css
:root {
  --dag-gold: #A88F2C;
  --dag-ivory: #F2EDE4;
  --dag-sand: #BF9775;
  --dag-terracotta: #A25C42;
  --dag-rust: #A64005;
  --dag-coral: #C6633E;

  --dag-ink: #1F1B16;
  --dag-muted: #7A6F66;
  --dag-white: #FFFDF8;
  --dag-border: rgba(31, 27, 22, 0.12);
}
```

### Uso colore

- `#F2EDE4` come base principale del sito.
- `#A25C42` e `#A64005` come tocchi terracotta/ruggine per CTA, hover, bande editoriali, dettagli.
- `#A88F2C` come accento oro non brillante, da usare con misura.
- `#BF9775` per fondi secondari, card, filtri, moduli morbidi.
- `#C6633E` per dettagli caldi, microinterazioni, pill, hover.
- Testo principale in `#1F1B16`, mai nero puro.
- Usare bianco caldo, non bianco ottico.

### Regola importante

Le fotografie devono portare il colore. L’interfaccia deve restare una cornice neutra.

---

## 10. Direzione fotografica e asset

### Tipologie di immagini da prevedere

- Dettagli mani + gioielli indossati.
- Still life su materiali naturali.
- Strumenti di laboratorio: telaio, pinze, fili, pietre, scatole, appunti.
- Gioielli su texture calde: lino, carta, legno, tessuti, iuta.
- Radice milanese: dettagli urbani, Navigli, Duomo, laboratorio, archivio.
- Radice indiana: pietre, colore, Jaisalmer/Jaipur, elementi artigianali, senza cliché decorativi.
- Packaging: sacchetti in iuta, bigliettini scritti a mano, scatole, dettagli materici.

### Trattamento immagine

- Crop editoriali.
- Immagini full width.
- Alternanza tra immagini grandi e dettagli ravvicinati.
- Griglie irregolari.
- No stock generici.
- No foto prodotto su bianco da marketplace come contenuto dominante.
- Leggera grana opzionale su alcune aree, senza sporcare il prodotto.
- Didascalie minimali.

---

## 11. Componenti chiave del wireframe

### Header

Header minimal, sticky solo dopo il primo scroll.

Desktop:

- Logo DAG al centro o a sinistra, da valutare in base al layout hero.
- Navigazione: Home, About, Philosophy, Collezioni, Stores, Eventi, Contatti.
- CTA discreta: `Trova un rivenditore`.
- Icona menu solo se necessario.

Mobile:

- Logo a sinistra.
- Menu hamburger.
- CTA secondaria nel drawer: `Contattaci` / `Trova un rivenditore`.

Comportamento:

- Header trasparente sopra hero se l’immagine lo permette.
- Dopo scroll: fondo ivory semi-opaco con blur leggero.
- Hover link: sottolineatura sottile o cambio colore terracotta.
- Nessuna animazione invadente.

---

### Footer

Footer caldo, editoriale, non commerciale.

Contenuti:

- Logo DAG.
- Claim breve.
- Menu pagine.
- Contatti.
- Link social.
- Link legali.
- CTA rivenditori: `Sei una boutique? Contattaci`.
- Mini testo sul laboratorio milanese.

Esempio testo footer:

> Gioielli tessili realizzati a mano a Milano. Ogni pezzo nasce dall’incontro tra pietre, argento, filo e gesto artigianale.

---

### Hotspot prodotto su immagini ambientate

Ispirazione: sulle immagini ambientate devono comparire piccoli pulsanti `+` che permettono di scoprire il prodotto direttamente.

Uso:

- Solo su fotografie lifestyle/ambientate.
- Hotspot circolare, piccolo, bianco caldo o ivory.
- Al click/tap apre una card leggera con:
  - nome modello;
  - materiale principale;
  - pietra;
  - micro-descrizione;
  - CTA: `Scopri la collezione` oppure `Trova un rivenditore`.

Non usare prezzo come elemento principale. Il sito è vetrina, non e-commerce.

Esempio card:

```text
Muamara Jaipur
Pietre semipreziose 3 mm, argento 925, filo di lurex.
Il modello fondativo di DAG, tessuto a mano nel laboratorio milanese.
[Scopri la collezione]
```

---

### Card collezione

Struttura:

- Immagine grande.
- Label: `COLLEZIONE`
- Titolo modello.
- Testo breve.
- 3 parole-firma.
- CTA discreta.

Esempio:

```text
COLLEZIONE
Muamara Jaipur

Il primo gesto. Il modello fondativo da cui prende forma l’universo DAG.

Iconico · leggero · luminoso

[Scopri]
```

---

### Form di contatto

Il form deve avere due percorsi chiari:

1. Cliente finale.
2. Rivenditore / boutique / buyer.

Campi:

- Nome e cognome.
- Email.
- Telefono.
- Città.
- Tipo richiesta:
  - Informazioni prodotto.
  - Trovare un rivenditore.
  - Diventare rivenditore.
  - Press / collaborazione.
  - Altro.
- Messaggio.
- Checkbox privacy.

CTA:

- `Invia richiesta`
- Microcopy: `Risponderemo con cura, senza automatismi.`

---

## 12. Sitemap

Pagine richieste:

1. Home
2. About
3. Philosophy
4. Collezioni
5. Stores
6. Eventi e collaborazioni
7. Contatti

Nota: la pagina `Collezioni` è necessaria perché la strategia richiede all’utente di scoprire le linee prodotto e comprenderne materiali, stile e ricerca estetica. Non deve diventare un catalogo e-commerce, ma un archivio editoriale navigabile.

---

# 13. Wireframe pagina Home

## Obiettivo della pagina

Far comprendere immediatamente il posizionamento del brand e invitare l’utente a esplorare il mondo DAG.

## Azioni utente

- Comprendere il posizionamento.
- Esplorare il sito.
- Entrare nell’universo DAG.
- Scoprire una collezione.
- Trovare un rivenditore.
- Contattare il brand.

---

## Home — Sezione 01: Hero editoriale

### Layout desktop

Hero full viewport.

Opzione A:

- Immagine full width di mani/gioiello/laboratorio.
- Overlay leggero caldo.
- Header trasparente.
- H1 grande in EB Garamond.
- Testo breve in Poppins.
- Due CTA.

### Copy indicativo

```text
Gioielli tessili,
nati a mano
nel laboratorio
milanese.
```

Sottotitolo:

```text
DAG intreccia pietre, argento e filo in gioielli contemporanei realizzati su richiesta.
```

CTA:

- `Scopri l’universo DAG`
- `Trova un rivenditore`

### Note UI

- Il testo non deve coprire il gioiello principale.
- Usare maschera o gradient molto leggero solo per la leggibilità.
- Scroll cue discreto in basso.

---

## Home — Sezione 02: Intro manifesto

### Layout

Due colonne:

- Sinistra: label + titolo grande.
- Destra: testo manifesto.

### Copy indicativo

```text
Non un catalogo.
Un atelier digitale.
```

Testo:

```text
Ogni gioiello DAG nasce da un processo lento e curato: la scelta delle pietre, il gesto del telaio, l’intreccio con l’argento, il passaggio delle mani. Il sito racconta questo percorso prima ancora del singolo prodotto.
```

---

## Home — Sezione 03: Griglia editoriale di ingresso

### Layout

Griglia asimmetrica 12 colonne.

Contenuti:

- Immagine laboratorio.
- Immagine dettaglio mani.
- Immagine pietre.
- Immagine Milano.
- Immagine prodotto indossato.
- Piccola card testuale.

### Card testuale

```text
Made in Milano.
Radici artigianali.
Sguardo contemporaneo.
```

### Note

La griglia deve avere ritmo da magazine. Non deve sembrare una gallery casuale.

---

## Home — Sezione 04: Il gesto

### Layout

Full width con immagine laboratorio o mani al lavoro.

Overlay laterale con testo.

### Copy indicativo

```text
Il valore è nel tempo che precede l’oggetto.
```

Testo:

```text
La lavorazione a telaio trasforma piccole pietre, catena d’argento e filo di lurex in gioielli tessili morbidi, luminosi e unici. Ogni pezzo richiede attenzione, lentezza e misura.
```

CTA:

`Scopri la filosofia`

---

## Home — Sezione 05: Collezioni in evidenza

### Layout

3 o 4 card editoriali grandi.

Collezioni da usare come prime card:

- Muamara Jaipur
- Muamara Star
- Muamara Madras
- Muamara Precious
- Muamara Holi / Tara

### Regola

No prezzi in questa sezione. Raccontare modello, tratto distintivo e parole-firma.

### Esempio card

```text
MUAMARA JAIPUR
Iconico · leggero · luminoso

Il modello fondativo DAG: piccole pietre intrecciate a mano con argento e lurex.
```

---

## Home — Sezione 06: Hotspot su immagine ambientata

### Layout

Immagine lifestyle full width con 2-3 hotspot `+`.

### Interazione

Al click si apre card prodotto flottante.

### Obiettivo

Mostrare il prodotto direttamente all’interno dell’immagine ambientata, senza interrompere l’esperienza editoriale.

---

## Home — Sezione 07: Stores teaser

### Layout

Fondo ivory/sand, testo grande, input di ricerca città.

### Copy indicativo

```text
Trova DAG vicino a te.
```

Testo:

```text
Una rete selezionata di rivenditori e boutique accompagna il brand sul territorio.
```

Componenti:

- Campo `Inserisci città o provincia`.
- CTA `Cerca rivenditore`.
- Link `Vai alla pagina Stores`.

---

## Home — Sezione 08: Eventi e collaborazioni teaser

### Layout

3 card orizzontali editoriali.

Contenuti possibili:

- Fiere moda.
- Collaborazioni.
- Showroom.
- Archivio stampa.

CTA:

`Scopri eventi e collaborazioni`

---

## Home — Sezione 09: Contatto finale

### Layout

Grande titolo + form minimale o CTA doppia.

### Copy indicativo

```text
Vuoi entrare in contatto con DAG?
```

CTA:

- `Scrivici`
- `Sei una boutique?`

---

# 14. Wireframe pagina About

## Obiettivo

Raccontare storia, valori, radici milanesi, passaggio generazionale e autorevolezza del brand.

## Azioni utente

- Capire da dove nasce DAG.
- Percepire qualità artigianale e heritage.
- Fidarsi del brand.

---

## About — Sezione 01: Hero

### Copy indicativo

```text
Una storia milanese
intrecciata a mano.
```

Sottotitolo:

```text
DAG nasce da una cultura artigianale fatta di gioielli, telaio, pietre e ricerca. Una storia che affonda le radici nel laboratorio e continua nel linguaggio contemporaneo del textile jewelry.
```

Layout:

- Hero con immagine laboratorio/archivio.
- Titolo serif grande.
- Didascalia fotografica.

---

## About — Sezione 02: Origine

Contenuti da integrare:

- Il primo bracciale Jaipur risale al 1980.
- La tecnica del telaio fu appresa da suore milanesi.
- DAG nasce da una famiglia storica di gioiellieri e orafi milanesi.
- Il Jaipur è il modello fondativo dell’universo DAG.

### Layout

Timeline verticale molto essenziale.

Esempio:

```text
1980
Il primo Jaipur prende forma.

Milano
Il laboratorio diventa il luogo del gesto.

Oggi
DAG porta il textile jewelry nel linguaggio della gioielleria contemporanea.
```

---

## About — Sezione 03: Archivio e memoria

### Layout

Griglia con documenti, foto, ritagli, packaging, strumenti.

### Copy indicativo

```text
Un archivio da riportare alla luce.
```

Testo:

```text
Vecchi articoli, appunti, materiali e tracce di laboratorio raccontano un’identità che merita di essere resa visibile: non come nostalgia, ma come materia viva del brand.
```

---

## About — Sezione 04: Milano come radice

### Layout

Immagine Milano + testo.

### Copy indicativo

```text
Made in Milano non è una formula. È il luogo in cui il gesto si ripete, si affina e prende forma.
```

---

## About — Sezione 05: CTA

CTA:

- `Scopri la filosofia`
- `Contattaci`

---

# 15. Wireframe pagina Philosophy

## Obiettivo

Spiegare la filosofia produttiva e trasformare artigianalità, lentezza e produzione su richiesta in valore percepito.

---

## Philosophy — Sezione 01: Hero

### Copy indicativo

```text
Il gioiello
prima del gioiello.
```

Sottotitolo:

```text
Prima dell’oggetto finale c’è un processo: pietre selezionate, catena d’argento, fili di lurex, gesti ripetuti e una lavorazione a telaio che rende ogni pezzo unico.
```

---

## Philosophy — Sezione 02: Processo in 5 step

Layout:

- Step numerati.
- Immagine/illustrazione o fotografia per ogni step.
- Testo breve.

Step:

1. Selezione delle pietre.
2. Preparazione dei materiali.
3. Tessitura a telaio.
4. Finitura e controllo.
5. Packaging con annotazione a mano.

### Copy tecnico da rispettare

Usare i termini:

- textile jewelry;
- gioiello tessile;
- tessuto a mano;
- lavorazione a telaio;
- argento 925;
- argento con 1 micron d’oro;
- filo di lurex;
- pietre semipreziose;
- produzione su richiesta.

Evitare:

- “infilato”;
- “montato”;
- “produzione industriale”;
- “pronta consegna” se non confermato.

---

## Philosophy — Sezione 03: L’intreccio Milano + Arezzo + India

### Contenuti

- Milano: tessitura e laboratorio.
- Arezzo: catena in argento.
- India / Jaisalmer: pietre ed elementi artigianali in argento.
- Jaipur: cultura delle pietre colorate.
- Muamara: significa “intreccio” in arabo.

### Nota importante

La grafia e le informazioni su Jaisalmer/Chesalmer e Polki/Pulki devono essere validate con la cliente prima della pubblicazione finale.

### Layout

Mappa astratta o trittico fotografico, non mappa turistica.

Titolo:

```text
Un intreccio di mani, luoghi e materiali.
```

---

## Philosophy — Sezione 04: Il valore dell’imperfezione

### Copy indicativo

```text
Ogni pezzo è unico perché ogni pietra, ogni filo e ogni gesto portano una variazione minima. È qui che l’artigianalità diventa visibile.
```

Layout:

- Macro dettagli prodotto.
- Didascalie tecniche.
- Microinterazioni al passaggio mouse.

---

## Philosophy — Sezione 05: Produzione su richiesta

### Obiettivo

Non presentare l’attesa come limite.

### Copy indicativo

```text
Realizzare su richiesta significa sottrarre il gioiello alla logica della quantità e restituirlo al tempo della cura.
```

CTA:

`Richiedi informazioni`

---

# 16. Wireframe pagina Collezioni

## Obiettivo

Permettere all’utente di scoprire le linee prodotto, comprendere materiali, stile e ricerca estetica senza trasformare il sito in un catalogo commerciale.

---

## Collezioni — Sezione 01: Hero

### Copy indicativo

```text
Collezioni che nascono
dal gesto e dal colore.
```

Sottotitolo:

```text
Ogni modello DAG ha un ritmo, una materia e una voce propria. Le collezioni raccontano l’equilibrio tra luce, pietre, argento e textile jewelry.
```

---

## Collezioni — Sezione 02: Navigazione modelli

Layout:

- Filtri soft, non e-commerce:
  - Iconici
  - Statement
  - Precious
  - Essentials
  - Nuovi modelli
- Nessun filtro prezzo in evidenza.
- Nessun bottone `Compra`.

---

## Collezioni — Sezione 03: Griglia editoriale modelli

### Modelli principali da prevedere

#### Muamara Jaipur

Parole-firma:

- iconico
- classico
- leggero
- morbido
- luminoso
- versatile

Racconto:

```text
Il modello fondativo del brand. Piccole pietre intrecciate a mano con catena d’argento e filo di lurex.
```

#### Muamara Star

Parole-firma:

- chic
- elegante
- raffinato
- charme
- cielo stellato
- fiori

Racconto:

```text
Un disegno raffinato, tra geometria e luce. Uno dei modelli più riconoscibili dell’universo DAG.
```

#### Muamara Madras

Parole-firma:

- importante
- appariscente
- statement
- contrasto
- non passa inosservato

Racconto:

```text
Un bracciale di carattere, costruito sul dialogo tra pietre, colore e presenza.
```

#### Muamara Sun

Parole-firma:

- luminoso
- solare
- deciso
- sportivo-elegante
- colore

Racconto:

```text
Quando la luce incontra il colore: un modello deciso, energico, contemporaneo.
```

#### Muamara Precious

Parole-firma:

- prezioso
- raffinato
- incanta
- fascino senza tempo
- esclusivo

Racconto:

```text
La linea più preziosa, con pietre selezionate e dettagli che portano il textile jewelry verso un registro più sofisticato.
```

#### Muamara Holi

Parole-firma:

- ricamato
- intreccio di culture
- elementi indiani
- senza tempo

Racconto:

```text
Un modello che racconta l’incontro tra materiali, colore e artigianalità, con elementi in argento lavorati a mano.
```

#### Muamara Tara

Parole-firma:

- rinascita
- albero in fiore
- delicato
- artigianalità

Racconto:

```text
Un intreccio delicato di luce, colore e gesto artigianale.
```

#### Muamara Textured / Lights

Parole-firma:

- quotidiano
- facile da portare
- luce da indossare
- essenziale
- luminoso

Racconto:

```text
I modelli più essenziali, pensati per accompagnare ogni giorno con discrezione e luce.
```

---

## Collezioni — Sezione 04: Scheda modello

Ogni scheda deve avere:

- Hero immagine.
- Nome modello.
- Testo narrativo.
- Specifica materiali.
- Parole-firma.
- Gallery.
- Hotspot se in foto ambientata.
- CTA `Trova un rivenditore`.
- CTA secondaria `Richiedi informazioni`.

### Struttura scheda

```text
[Nome modello]

[Headline emozionale]

[Descrizione breve]

Materiali
- Pietre semipreziose / preziose
- Argento 925
- 1 micron d’oro
- Filo di lurex
- Tessitura a telaio

Parole-firma
Iconico · luminoso · fatto a mano

[Gallery]
[CTA]
```

---

## Collezioni — Sezione 05: Dizionario pietre

Modulo editoriale opzionale.

Obiettivo:

- Dare valore ai materiali.
- Far emergere colore, significato, stagionalità.
- Non cadere in un tono troppo esoterico o decorativo.

Pietre da valorizzare:

- Tormalina
- Rubitormalina
- Granato
- Spinello nero
- Corallo
- Labradorite
- Pietra di luna
- Zaffiro
- Diopside
- Polki diamond
- Angelite

Formato:

- Card piccola con colore.
- Nome pietra.
- Microcopy.
- Collegamento ai modelli.

---

# 17. Wireframe pagina Stores

## Obiettivo

Permettere all’utente di trovare rapidamente un rivenditore DAG e rendere visibile la diffusione del marchio.

---

## Stores — Sezione 01: Hero

### Copy indicativo

```text
Trova DAG
nei migliori rivenditori.
```

Sottotitolo:

```text
Una rete selezionata di boutique e concept store accompagna DAG sul territorio.
```

---

## Stores — Sezione 02: Store finder

### Layout desktop

Due colonne:

- Sinistra: filtri e lista.
- Destra: mappa.

### Layout mobile

- Campo ricerca in alto.
- Lista risultati.
- Mappa collassabile.

### Filtri

- Città.
- Provincia.
- Regione.
- Nome boutique.
- Geolocalizzazione opzionale: `Usa la mia posizione`.

### Risultato card

```text
Nome boutique
Indirizzo
Città, Provincia
Telefono
Sito / Instagram
[Indicazioni]
```

### Stati UX

- Stato vuoto: `Inserisci una città o una provincia.`
- Nessun risultato: `Non trovi un rivenditore vicino a te? Scrivici e ti aiuteremo.`
- Caricamento.
- Errore.

### Nota dati

Usare dati placeholder se il database rivenditori non è ancora disponibile. Preparare comunque la struttura per circa 300 rivenditori.

---

## Stores — Sezione 03: CTA boutique

### Copy indicativo

```text
Sei una boutique o un concept store?
```

Testo:

```text
DAG lavora con una rete selezionata di rivenditori. Se vuoi conoscere le collezioni o ricevere informazioni commerciali, entra in contatto con il brand.
```

CTA:

`Contattaci come rivenditore`

---

# 18. Wireframe pagina Eventi e collaborazioni

## Obiettivo

Raccontare la presenza di DAG nel sistema moda, nelle fiere, negli showroom e nelle collaborazioni, rafforzando autorevolezza e posizionamento internazionale.

---

## Eventi — Sezione 01: Hero

### Copy indicativo

```text
DAG nel sistema moda.
```

Sottotitolo:

```text
Fiere, showroom e collaborazioni raccontano il dialogo del brand con boutique, buyer e nuovi contesti creativi.
```

---

## Eventi — Sezione 02: Fiere

Contenuti da prevedere:

- Première Classe — Parigi.
- DNA — New York / Los Angeles.
- WHITE Milano.
- Eventuali showroom e circuiti moda.

Layout:

- Timeline o griglia card.
- Foto + luogo + data.
- No effetto blog generico.

---

## Eventi — Sezione 03: Collaborazioni

Layout:

- Cards editoriali.
- Possibilità di inserire:
  - capsule;
  - shooting;
  - press;
  - partnership;
  - designer / illustratori;
  - progetti speciali.

---

## Eventi — Sezione 04: Press / archivio

Modulo opzionale.

Obiettivo:

- valorizzare archivio giornali e articoli storici;
- rendere il brand più autorevole;
- preparare spazio per PR future.

---

# 19. Wireframe pagina Contatti

## Obiettivo

Generare lead qualificati e offrire un contatto chiaro a clienti, boutique, buyer e stampa.

---

## Contatti — Sezione 01: Hero

### Copy indicativo

```text
Entriamo in contatto.
```

Sottotitolo:

```text
Per informazioni sui gioielli, sui rivenditori o sulle collaborazioni commerciali, scrivici attraverso il form.
```

---

## Contatti — Sezione 02: Form biforcato

Prima scelta:

```text
Sono:
[Cliente finale] [Rivenditore / Boutique] [Press / Collaborazione]
```

### Campi cliente finale

- Nome.
- Email.
- Telefono.
- Città.
- Richiesta.
- Messaggio.

### Campi rivenditore / boutique

- Nome referente.
- Nome boutique / azienda.
- Email.
- Telefono.
- Città.
- Paese.
- Sito / Instagram.
- Messaggio.

### Campi press / collaborazione

- Nome.
- Realtà / testata / progetto.
- Email.
- Telefono.
- Messaggio.

### CTA

`Invia richiesta`

### Microcopy

```text
Leggiamo ogni richiesta con attenzione. Ti risponderemo il prima possibile.
```

---

## Contatti — Sezione 03: Contatti diretti

Prevedere blocchi per:

- Email.
- Telefono.
- Instagram.
- Showroom / laboratorio se comunicabile.
- Privacy policy.

---

# 20. Interazioni e microanimazioni

### Principi

Le animazioni devono essere leggere, lente e coerenti con il ritmo editoriale.

### Prevedere

- Fade in morbidi su titoli e immagini.
- Parallax molto leggero solo su immagini grandi.
- Hover sulle card collezione: zoom immagine massimo 3%.
- Hover CTA: cambio colore terracotta / oro spento.
- Hotspot `+`: leggero pulse ogni 4-5 secondi.
- Apertura card hotspot con fade + small translate.
- Store finder: filtri con transizione morbida.
- Drawer menu mobile fluido.

### Evitare

- Animazioni veloci.
- Effetti 3D eccessivi.
- Carousel automatici invasivi.
- Scroll hijacking.
- Pop-up promozionali.

---

# 21. Responsive design

## Breakpoint consigliati

```css
--mobile: 360px;
--mobile-large: 480px;
--tablet: 768px;
--desktop: 1024px;
--wide: 1440px;
```

## Regole mobile

- Hero con immagine alta ma non eccessiva.
- Titoli grandi ma leggibili.
- Ridurre griglie editoriali a stack verticale.
- Hotspot facilmente cliccabili.
- Store finder: lista prima della mappa.
- Form con campi full width.
- Header con menu hamburger.
- CTA sempre visibili ma non sticky invasiva.

---

# 22. Accessibilità

- Contrasto sufficiente tra testo e sfondo.
- Non affidare informazioni solo al colore.
- Hotspot con label accessibile.
- Focus state visibile.
- Form con label esplicite.
- Alt text descrittivi per tutte le immagini.
- Navigazione da tastiera.
- `prefers-reduced-motion` per ridurre animazioni.
- Testi non inferiori a 14px su mobile.
- CTA con area cliccabile minima 44x44px.

---

# 23. SEO e struttura contenuti

Il sito è vetrina, ma deve comunque essere leggibile e indicizzabile.

## Meta title indicativi

### Home

`DAG Gioielli | Gioielli tessili artigianali Made in Milano`

### About

`About DAG | Storia e laboratorio milanese`

### Philosophy

`Philosophy | Textile jewelry, artigianalità e produzione su richiesta`

### Collezioni

`Collezioni DAG | Muamara, Jaipur, Star, Precious e gioielli tessili`

### Stores

`Stores DAG | Trova un rivenditore DAG Gioielli`

### Contatti

`Contatti DAG | Informazioni, rivenditori e collaborazioni`

## Parole chiave da integrare con naturalezza

- DAG Gioielli
- gioielli artigianali Milano
- gioielli tessili
- textile jewelry
- gioielli Made in Milano
- gioielli contemporanei
- bracciali artigianali
- pietre semipreziose
- argento 925
- rivenditori DAG
- boutique gioielli contemporanei

---

# 24. Tono di voce

Il sito deve comunicare con una voce:

- elegante;
- essenziale;
- sofisticata;
- autentica;
- contemporanea;
- calda;
- competente;
- mai autoreferenziale;
- mai elitista;
- mai promozionale.

## Archetipo comunicativo

70% Creatore + 30% Saggio.

Significa:

- raccontare il processo, il gesto, la materia;
- dare informazioni tecniche con misura;
- evitare enfasi eccessiva;
- evitare frasi generiche da lusso;
- evitare emoji decorative;
- evitare linguaggio da vendita aggressiva.

## Lessico da utilizzare

- laboratorio milanese;
- fatto a mano;
- tessuto al telaio;
- textile jewelry;
- gioiello tessile;
- pietre semipreziose;
- argento 925;
- 1 micron d’oro;
- filo di lurex;
- cura;
- gesto;
- lentezza;
- intreccio;
- luce;
- colore;
- equilibrio;
- carattere;
- manifattura;
- pezzo unico;
- produzione su richiesta.

## Lessico da evitare

- must-have;
- imperdibile;
- bestseller in senso commerciale troppo spinto;
- compra ora;
- sconto;
- limited time;
- lusso esclusivo in tono elitario;
- accessorio fashion generico;
- trend del momento;
- produzione immediata.

---

# 25. Indicazioni tecniche per sviluppo wireframe

## Tipo progetto

Realizzare un wireframe ad alta fedeltà navigabile.

Può essere sviluppato come:

- sito statico HTML/CSS/JS;
- oppure progetto Vite/React se già previsto dal workflow del repository.

In assenza di indicazioni diverse, preferire una struttura semplice, leggibile e facilmente versionabile.

## Struttura cartelle suggerita

```text
dag-wireframe/
├── index.html
├── about.html
├── philosophy.html
├── collections.html
├── stores.html
├── events.html
├── contact.html
├── README.md
├── assets/
│   ├── images/
│   ├── icons/
│   └── fonts/
├── css/
│   ├── reset.css
│   ├── variables.css
│   ├── typography.css
│   ├── components.css
│   ├── layout.css
│   └── pages.css
└── js/
    ├── main.js
    ├── hotspots.js
    ├── stores.js
    └── animations.js
```

## File CSS principali

### variables.css

Definire:

- palette;
- font family;
- spacing scale;
- border radius;
- transitions;
- breakpoints.

### typography.css

Definire:

- H1, H2, H3;
- body;
- label;
- caption;
- link;
- CTA.

### components.css

Definire:

- header;
- footer;
- buttons;
- cards;
- hotspot;
- forms;
- store finder;
- gallery;
- editorial grid.

### layout.css

Definire:

- container;
- grid system;
- section spacing;
- responsive.

---

# 26. Componenti JS da implementare

## hotspots.js

Funzioni:

- posizionare hotspot su immagini;
- aprire/chiudere card prodotto;
- chiudere card al click fuori;
- supporto mobile tap;
- supporto keyboard.

## stores.js

Funzioni:

- dataset placeholder rivenditori;
- ricerca per città/provincia/regione;
- filtri;
- stato vuoto;
- stato nessun risultato;
- card risultato;
- eventuale mappa placeholder.

## animations.js

Funzioni:

- intersection observer per fade-in;
- rispetto di `prefers-reduced-motion`;
- gestione header sticky;
- microinterazioni leggere.

---

# 27. Dataset placeholder rivenditori

Usare placeholder finché non viene fornito il database reale.

Esempio struttura:

```js
const stores = [
  {
    name: "Boutique Placeholder Milano",
    city: "Milano",
    province: "MI",
    region: "Lombardia",
    address: "Via esempio 1",
    phone: "+39 000 000000",
    website: "#",
    instagram: "#",
    lat: null,
    lng: null
  }
];
```

Non inventare nomi reali di rivenditori.

---

# 28. Copy placeholder da non pubblicare senza validazione

I seguenti elementi devono essere confermati dalla cliente prima di pubblicare il sito finale:

- grafia Jaisalmer / Chesalmer;
- grafia Polki / Pulki;
- eventuale indirizzo laboratorio;
- lista ufficiale rivenditori;
- archivio stampa;
- immagini storiche;
- nomi definitivi delle collezioni attive;
- disponibilità dei modelli non presenti in linesheet;
- dati commerciali e prezzi, da non usare pubblicamente se non autorizzati.

---

# 29. Checklist qualità wireframe

## Visual

- Il sito appare come una rivista di design, non come un e-commerce.
- Fotografie ampie e centrali.
- Molto spazio bianco.
- Palette calda e neutra.
- Terracotta usato con misura.
- Tipografia EB Garamond ben visibile.
- Poppins leggibile nel body.
- Nessuna griglia prodotto troppo commerciale.

## UX

- L’utente capisce subito cosa rende DAG speciale.
- Il percorso verso Stores è chiaro.
- Il form è semplice.
- La pagina Stores è facile da usare.
- Le collezioni sono esplorabili senza pressione all’acquisto.
- Gli hotspot prodotto sono intuitivi.
- Mobile fluido e leggibile.

## Strategia

- Artigianalità non resta sullo sfondo.
- Il laboratorio è presente.
- La produzione su richiesta è trasformata in valore.
- Il legame Milano + India è raccontato con misura.
- Il brand risulta contemporaneo, non classico/antico.
- Il prodotto resta protagonista.

## Tecnica

- Layout responsive.
- Codice pulito.
- Componenti riutilizzabili.
- Nessun dato inventato.
- Immagini in cartella assets.
- Form pronto per integrazione futura.
- Store finder pronto per dati reali.
- Accessibilità base rispettata.

---

# 30. Prompt operativo per Claude Code / GitHub Copilot

Usa questo documento come riferimento principale per costruire il wireframe ad alta fedeltà del sito vetrina DAG Gioielli.

Obiettivo: realizzare un sito navigabile, elegante e coerente con la direzione creativa indicata, usando HTML/CSS/JS o il framework già presente nel repository.

Il sito deve includere le seguenti pagine:

- Home
- About
- Philosophy
- Collezioni
- Stores
- Eventi e collaborazioni
- Contatti

Rispetta:

- font primario `EB Garamond` per titoli;
- font secondario `Poppins` per body, sottotitoli e UI;
- palette:
  - `#A88F2C`
  - `#F2EDE4`
  - `#BF9775`
  - `#A25C42`
  - `#A64005`
  - `#C6633E`
- mood editoriale, caldo, essenziale e contemporaneo;
- sito vetrina, non e-commerce;
- forte spazio alla fotografia;
- artigianalità, laboratorio e processo produttivo sempre visibili;
- hotspot `+` sulle immagini ambientate;
- pagina Stores con ricerca e filtri;
- form di contatto con percorso cliente finale / rivenditore / press;
- microanimazioni leggere;
- responsive mobile curato.

Non inventare dati reali mancanti. Usa placeholder riconoscibili dove non ci sono contenuti definitivi.

Alla fine, fornisci sempre:

1. elenco file creati/modificati;
2. URL o comando per vedere la preview locale;
3. eventuali contenuti mancanti da richiedere alla cliente.
