# Aghosh-e-Gulzar-e-Madina — statisk gjenoppretting

Statisk HTML/CSS/JS-kopi av WordPress-nettstedet, rekonstruert fra backupen
`backup-aghoshegulzar-e-madina.com-3-3-2023.tar.gz` og databasedumpen
`wwwaghos_sdf342fgdfwe5.sql.gz` (sikkerhetskopi datert 2023-03-03).

## Slik åpner du nettstedet
Åpne `index.html` direkte i en nettleser, eller server mappen lokalt:

```bash
cd restored-site
python -m http.server 8000
# åpne http://localhost:8000
```

## Struktur
```
restored-site/
├── index.html, *.html      13 sider (innhold hentet fra databasen)
├── assets/
│   ├── css/style.css       Design basert på det opprinnelige «Slide»-temaet
│   ├── js/main.js          Bildespill + mobilmeny + kontaktskjema
│   └── img/                Logo, slider, opplastede bilder og gallerier
└── data/content.json       Alle sider + gallerier som strukturert data (JSON)
```

## Datalaget (`data/content.json`)
Inneholder nettstedsinfo, navigasjon, alle sider (tittel, slug, dato, renset
HTML) og 14 gallerier med bildelister. Brukes hvis du senere vil bygge en
dynamisk versjon eller importere innholdet et annet sted.

## Merknader / kjente begrensninger
- **Kontaktskjema** (`contact.html`, `membership.html`) er statisk og må kobles
  til en backend eller e-posttjeneste for å motta innsendinger.
- **Galleribilder:** 14 gallerier (175 bilder) ble gjenopprettet fra
  `wp-content/gallery/`. 50 bildereferanser fra en eldre 2018-galleriinnsetting
  på History-siden fantes ikke i backupen og ble fjernet (de var allerede
  brutte i originaldataene).
- Donasjonslenken peker til den opprinnelige PayPal-en
  (`paypal.me/aghoshegulzaremadina`).
- Database, e-post og dynamiske WordPress-funksjoner er ikke gjenopprettet —
  dette er en ren statisk kopi av innholdet («db later», som avtalt).
```
```
