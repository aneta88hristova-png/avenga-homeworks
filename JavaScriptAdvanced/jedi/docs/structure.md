jediarchives/
│
├── index.html                    # Huvud HTML-fil
├── styles.css                    # Huvud CSS-fil
├── script.js                        # Huvud JavaScript-fil
│
├── assets/  V                   # Statiska resurser
│   ├── images/
│   │   ├── jedi-archives-logo.png   # App-logo
│   │   ├── person-icon.png          # Person-ikon
│   │   ├── starship-icon.png        # Starship-ikon
│   │   └── star-wars.jpg            # Bakgrundsbild
│   │
│   └── fonts/                     # Custom fonts (om nödvändigt)
│
├── components/                   # HTML-komponenter
│   ├── selection-view.html       # Val-vy HTML
│   ├── people-table.html         # Person-tabell HTML
│   ├── starships-table.html      # Starship-tabell HTML
│   └── pagination.html           # Pagination-komponent
│
├── css/                         # CSS-moduler
│   ├── layout.css               # Layout-stilar
│   ├── typography.css           # Typografi
│   ├── components.css           # Komponent-stilar
│   ├── tables.css               # Tabell-stilar
│   └── responsive.css           # Responsiva stilar
│
├── js/                          # JavaScript-moduler
│   ├── api/
│   │   ├── swapi-service.js     # API-anrop till SWAPI
│   │   └── cache-manager.js     # Caching för API-anrop
│   │
│   ├── views/
│   │   ├── view-manager.js      # 
│   │   ├── selection-view.js    # Val-vy logik
│   │   ├── people-view.js       # Person-vy logik
│   │   └── starships-view.js    # Starship-vy logik
│   │
│   ├── components/
│   │   ├── table-renderer.js    # Genererar tabeller
│   │   ├── pagination.js        # Pagination-logik
│   │   └── loading-spinner.js   # Laddningsindikator
│   │
│   ├── utils/
│   │   ├── helpers.js           # Hjälpfunktioner
│   │   ├── formatters.js        # Dataformatering
│   │   └── validators.js        # Validering
│   │
│   └── state/                   # State management
│       ├── app-state.js         # Globalt state
│       └── data-store.js        # Data-lagring
│
├── config/                      # Konfigurationsfiler
│   ├── constants.js             # App-konstanter
│   └── settings.json            # Inställningar
│
└── docs/                        # Dokumentation
    ├── api-docs.md              # API-dokumentation
    ├── user-guide.md            # Användarmanual
    └── dev-setup.md             # Utvecklarguide