export const locales = ["sl", "en", "de"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "sl";

export const localeLabels: Record<Locale, string> = {
  sl: "SL",
  en: "EN",
  de: "DE"
};

export const contactEmail = "tonika2.si@siol.net";

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export const company = {
  legalName: "TONIKA 2 trgovina in mednarodni transport d.o.o.",
  shortName: "TONIKA 2 d.o.o.",
  taxId: "SI55470629",
  registration: "1319604000",
  street: "Bratovseva ploscad 8",
  city: "1000 Ljubljana",
  countrySl: "Slovenija",
  countryEn: "Slovenia",
  address: "Bratovseva ploscad 8, 1000 Ljubljana, Slovenija",
  phonePrimary: "+386 41 536 381",
  phoneSecondary: "+386 1 300 77 46",
  email: contactEmail,
  website: "transporttonika2.com"
};

const gallerySources = {
  hero: "/images/hero-truck-alps.jpg",
  fleetNight: "/images/fleet-night.jpg",
  fleetLineup: "/images/fleet-lineup.jpg",
  trailerMountains: "/images/trailer-mountains.jpg",
  rainyTransport: "/images/rainy-transport.jpg",
  loadingDock: "/images/loading-dock.jpg",
  volvoTrailerGreen: "/images/volvo-trailer-green.jpg",
  swissSunrise: "/images/tonika-swiss-alps-sunrise.png",
  route: "/images/tonika-slovenia-switzerland-route.png",
  center: "/images/tonika-cold-chain-center.png",
  nightMotorway: "/images/tonika-night-motorway.png",
  temperatureLoading: "/images/tonika-temperature-loading.png"
};

export const legalLinks = [
  { href: "/privacy-policy", key: "privacy" },
  { href: "/cookies", key: "cookies" },
  { href: "/terms-of-use", key: "terms" }
] as const;

export const content = {
  sl: {
    seoTitle: "Premium hladilni transport Slovenija-Svica-Evropa",
    seoDescription:
      "TONIKA 2 d.o.o. izvaja premium temperaturno voden transport, specializirane relacije Slovenija-Svica in certificirano hladilnisko logistiko po Evropi.",
    nav: ["Podjetje", "Storitve", "Vozni park", "Zakaj TONIKA 2", "Statistika", "Galerija", "Kontakt"],
    hero: {
      eyebrow: "Hladilni transport od leta 1996",
      title: "Hladilna logistika za blago, kjer kompromisi niso dovoljeni.",
      lead:
        "TONIKA 2 povezuje Slovenijo, Svico in Evropo z roznato-belo hladilnisko floto, stalnim nadzorom temperature in operativno natancnostjo, ki jo zahtevajo zivila, farmacija in blago visoke vrednosti.",
      primary: "Poslji povprasevanje",
      secondary: "Oglej si vozni park"
    },
    about: {
      eyebrow: "Druzinsko podjetje. Mednarodni standard.",
      title: "Specialist za zanesljive evropske hladilne relacije.",
      body:
        "Od leta 1996 TONIKA 2 razvija transportno izkusnjo, ki zdruzuje poznavanje Svicarskih relacij, sodobno hladilnisko tehnologijo in natancno pripravljeno dokumentacijo. Vsaka posiljka je vodena z mislijo na cas, temperaturo, varnost in zaupanje narocnika.",
      highlights: ["Slovenija-Svica-Slovenija", "Hrvaska in juzna EU", "Kompletni in delni nakladi", "Vec kot 100 poslovnih partnerjev"]
    },
    servicesTitle: "Transport kot premium operacijski sistem.",
    servicesLead:
      "Ne prodajamo kilometrov. Upravljamo temperaturo, cas, carinske tokove in informacije, ki varujejo vrednost vasega blaga.",
    services: [
      { title: "Hladilni transport", text: "Temperaturno voden prevoz hitro pokvarljivega, zamrznjenega, zivilskega in farmacevtskega blaga od +25 do -25 \u00b0C." },
      { title: "Specialist za Svico", text: "Redne relacije Slovenija-Svica-Slovenija z izkusenimi vozniki, zanesljivimi casovnicami in poznavanjem lokalnih posebnosti." },
      { title: "Carinjenje in dokumentacija", text: "Organizacija uvoznega in izvoznega carinjenja v Sloveniji in Svici ter priprava transportnih listin brez operativnega trenja." },
      { title: "Blago visoke vrednosti", text: "Prevoz farmacevtskih produktov, ADR posiljk, zbirnih posiljk in ekspresnih prevozov z dvojno posadko." }
    ],
    fleet: {
      eyebrow: "Vozni park",
      title: "TONIKA 2 flota za natancen nadzor temperature in casa.",
      cards: [
        { title: "Volvo hladilni transport", image: gallerySources.hero, spec: "EURO 6 / GPS / hladilna nadgradnja", text: "Premium vlecna vozila Volvo za dolge mednarodne relacije in zanesljivo dostavo v Svico." },
        { title: "Scania hladilni transport", image: gallerySources.rainyTransport, spec: "EURO 5-6 / telematika / 24/7", text: "Mocna Scania konfiguracija za zahtevne vremenske razmere, alpske koridorje in casovno obcutljiv tovor." },
        { title: "Schmitz hladilni priklopniki", image: gallerySources.trailerMountains, spec: "33-66 palet / ATP / kalibracija", text: "Hladilni priklopniki z izpisom temperature, dvo-nivojskim dnom in certificirano izvedbo za zivila ter farmacijo." },
        { title: "Dvotemperaturni transport", image: gallerySources.volvoTrailerGreen, spec: "Dva rezima / en prevoz", text: "Izbrani priklopniki omogocajo hkraten prevoz tovora z razlicnimi temperaturnimi zahtevami." },
        { title: "ADR transport", image: gallerySources.loadingDock, spec: "ADR oprema / usposobljeni vozniki", text: "Oprema in postopki za regulirane posiljke, pri katerih sta skladnost in sledljivost kljucni." }
      ],
      facts: [
        ["5 vozil", "Volvo in Scania vozila EURO 6, EURO 5 in EEV s telematiko GPS/GSM/SMS."],
        ["7 priklopnikov", "Schmitz hladilniki s kapaciteto 33-66 euro palet in dvo-nivojskim dnom."],
        ["Dvotemperaturno", "Trije priklopniki omogocajo hkraten prevoz dveh temperaturnih rezimov."],
        ["Certificirano", "ATP, kalibracija, izpis temperature, ADR oprema ter certifikat za hrano in zdravila."]
      ]
    },
    trust: {
      eyebrow: "Zakaj TONIKA 2",
      title: "Zaupanje zgrajeno na natancnosti, sledljivosti in izkusnjah.",
      cards: ["Od leta 1996", "Specialist Slovenija-Svica", "ATP certificiran transport", "ADR transport", "GPS sledenje", "Zavarovanje tovora do \u20ac1,000,000", "Nadzor temperature", "Farmacevtski transport"]
    },
    stats: [
      ["1996+", "Ustanovitev podjetja"],
      ["25+", "Drzav v dosegu"],
      ["\u20ac1,000,000", "Zavarovanje tovora"],
      ["24/7", "Dosegljivost"],
      ["100%", "Nadzor temperature"]
    ],
    gallery: {
      title: "TONIKA 2 na evropskih relacijah.",
      lead: "Brendirana flota, alpske poti, nocne dostave in hladilniske operacije v vizualni zgodbi, ki odraza realno identiteto podjetja.",
      images: [
        { src: gallerySources.hero, title: "TONIKA 2 v Alpah", tag: "Svica", tall: true },
        { src: gallerySources.fleetNight, title: "Nocna flota", tag: "Operacije" },
        { src: gallerySources.fleetLineup, title: "Vozni park TONIKA 2", tag: "Flota" },
        { src: gallerySources.trailerMountains, title: "Priklopnik v gorah", tag: "Hladilni transport" },
        { src: gallerySources.rainyTransport, title: "Dezevna relacija", tag: "24/7", tall: true },
        { src: gallerySources.loadingDock, title: "Nakladalna rampa", tag: "Logistika" },
        { src: gallerySources.swissSunrise, title: "Svicarske Alpe ob soncnem vzhodu", tag: "Vrhunske relacije", tall: true },
        { src: gallerySources.route, title: "Slovenija-Svica", tag: "Mednarodni transport" },
        { src: gallerySources.center, title: "Hladilni logisticni center", tag: "Hladna veriga" },
        { src: gallerySources.nightMotorway, title: "Nocni avtocestni transport", tag: "Ekspres" },
        { src: gallerySources.temperatureLoading, title: "Temperaturno voden naklad", tag: "Nadzor temperature", tall: true },
        { src: gallerySources.volvoTrailerGreen, title: "Volvo in hladilni priklopnik", tag: "TONIKA 2" }
      ]
    },
    contact: {
      title: "Odprimo zanesljivo relacijo.",
      lead: "Posljite povprasevanje in pripravili bomo transportno resitev glede na temperaturo, rok, dokumentacijo in destinacijo.",
      name: "Ime",
      company: "Podjetje",
      email: "E-posta",
      phone: "Telefon",
      message: "Sporocilo",
      consent: "Strinjam se, da TONIKA 2 obdela moje podatke za namen odgovora na povprasevanje.",
      submit: "Poslji povprasevanje",
      success: "Sporocilo je bilo poslano. Ekipa TONIKA 2 vas bo kontaktirala.",
      error: "Sporocila trenutno ni bilo mogoce poslati. Poskusite znova ali pisite neposredno na e-posto."
    },
    ui: { close: "Zapri", previous: "Prejsnja", next: "Naslednja" },
    footer: {
      line: "Premium hladilni transport. Slovenija. Svica. Evropa.",
      privacy: "Politika zasebnosti",
      cookies: "Piskotki",
      terms: "Pogoji uporabe"
    }
  },
  en: {
    seoTitle: "Premium refrigerated transport Slovenia-Switzerland-Europe",
    seoDescription:
      "TONIKA 2 d.o.o. provides premium temperature-controlled transport, Slovenia-Switzerland route expertise, and certified refrigerated logistics across Europe.",
    nav: ["Company", "Services", "Fleet", "Why TONIKA 2", "Statistics", "Gallery", "Contact"],
    hero: {
      eyebrow: "Cold-chain transport since 1996",
      title: "Refrigerated logistics for cargo where compromise is not an option.",
      lead:
        "TONIKA 2 connects Slovenia, Switzerland and Europe with a pink-white refrigerated fleet, continuous temperature control and operational precision for food, pharma and high-value cargo.",
      primary: "Send inquiry",
      secondary: "View fleet"
    },
    about: {
      eyebrow: "Family-owned. International standard.",
      title: "A specialist for reliable European refrigerated routes.",
      body:
        "Since 1996, TONIKA 2 has built a transport experience around Swiss route expertise, modern refrigerated technology and precisely prepared documentation. Every shipment is managed around time, temperature, safety and customer trust.",
      highlights: ["Slovenia-Switzerland-Slovenia", "Croatia and Southern EU", "Full and partial loads", "More than 100 business partners"]
    },
    servicesTitle: "Transport as a premium operating system.",
    servicesLead:
      "We do not sell kilometers. We manage temperature, timing, customs flows and information that protects the value of your cargo.",
    services: [
      { title: "Refrigerated transport", text: "Temperature-controlled transport for perishable, frozen, food and pharmaceutical cargo from +25 to -25 \u00b0C." },
      { title: "Switzerland specialist", text: "Regular Slovenia-Switzerland-Slovenia routes with experienced drivers, reliable timing and local route expertise." },
      { title: "Customs and documentation", text: "Import and export customs coordination in Slovenia and Switzerland with transport documentation prepared without operational friction." },
      { title: "High-value cargo", text: "Transport for pharmaceutical products, ADR shipments, groupage cargo and express routes with double crews." }
    ],
    fleet: {
      eyebrow: "Fleet",
      title: "A TONIKA 2 fleet built for temperature and timing control.",
      cards: [
        { title: "Volvo refrigerated transport", image: gallerySources.hero, spec: "EURO 6 / GPS / refrigerated equipment", text: "Premium Volvo tractors for long international routes and reliable deliveries to Switzerland." },
        { title: "Scania refrigerated transport", image: gallerySources.rainyTransport, spec: "EURO 5-6 / telematics / 24/7", text: "Strong Scania configuration for demanding weather, Alpine corridors and time-sensitive cargo." },
        { title: "Schmitz refrigerated trailers", image: gallerySources.trailerMountains, spec: "33-66 pallets / ATP / calibration", text: "Refrigerated trailers with temperature printouts, double-deck floors and certified food/pharma capability." },
        { title: "Dual-temperature transport", image: gallerySources.volvoTrailerGreen, spec: "Two regimes / one route", text: "Selected trailers support simultaneous transport of cargo with different temperature requirements." },
        { title: "ADR transport", image: gallerySources.loadingDock, spec: "ADR equipment / trained drivers", text: "Equipment and procedures for regulated shipments where compliance and traceability are essential." }
      ],
      facts: [
        ["5 vehicles", "Volvo and Scania EURO 6, EURO 5 and EEV vehicles with GPS/GSM/SMS telematics."],
        ["7 trailers", "Schmitz refrigerated trailers with 33-66 euro-pallet capacity and double-deck floors."],
        ["Dual-temp", "Three trailers support simultaneous transport across two temperature regimes."],
        ["Certified", "ATP, calibration, temperature printouts, ADR equipment and food/pharma transport certification."]
      ]
    },
    trust: {
      eyebrow: "Why TONIKA 2",
      title: "Trust built on precision, visibility and experience.",
      cards: ["Since 1996", "Slovenia-Switzerland specialist", "ATP certified transport", "ADR transport", "GPS tracking", "Cargo insurance up to \u20ac1,000,000", "Temperature monitoring", "Pharmaceutical transport"]
    },
    stats: [
      ["1996+", "Company founded"],
      ["25+", "Countries served"],
      ["\u20ac1,000,000", "Cargo insurance"],
      ["24/7", "Availability"],
      ["100%", "Temperature monitoring"]
    ],
    gallery: {
      title: "TONIKA 2 on European routes.",
      lead: "Branded fleet, Alpine roads, night deliveries and refrigerated operations in a visual story that reflects the company identity.",
      images: [
        { src: gallerySources.hero, title: "TONIKA 2 in the Alps", tag: "Switzerland", tall: true },
        { src: gallerySources.fleetNight, title: "Night fleet", tag: "Operations" },
        { src: gallerySources.fleetLineup, title: "TONIKA 2 fleet", tag: "Fleet" },
        { src: gallerySources.trailerMountains, title: "Trailer in the mountains", tag: "Refrigerated transport" },
        { src: gallerySources.rainyTransport, title: "Rain route", tag: "24/7", tall: true },
        { src: gallerySources.loadingDock, title: "Loading dock", tag: "Logistics" },
        { src: gallerySources.swissSunrise, title: "Swiss Alps at sunrise", tag: "Premium routes", tall: true },
        { src: gallerySources.route, title: "Slovenia-Switzerland", tag: "International transport" },
        { src: gallerySources.center, title: "Cold-chain logistics center", tag: "Kuehlkette" },
        { src: gallerySources.nightMotorway, title: "Night motorway transport", tag: "Express" },
        { src: gallerySources.temperatureLoading, title: "Temperature-controlled loading", tag: "Temperature control", tall: true },
        { src: gallerySources.volvoTrailerGreen, title: "Volvo and refrigerated trailer", tag: "TONIKA 2" }
      ]
    },
    contact: {
      title: "Open a reliable route.",
      lead: "Send an inquiry and we will prepare a transport solution around your temperature, timeline, documentation and destination.",
      name: "Name",
      company: "Company",
      email: "Email",
      phone: "Phone",
      message: "Message",
      consent: "I agree that TONIKA 2 may process my data to respond to this inquiry.",
      submit: "Send inquiry",
      success: "Your message has been sent. TONIKA 2 will contact you shortly.",
      error: "The message could not be sent right now. Try again or write directly by email."
    },
    ui: { close: "Close", previous: "Previous", next: "Next" },
    footer: {
      line: "Premium refrigerated transport. Slovenia. Switzerland. Europe.",
      privacy: "Privacy Policy",
      cookies: "Cookies",
      terms: "Terms of Use"
    }
  },
  de: {
    seoTitle: "Premium Kuehltransport Slowenien-Schweiz-Europa",
    seoDescription:
      "TONIKA 2 d.o.o. bietet premium temperaturgefuehrte Transporte, Expertise fuer Slowenien-Schweiz-Routen und zertifizierte Kuehllogistik in Europa.",
    nav: ["Unternehmen", "Leistungen", "Fuhrpark", "Warum TONIKA 2", "Kennzahlen", "Galerie", "Kontakt"],
    hero: {
      eyebrow: "Kuehltransport seit 1996",
      title: "Kuehllogistik fuer Fracht, bei der Kompromisse keine Option sind.",
      lead:
        "TONIKA 2 verbindet Slowenien, die Schweiz und Europa mit einer pink-weissen Kuehlflotte, kontinuierlicher Temperaturkontrolle und operativer Praezision fuer Lebensmittel, Pharma und hochwertige Fracht.",
      primary: "Anfrage senden",
      secondary: "Fuhrpark ansehen"
    },
    about: {
      eyebrow: "Familienunternehmen. Internationaler Standard.",
      title: "Spezialist fuer zuverlaessige europaeische Kuehlrouten.",
      body:
        "Seit 1996 entwickelt TONIKA 2 eine Transportleistung rund um Schweizer Routenexpertise, moderne Kuehltechnik und praezise vorbereitete Dokumentation. Jede Sendung wird nach Zeit, Temperatur, Sicherheit und Kundenvertrauen gefuehrt.",
      highlights: ["Slowenien-Schweiz-Slowenien", "Kroatien und Sued-EU", "Komplett- und Teilladungen", "Mehr als 100 Geschaeftspartner"]
    },
    servicesTitle: "Transport als Premium-Betriebssystem.",
    servicesLead:
      "Wir verkaufen keine Kilometer. Wir steuern Temperatur, Zeit, Zollprozesse und Informationen, die den Wert Ihrer Ware sichern.",
    services: [
      { title: "Kuehltransport", text: "Temperaturgefuehrter Transport fuer verderbliche, gefrorene, Lebensmittel- und Pharmagueter von +25 bis -25 \u00b0C." },
      { title: "Spezialist fuer die Schweiz", text: "Regelmaessige Slowenien-Schweiz-Slowenien-Routen mit erfahrenen Fahrern, verlaesslichen Zeitfenstern und Streckenkenntnis." },
      { title: "Zoll und Dokumentation", text: "Organisation von Import- und Exportverzollung in Slowenien und der Schweiz inklusive Transportdokumenten." },
      { title: "Hochwertige Fracht", text: "Transport pharmazeutischer Produkte, ADR-Sendungen, Sammelgut und Expressfahrten mit Doppelbesatzung." }
    ],
    fleet: {
      eyebrow: "Fuhrpark",
      title: "Eine TONIKA 2 Flotte fuer Temperatur- und Zeitkontrolle.",
      cards: [
        { title: "Volvo Kuehltransport", image: gallerySources.hero, spec: "EURO 6 / GPS / Kuehlausruestung", text: "Premium Volvo Zugmaschinen fuer internationale Langstrecken und zuverlaessige Lieferungen in die Schweiz." },
        { title: "Scania Kuehltransport", image: gallerySources.rainyTransport, spec: "EURO 5-6 / Telematik / 24/7", text: "Starke Scania Konfiguration fuer anspruchsvolles Wetter, Alpenkorridore und zeitkritische Fracht." },
        { title: "Schmitz Kuehlauflieger", image: gallerySources.trailerMountains, spec: "33-66 Paletten / ATP / Kalibrierung", text: "Kuehlauflieger mit Temperaturausdruck, Doppelstockboden und zertifizierter Lebensmittel- und Pharmafaehigkeit." },
        { title: "Zwei-Temperatur-Transport", image: gallerySources.volvoTrailerGreen, spec: "Zwei Regime / eine Route", text: "Ausgewaehlte Auflieger ermoeglichen gleichzeitigen Transport mit unterschiedlichen Temperaturanforderungen." },
        { title: "ADR Transport", image: gallerySources.loadingDock, spec: "ADR-Ausruestung / geschulte Fahrer", text: "Ausruestung und Prozesse fuer regulierte Sendungen, bei denen Compliance und Rueckverfolgbarkeit entscheidend sind." }
      ],
      facts: [
        ["5 Fahrzeuge", "Volvo und Scania EURO 6, EURO 5 und EEV mit GPS/GSM/SMS-Telematik."],
        ["7 Auflieger", "Schmitz Kuehlauflieger mit 33-66 Europaletten Kapazitaet und Doppelstockboden."],
        ["Zwei Temperaturen", "Drei Auflieger ermoeglichen zwei Temperaturbereiche gleichzeitig."],
        ["Zertifiziert", "ATP, Kalibrierung, Temperaturausdrucke, ADR-Ausstattung und Zertifikate fuer Lebensmittel und Pharma."]
      ]
    },
    trust: {
      eyebrow: "Warum TONIKA 2",
      title: "Vertrauen durch Praezision, Transparenz und Erfahrung.",
      cards: ["Seit 1996", "Spezialist Slowenien-Schweiz", "ATP zertifizierter Transport", "ADR Transport", "GPS-Tracking", "Warenversicherung bis \u20ac1,000,000", "Temperaturueberwachung", "Pharmatransport"]
    },
    stats: [
      ["1996+", "Gruendung"],
      ["25+", "Bediente Laender"],
      ["\u20ac1,000,000", "Warenversicherung"],
      ["24/7", "Erreichbarkeit"],
      ["100%", "Temperaturueberwachung"]
    ],
    gallery: {
      title: "TONIKA 2 auf europaeischen Routen.",
      lead: "Gebrandete Flotte, Alpenstrassen, Nachtlieferungen und Kuehloperationen in einer visuellen Geschichte, die die Unternehmensidentitaet widerspiegelt.",
      images: [
        { src: gallerySources.hero, title: "TONIKA 2 in den Alpen", tag: "Schweiz", tall: true },
        { src: gallerySources.fleetNight, title: "Nachtflotte", tag: "Operationen" },
        { src: gallerySources.fleetLineup, title: "TONIKA 2 Fuhrpark", tag: "Flotte" },
        { src: gallerySources.trailerMountains, title: "Auflieger in den Bergen", tag: "Kuehltransport" },
        { src: gallerySources.rainyTransport, title: "Regenroute", tag: "24/7", tall: true },
        { src: gallerySources.loadingDock, title: "Laderampe", tag: "Logistik" },
        { src: gallerySources.swissSunrise, title: "Schweizer Alpen bei Sonnenaufgang", tag: "Premium Routen", tall: true },
        { src: gallerySources.route, title: "Slowenien-Schweiz", tag: "Internationaler Transport" },
        { src: gallerySources.center, title: "Kuehllogistikzentrum", tag: "Kuehlkette" },
        { src: gallerySources.nightMotorway, title: "Nachttransport auf der Autobahn", tag: "Express" },
        { src: gallerySources.temperatureLoading, title: "Temperaturgefuehrte Verladung", tag: "Temperaturkontrolle", tall: true },
        { src: gallerySources.volvoTrailerGreen, title: "Volvo und Kuehlauflieger", tag: "TONIKA 2" }
      ]
    },
    contact: {
      title: "Starten wir eine zuverlaessige Route.",
      lead: "Senden Sie Ihre Anfrage. Wir entwickeln eine Transportloesung nach Temperatur, Termin, Dokumentation und Zielort.",
      name: "Name",
      company: "Unternehmen",
      email: "E-Mail",
      phone: "Telefon",
      message: "Nachricht",
      consent: "Ich stimme zu, dass TONIKA 2 meine Daten zur Beantwortung dieser Anfrage verarbeitet.",
      submit: "Anfrage senden",
      success: "Ihre Nachricht wurde gesendet. TONIKA 2 wird Sie kontaktieren.",
      error: "Die Nachricht konnte momentan nicht gesendet werden. Bitte erneut versuchen oder direkt per E-Mail schreiben."
    },
    ui: { close: "Schliessen", previous: "Zurueck", next: "Weiter" },
    footer: {
      line: "Premium Kuehltransport. Slowenien. Schweiz. Europa.",
      privacy: "Datenschutzerklaerung",
      cookies: "Cookies",
      terms: "Nutzungsbedingungen"
    }
  }
} satisfies Record<Locale, object>;
