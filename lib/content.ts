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
  street: "Bratov\u0161eva plo\u0161\u010dad 8",
  city: "1000 Ljubljana",
  countrySl: "Slovenija",
  countryEn: "Slovenia",
  address: "Bratov\u0161eva plo\u0161\u010dad 8, 1000 Ljubljana, Slovenija",
  phonePrimary: "+386 41 536 381",
  phoneSecondary: "+386 1 300 77 46",
  email: contactEmail,
  website: "transporttonika2.com"
};

const imageSources = {
  heroAlps: "/images/hero-alps.webp",
  heroNight: "/images/hero-night.webp",
  fleetVolvo: "/images/fleet-volvo.webp",
  fleetScania: "/images/fleet-scania.webp",
  fleetLineup: "/images/fleet-lineup.webp",
  trailerMountains: "/images/trailer-mountains.webp",
  gallery01: "/images/gallery-01.webp",
  gallery02: "/images/gallery-02.webp",
  gallery03: "/images/gallery-03.webp",
  gallery04: "/images/gallery-04.webp",
  gallery05: "/images/gallery-05.webp",
  gallery06: "/images/gallery-06.webp",
  gallery07: "/images/gallery-07.webp",
  gallery08: "/images/gallery-08.webp",
  gallery09: "/images/gallery-09.webp",
  gallery10: "/images/gallery-10.webp"
};

export const legalLinks = [
  { href: "/privacy-policy", key: "privacy" },
  { href: "/cookies", key: "cookies" },
  { href: "/terms-of-use", key: "terms" }
] as const;

export const content = {
  sl: {
    seoTitle: "Premium hladilni transport Slovenija-\u0160vica-Evropa",
    seoDescription:
      "TONIKA 2 d.o.o. izvaja premium temperaturno voden transport, specializirane relacije Slovenija-\u0160vica in certificirano hladilni\u0161ko logistiko po Evropi.",
    nav: ["Podjetje", "Storitve", "Vozni park", "Zakaj TONIKA 2", "Statistika", "Galerija", "Kontakt"],
    hero: {
      eyebrow: "Hladilni transport od leta 1996",
      title: "Hladilna logistika za blago, kjer kompromisi niso dovoljeni.",
      lead:
        "TONIKA 2 povezuje Slovenijo, \u0160vico in Evropo z ro\u017enato-belo hladilni\u0161ko floto, stalnim nadzorom temperature in natan\u010dno izvedbo za \u017eivila, farmacijo in blago visoke vrednosti.",
      primary: "Po\u0161lji povpra\u0161evanje",
      secondary: "Oglej si vozni park"
    },
    about: {
      eyebrow: "Dru\u017einsko podjetje. Mednarodni standard.",
      title: "Specialisti za zanesljive evropske hladilne relacije.",
      body:
        "Od leta 1996 TONIKA 2 razvija transportno izku\u0161njo, ki zdru\u017euje poznavanje \u0160vicarskih relacij, sodobno hladilni\u0161ko tehnologijo in natan\u010dno pripravljeno dokumentacijo. Vsaka po\u0161iljka je vodena z mislijo na \u010das, temperaturo, varnost in zaupanje naro\u010dnika.",
      highlights: ["Slovenija-\u0160vica-Slovenija", "Hrva\u0161ka in ju\u017ena EU", "Kompletni in delni nakladi", "Ve\u010d kot 100 poslovnih partnerjev"]
    },
    servicesTitle: "Transport kot premium operacijski sistem.",
    servicesLead:
      "Ne prodajamo kilometrov. Upravljamo temperaturo, \u010das, carinske tokove in informacije, ki varujejo vrednost va\u0161ega blaga.",
    services: [
      { title: "Hladilni transport", text: "Temperaturno voden prevoz hitro pokvarljivega, zamrznjenega, \u017eivilskega in farmacevtskega blaga od +25 do -25 \u00b0C." },
      { title: "Specialisti za \u0160vico", text: "Redne relacije Slovenija-\u0160vica-Slovenija z izku\u0161enimi vozniki, zanesljivimi \u010dasovnicami in poznavanjem lokalnih posebnosti." },
      { title: "Carinjenje in dokumentacija", text: "Organizacija uvoznega in izvoznega carinjenja v Sloveniji in \u0160vici ter priprava transportnih listin brez operativnega trenja." },
      { title: "Blago visoke vrednosti", text: "Prevoz farmacevtskih produktov, ADR po\u0161iljk, zbirnih po\u0161iljk in ekspresnih prevozov z dvojno posadko." }
    ],
    fleet: {
      eyebrow: "Vozni park",
      title: "TONIKA 2 flota za natan\u010den nadzor temperature in \u010dasa.",
      cards: [
        { title: "Volvo hladilni transport", image: imageSources.fleetVolvo, spec: "EURO 6 / GPS / hladilna nadgradnja", text: "Premium vle\u010dna vozila Volvo za dolge mednarodne relacije in zanesljivo dostavo v \u0160vico." },
        { title: "Scania hladilni transport", image: imageSources.fleetScania, spec: "EURO 5-6 / telematika / 24/7", text: "Mo\u010dna Scania konfiguracija za zahtevne vremenske razmere, alpske koridorje in \u010dasovno ob\u010dutljiv tovor." },
        { title: "Schmitz hladilni priklopniki", image: imageSources.trailerMountains, spec: "33-66 palet / ATP / kalibracija", text: "Hladilni priklopniki z izpisom temperature, dvo-nivojskim dnom in certificirano izvedbo za \u017eivila ter farmacijo." },
        { title: "Dvotemperaturni transport", image: imageSources.gallery05, spec: "Dva re\u017eima / en prevoz", text: "Izbrani priklopniki omogo\u010dajo hkraten prevoz tovora z razli\u010dnimi temperaturnimi zahtevami." },
        { title: "ADR prevozi", image: imageSources.gallery06, spec: "ADR oprema / usposobljeni vozniki", text: "Oprema in postopki za regulirane po\u0161iljke, pri katerih sta skladnost in sledljivost klju\u010dni." }
      ],
      facts: [
        ["5 vozil", "Volvo in Scania vozila EURO 6, EURO 5 in EEV s telematiko GPS/GSM/SMS."],
        ["7 priklopnikov", "Schmitz hladilniki s kapaciteto 33-66 euro palet in dvo-nivojskim dnom."],
        ["Dvotemperaturno", "Trije priklopniki omogo\u010dajo hkraten prevoz dveh temperaturnih re\u017eimov."],
        ["Certificirano", "ATP, kalibracija, izpis temperature, ADR oprema ter certifikat za hrano in zdravila."]
      ]
    },
    trust: {
      eyebrow: "Zakaj TONIKA 2?",
      title: "Zaupanje zgrajeno na natan\u010dnosti, sledljivosti in izku\u0161njah.",
      cards: ["Od leta 1996", "Specialisti za \u0160vico", "ATP certificiran transport", "ADR prevozi", "GPS sledenje", "Farmacevtski transport", "Temperaturni monitoring", "Zavarovanje do 1.000.000 \u20ac"]
    },
    stats: [
      ["1996+", "Ustanovitev podjetja"],
      ["25+", "Dr\u017eav v dosegu"],
      ["\u20ac1,000,000", "Zavarovanje tovora"],
      ["24/7", "Dosegljivost"],
      ["100%", "Nadzor temperature"]
    ],
    gallery: {
      title: "TONIKA 2 na evropskih relacijah.",
      lead: "Brendirana flota, alpske poti, no\u010dne dostave in hladilni\u0161ke operacije v vizualni zgodbi, ki odra\u017ea realno identiteto podjetja.",
      images: [
        { src: imageSources.heroAlps, title: "TONIKA 2 v Alpah", tag: "\u0160vica", tall: true },
        { src: imageSources.heroNight, title: "No\u010dni avtocestni transport", tag: "24/7" },
        { src: imageSources.fleetLineup, title: "Vozni park TONIKA 2", tag: "Flota" },
        { src: imageSources.gallery03, title: "Priklopnik v gorah", tag: "Hladilni transport" },
        { src: imageSources.gallery04, title: "De\u017eevna relacija", tag: "Alpske poti", tall: true },
        { src: imageSources.gallery06, title: "Nakladalna rampa", tag: "Logistika" },
        { src: imageSources.gallery07, title: "\u0160vicarske Alpe ob son\u010dnem vzhodu", tag: "Vrhunske relacije", tall: true },
        { src: imageSources.gallery08, title: "Slovenija-\u0160vica", tag: "Mednarodni transport" },
        { src: imageSources.gallery09, title: "Hladilni logisti\u010dni center", tag: "Hladna veriga" },
        { src: imageSources.gallery10, title: "Temperaturno voden naklad", tag: "Nadzor temperature" }
      ]
    },
    contact: {
      title: "Odprimo zanesljivo relacijo.",
      lead: "Po\u0161ljite povpra\u0161evanje in pripravili bomo transportno re\u0161itev glede na temperaturo, rok, dokumentacijo in destinacijo.",
      name: "Ime",
      company: "Podjetje",
      email: "E-po\u0161ta",
      phone: "Telefon",
      message: "Sporo\u010dilo",
      consent: "Strinjam se, da TONIKA 2 obdela moje podatke za namen odgovora na povpra\u0161evanje.",
      submit: "Po\u0161lji povpra\u0161evanje",
      success: "Sporo\u010dilo je bilo poslano. Ekipa TONIKA 2 vas bo kontaktirala.",
      error: "Sporo\u010dila trenutno ni bilo mogo\u010de poslati. Poskusite znova ali pi\u0161ite neposredno na e-po\u0161to."
    },
    ui: { close: "Zapri", previous: "Prej\u0161nja", next: "Naslednja" },
    footer: {
      line: "Premium hladilni transport. Slovenija. \u0160vica. Evropa.",
      taxLabel: "Dav\u010dna \u0161tevilka:",
      registrationLabel: "Mati\u010dna \u0161tevilka:",
      privacy: "Politika zasebnosti",
      cookies: "Pi\u0161kotki",
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
        "TONIKA 2 connects Slovenia, Switzerland and Europe with a pink-white refrigerated fleet, continuous temperature control and precise execution for food, pharma and high-value cargo.",
      primary: "Send inquiry",
      secondary: "View fleet"
    },
    about: {
      eyebrow: "Family-owned. International standard.",
      title: "Specialists for reliable European refrigerated routes.",
      body:
        "Since 1996, TONIKA 2 has built a transport experience around Swiss route expertise, modern refrigerated technology and precisely prepared documentation. Every shipment is managed around time, temperature, safety and customer trust.",
      highlights: ["Slovenia-Switzerland-Slovenia", "Croatia and Southern EU", "Full and partial loads", "More than 100 business partners"]
    },
    servicesTitle: "Transport as a premium operating system.",
    servicesLead:
      "We do not sell kilometers. We manage temperature, timing, customs flows and information that protects the value of your cargo.",
    services: [
      { title: "Refrigerated transport", text: "Temperature-controlled transport for perishable, frozen, food and pharmaceutical cargo from +25 to -25 \u00b0C." },
      { title: "Switzerland specialists", text: "Regular Slovenia-Switzerland-Slovenia routes with experienced drivers, reliable timing and local route expertise." },
      { title: "Customs and documentation", text: "Import and export customs coordination in Slovenia and Switzerland with transport documentation prepared without operational friction." },
      { title: "High-value cargo", text: "Transport for pharmaceutical products, ADR shipments, groupage cargo and express routes with double crews." }
    ],
    fleet: {
      eyebrow: "Fleet",
      title: "A TONIKA 2 fleet built for temperature and timing control.",
      cards: [
        { title: "Volvo refrigerated transport", image: imageSources.fleetVolvo, spec: "EURO 6 / GPS / refrigerated equipment", text: "Premium Volvo tractors for long international routes and reliable deliveries to Switzerland." },
        { title: "Scania refrigerated transport", image: imageSources.fleetScania, spec: "EURO 5-6 / telematics / 24/7", text: "Strong Scania configuration for demanding weather, Alpine corridors and time-sensitive cargo." },
        { title: "Schmitz refrigerated trailers", image: imageSources.trailerMountains, spec: "33-66 pallets / ATP / calibration", text: "Refrigerated trailers with temperature printouts, double-deck floors and certified food/pharma capability." },
        { title: "Dual-temperature transport", image: imageSources.gallery05, spec: "Two regimes / one route", text: "Selected trailers support simultaneous transport of cargo with different temperature requirements." },
        { title: "ADR transport", image: imageSources.gallery06, spec: "ADR equipment / trained drivers", text: "Equipment and procedures for regulated shipments where compliance and traceability are essential." }
      ],
      facts: [
        ["5 vehicles", "Volvo and Scania EURO 6, EURO 5 and EEV vehicles with GPS/GSM/SMS telematics."],
        ["7 trailers", "Schmitz refrigerated trailers with 33-66 euro-pallet capacity and double-deck floors."],
        ["Dual-temp", "Three trailers support simultaneous transport across two temperature regimes."],
        ["Certified", "ATP, calibration, temperature printouts, ADR equipment and food/pharma transport certification."]
      ]
    },
    trust: {
      eyebrow: "Why TONIKA 2?",
      title: "Trust built on precision, visibility and experience.",
      cards: ["Since 1996", "Switzerland specialists", "ATP certified transport", "ADR transport", "GPS tracking", "Pharmaceutical transport", "Temperature monitoring", "Insurance up to \u20ac1,000,000"]
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
        { src: imageSources.heroAlps, title: "TONIKA 2 in the Alps", tag: "Switzerland", tall: true },
        { src: imageSources.heroNight, title: "Night motorway transport", tag: "24/7" },
        { src: imageSources.fleetLineup, title: "TONIKA 2 fleet", tag: "Fleet" },
        { src: imageSources.gallery03, title: "Trailer in the mountains", tag: "Refrigerated transport" },
        { src: imageSources.gallery04, title: "Rain route", tag: "Alpine roads", tall: true },
        { src: imageSources.gallery06, title: "Loading dock", tag: "Logistics" },
        { src: imageSources.gallery07, title: "Swiss Alps at sunrise", tag: "Premium routes", tall: true },
        { src: imageSources.gallery08, title: "Slovenia-Switzerland", tag: "International transport" },
        { src: imageSources.gallery09, title: "Cold-chain logistics center", tag: "Cold chain" },
        { src: imageSources.gallery10, title: "Temperature-controlled loading", tag: "Temperature control" }
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
      taxLabel: "VAT number:",
      registrationLabel: "Registration number:",
      privacy: "Privacy Policy",
      cookies: "Cookies",
      terms: "Terms of Use"
    }
  },
  de: {
    seoTitle: "Premium K\u00fchltransport Slowenien-Schweiz-Europa",
    seoDescription:
      "TONIKA 2 d.o.o. bietet premium temperaturgef\u00fchrte Transporte, Expertise f\u00fcr Slowenien-Schweiz-Routen und zertifizierte K\u00fchllogistik in Europa.",
    nav: ["Unternehmen", "Leistungen", "Fuhrpark", "Warum TONIKA 2", "Kennzahlen", "Galerie", "Kontakt"],
    hero: {
      eyebrow: "K\u00fchltransport seit 1996",
      title: "K\u00fchllogistik f\u00fcr Fracht, bei der Kompromisse keine Option sind.",
      lead:
        "TONIKA 2 verbindet Slowenien, die Schweiz und Europa mit einer pink-weissen K\u00fchlflotte, kontinuierlicher Temperaturkontrolle und pr\u00e4ziser Ausf\u00fchrung f\u00fcr Lebensmittel, Pharma und hochwertige Fracht.",
      primary: "Anfrage senden",
      secondary: "Fuhrpark ansehen"
    },
    about: {
      eyebrow: "Familienunternehmen. Internationaler Standard.",
      title: "Spezialisten f\u00fcr zuverl\u00e4ssige europ\u00e4ische K\u00fchlrouten.",
      body:
        "Seit 1996 entwickelt TONIKA 2 eine Transportleistung rund um Schweizer Routenexpertise, moderne K\u00fchltechnik und pr\u00e4zise vorbereitete Dokumentation. Jede Sendung wird nach Zeit, Temperatur, Sicherheit und Kundenvertrauen gef\u00fchrt.",
      highlights: ["Slowenien-Schweiz-Slowenien", "Kroatien und S\u00fcd-EU", "Komplett- und Teilladungen", "Mehr als 100 Gesch\u00e4ftspartner"]
    },
    servicesTitle: "Transport als Premium-Betriebssystem.",
    servicesLead:
      "Wir verkaufen keine Kilometer. Wir steuern Temperatur, Zeit, Zollprozesse und Informationen, die den Wert Ihrer Ware sichern.",
    services: [
      { title: "K\u00fchltransport", text: "Temperaturgef\u00fchrter Transport f\u00fcr verderbliche, gefrorene, Lebensmittel- und Pharmag\u00fcter von +25 bis -25 \u00b0C." },
      { title: "Spezialisten f\u00fcr die Schweiz", text: "Regelm\u00e4\u00dfige Slowenien-Schweiz-Slowenien-Routen mit erfahrenen Fahrern, verl\u00e4sslichen Zeitfenstern und Streckenkenntnis." },
      { title: "Zoll und Dokumentation", text: "Organisation von Import- und Exportverzollung in Slowenien und der Schweiz inklusive Transportdokumenten." },
      { title: "Hochwertige Fracht", text: "Transport pharmazeutischer Produkte, ADR-Sendungen, Sammelgut und Expressfahrten mit Doppelbesatzung." }
    ],
    fleet: {
      eyebrow: "Fuhrpark",
      title: "Eine TONIKA 2 Flotte f\u00fcr Temperatur- und Zeitkontrolle.",
      cards: [
        { title: "Volvo K\u00fchltransport", image: imageSources.fleetVolvo, spec: "EURO 6 / GPS / K\u00fchlausr\u00fcstung", text: "Premium Volvo Zugmaschinen f\u00fcr internationale Langstrecken und zuverl\u00e4ssige Lieferungen in die Schweiz." },
        { title: "Scania K\u00fchltransport", image: imageSources.fleetScania, spec: "EURO 5-6 / Telematik / 24/7", text: "Starke Scania Konfiguration f\u00fcr anspruchsvolles Wetter, Alpenkorridore und zeitkritische Fracht." },
        { title: "Schmitz K\u00fchlauflieger", image: imageSources.trailerMountains, spec: "33-66 Paletten / ATP / Kalibrierung", text: "K\u00fchlauflieger mit Temperaturausdruck, Doppelstockboden und zertifizierter Lebensmittel- und Pharmaf\u00e4higkeit." },
        { title: "Zwei-Temperatur-Transport", image: imageSources.gallery05, spec: "Zwei Regime / eine Route", text: "Ausgew\u00e4hlte Auflieger erm\u00f6glichen gleichzeitigen Transport mit unterschiedlichen Temperaturanforderungen." },
        { title: "ADR Transport", image: imageSources.gallery06, spec: "ADR-Ausr\u00fcstung / geschulte Fahrer", text: "Ausr\u00fcstung und Prozesse f\u00fcr regulierte Sendungen, bei denen Compliance und R\u00fcckverfolgbarkeit entscheidend sind." }
      ],
      facts: [
        ["5 Fahrzeuge", "Volvo und Scania EURO 6, EURO 5 und EEV mit GPS/GSM/SMS-Telematik."],
        ["7 Auflieger", "Schmitz K\u00fchlauflieger mit 33-66 Europaletten Kapazit\u00e4t und Doppelstockboden."],
        ["Zwei Temperaturen", "Drei Auflieger erm\u00f6glichen zwei Temperaturbereiche gleichzeitig."],
        ["Zertifiziert", "ATP, Kalibrierung, Temperaturausdrucke, ADR-Ausstattung und Zertifikate f\u00fcr Lebensmittel und Pharma."]
      ]
    },
    trust: {
      eyebrow: "Warum TONIKA 2?",
      title: "Vertrauen durch Pr\u00e4zision, Transparenz und Erfahrung.",
      cards: ["Seit 1996", "Spezialisten f\u00fcr die Schweiz", "ATP zertifizierter Transport", "ADR Transport", "GPS-Tracking", "Pharmatransport", "Temperatur\u00fcberwachung", "Versicherung bis \u20ac1,000,000"]
    },
    stats: [
      ["1996+", "Gr\u00fcndung"],
      ["25+", "Bediente L\u00e4nder"],
      ["\u20ac1,000,000", "Warenversicherung"],
      ["24/7", "Erreichbarkeit"],
      ["100%", "Temperatur\u00fcberwachung"]
    ],
    gallery: {
      title: "TONIKA 2 auf europ\u00e4ischen Routen.",
      lead: "Gebrandete Flotte, Alpenstra\u00dfen, Nachtlieferungen und K\u00fchloperationen in einer visuellen Geschichte, die die Unternehmensidentit\u00e4t widerspiegelt.",
      images: [
        { src: imageSources.heroAlps, title: "TONIKA 2 in den Alpen", tag: "Schweiz", tall: true },
        { src: imageSources.heroNight, title: "Nachttransport auf der Autobahn", tag: "24/7" },
        { src: imageSources.fleetLineup, title: "TONIKA 2 Fuhrpark", tag: "Flotte" },
        { src: imageSources.gallery03, title: "Auflieger in den Bergen", tag: "K\u00fchltransport" },
        { src: imageSources.gallery04, title: "Regenroute", tag: "Alpenstra\u00dfen", tall: true },
        { src: imageSources.gallery06, title: "Laderampe", tag: "Logistik" },
        { src: imageSources.gallery07, title: "Schweizer Alpen bei Sonnenaufgang", tag: "Premium-Routen", tall: true },
        { src: imageSources.gallery08, title: "Slowenien-Schweiz", tag: "Internationaler Transport" },
        { src: imageSources.gallery09, title: "K\u00fchllogistikzentrum", tag: "K\u00fchlkette" },
        { src: imageSources.gallery10, title: "Temperaturgef\u00fchrte Verladung", tag: "Temperaturkontrolle" }
      ]
    },
    contact: {
      title: "Starten wir eine zuverl\u00e4ssige Route.",
      lead: "Senden Sie Ihre Anfrage. Wir entwickeln eine Transportl\u00f6sung nach Temperatur, Termin, Dokumentation und Zielort.",
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
    ui: { close: "Schlie\u00dfen", previous: "Zur\u00fcck", next: "Weiter" },
    footer: {
      line: "Premium K\u00fchltransport. Slowenien. Schweiz. Europa.",
      taxLabel: "USt-IdNr.:",
      registrationLabel: "Registernummer:",
      privacy: "Datenschutzerkl\u00e4rung",
      cookies: "Cookies",
      terms: "Nutzungsbedingungen"
    }
  }
} satisfies Record<Locale, object>;
