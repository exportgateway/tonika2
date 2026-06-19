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
  taxId: "SI55470629",
  registration: "1319604000",
  address: "Bratovševa ploščad 8, 1000 Ljubljana, Slovenia",
  phonePrimary: "+386 (0) 41 536 381",
  phoneSecondary: "+386 (0) 1 300 77 46",
  email: contactEmail,
  website: "transporttonika2.com"
};

export const content = {
  sl: {
    seoTitle: "Premium thermo-frigo transport Evropa",
    seoDescription:
      "TONIKA 2 d.o.o. izvaja premium temperaturno voden transport, specializirane relacije Slovenija-Svica in certificirano hladilnisko logistiko po Evropi.",
    nav: ["Podjetje", "Storitve", "Vozni park", "Statistika", "Galerija", "Kontakt"],
    hero: {
      eyebrow: "Premium cold-chain logistics since 1996",
      title: "Temperaturno voden transport z natančnostjo vrhunskega inženiringa.",
      lead:
        "TONIKA 2 povezuje Slovenijo, Svico in Evropo s certificirano hladilnisko floto, real-time nadzorom in logistiko, zasnovano za blago, kjer kompromisi niso opcija.",
      primary: "Oddaj povprasevanje",
      secondary: "Razišči zmogljivosti"
    },
    about: {
      eyebrow: "Druzinsko podjetje. Mednarodni standard.",
      title: "Diskretna moc za zahtevne evropske dobavne verige.",
      body:
        "Od leta 1996 TONIKA 2 razvija transportno izkusnjo, ki zdruzuje operativno disciplino, poznavanje svicarskih relacij in sodobno hladilnisko tehnologijo. Vsaka posiljka je vodena z mislijo na cas, temperaturo, dokumentacijo in zaupanje narocnika.",
      highlights: ["Slovenija-Svica-Slovenija", "Hrvaška in juzna EU", "Kompletni in delni nakladi", "Vec kot 100 poslovnih partnerjev"]
    },
    servicesTitle: "Transport kot premium operacijski sistem.",
    servicesLead:
      "Ne prodajamo kilometrov. Upravljamo temperaturo, cas, carinske tokove in informacije, ki varujejo vrednost vasega blaga.",
    services: [
      {
        title: "Thermo-frigo transport",
        text: "Temperaturno voden prevoz hitro pokvarljivega, zamrznjenega, zivilskega in farmacevtskega blaga od +25 do -25 stopinj."
      },
      {
        title: "Swiss route excellence",
        text: "Specializirana izvedba relacij Slovenija-Svica-Slovenija z izkusenimi vozniki, zanesljivimi casovnicami in poznavanjem lokalnih posebnosti."
      },
      {
        title: "Carinjenje in dokumentacija",
        text: "Organizacija uvoznega in izvoznega carinjenja v Sloveniji in Svici ter priprava transportnih listin brez operativnega trenja."
      },
      {
        title: "High-value logistics",
        text: "Prevoz blaga visoke vrednosti, farmacevtskih produktov, ADR posiljk, zbirnih posiljk in ekspresnih prevozov z dvojno posadko."
      }
    ],
    fleet: {
      eyebrow: "Fleet intelligence",
      title: "Vozni park, zasnovan za nadzor temperature in casa.",
      cards: [
        ["5 vozil", "Scania in Volvo EURO 6, EURO 5 in EEV s telematiko GPS/GSM/SMS."],
        ["7 priklopnikov", "Schmitz hladilniki z nakladom 33-66 euro palet in dvo-nivojskim dnom."],
        ["Dual-temp", "Tri priklopniki omogocajo hkraten prevoz dveh temperaturnih rezimov."],
        ["Certificirano", "ATP, kalibracija, izpis temperature, ADR oprema ter certifikat za hrano in zdravila."]
      ]
    },
    stats: [
      ["1996+", "Ustanovitev podjetja"],
      ["25+", "Drzav v dosegu"],
      ["€1,000,000", "Zavarovanje tovora"],
      ["24/7", "Transportna razpolozljivost"],
      ["100%", "Nadzor temperature"]
    ],
    galleryTitle: "Transportna izkušnja v filmski ostrini.",
    galleryLead:
      "Galerija zdruzuje alpske relacije, hladilniske priklopnike, nocne operacije in nadzorne centre v premium vizualni zgodbi znamke TONIKA 2.",
    contact: {
      title: "Odprimo zanesljivo relacijo.",
      lead: "Posljite povprasevanje in pripravili bomo transportno resitev glede na temperaturo, rok, dokumentacijo in destinacijo.",
      name: "Ime",
      company: "Podjetje",
      email: "E-mail",
      phone: "Telefon",
      message: "Sporocilo",
      submit: "Poslji povprasevanje",
      success: "Sporocilo je bilo poslano. Ekipa TONIKA 2 vas bo kontaktirala.",
      error: "Sporocila trenutno ni bilo mogoce poslati. Poskusite znova ali pisite neposredno na e-mail."
    },
    footer: "Premium thermo-frigo transport. Slovenia. Switzerland. Europe."
  },
  en: {
    seoTitle: "Premium thermo-frigo transport Europe",
    seoDescription:
      "TONIKA 2 d.o.o. delivers premium temperature-controlled transport, Slovenia-Switzerland expertise, and certified refrigerated logistics across Europe.",
    nav: ["Company", "Services", "Fleet", "Statistics", "Gallery", "Contact"],
    hero: {
      eyebrow: "Premium cold-chain logistics since 1996",
      title: "Temperature-controlled transport engineered with absolute precision.",
      lead:
        "TONIKA 2 connects Slovenia, Switzerland, and Europe with a certified refrigerated fleet, real-time shipment visibility, and logistics designed for cargo where compromise is not an option.",
      primary: "Request transport",
      secondary: "Explore capability"
    },
    about: {
      eyebrow: "Family-owned. International by design.",
      title: "Quiet power for demanding European supply chains.",
      body:
        "Since 1996, TONIKA 2 has built a transport experience around operational discipline, Swiss route expertise, and modern refrigerated technology. Every shipment is managed around time, temperature, documentation, and customer trust.",
      highlights: ["Slovenia-Switzerland-Slovenia", "Croatia and Southern EU", "Full and partial loads", "100+ business partners"]
    },
    servicesTitle: "Transport as a premium operating system.",
    servicesLead:
      "We do not sell kilometers. We manage temperature, timing, customs flows, and information that protects the value of your cargo.",
    services: [
      {
        title: "Thermo-frigo transport",
        text: "Temperature-controlled transport for perishable, frozen, food, and pharmaceutical cargo from +25 to -25 degrees."
      },
      {
        title: "Swiss route excellence",
        text: "Specialized Slovenia-Switzerland-Slovenia operations with experienced drivers, reliable timing, and deep knowledge of the route."
      },
      {
        title: "Customs and documents",
        text: "Import and export customs coordination in Slovenia and Switzerland with transport documentation prepared without operational friction."
      },
      {
        title: "High-value logistics",
        text: "Transport for high-value goods, pharmaceutical products, ADR cargo, groupage shipments, and express routes with double crews."
      }
    ],
    fleet: {
      eyebrow: "Fleet intelligence",
      title: "A fleet built for temperature and timing control.",
      cards: [
        ["5 vehicles", "Scania and Volvo EURO 6, EURO 5, and EEV vehicles with GPS/GSM/SMS telematics."],
        ["7 trailers", "Schmitz refrigerated semi-trailers with 33-66 euro-pallet capacity and double-deck floors."],
        ["Dual-temp", "Three trailers support simultaneous transport across two temperature regimes."],
        ["Certified", "ATP, calibration, temperature printouts, ADR equipment, and food/pharma transport certification."]
      ]
    },
    stats: [
      ["1996+", "Company founded"],
      ["25+", "Countries served"],
      ["€1,000,000", "Cargo insurance"],
      ["24/7", "Transport availability"],
      ["100%", "Temperature monitoring"]
    ],
    galleryTitle: "A cinematic view of precision logistics.",
    galleryLead:
      "A premium gallery of alpine routes, refrigerated trailers, night operations, fleet details, and control-room visibility across the TONIKA 2 transport experience.",
    contact: {
      title: "Open a reliable route.",
      lead: "Send an inquiry and we will prepare a transport solution around your temperature, timeline, documentation, and destination.",
      name: "Name",
      company: "Company",
      email: "Email",
      phone: "Phone",
      message: "Message",
      submit: "Send inquiry",
      success: "Your message has been sent. TONIKA 2 will contact you shortly.",
      error: "The message could not be sent right now. Try again or write directly by email."
    },
    footer: "Premium thermo-frigo transport. Slovenia. Switzerland. Europe."
  },
  de: {
    seoTitle: "Premium Thermo-Frigo Transport Europa",
    seoDescription:
      "TONIKA 2 d.o.o. bietet premium temperaturgefuehrte Transporte, Expertise fuer Slowenien-Schweiz-Routen und zertifizierte Kuehllogistik in Europa.",
    nav: ["Unternehmen", "Leistungen", "Fuhrpark", "Kennzahlen", "Galerie", "Kontakt"],
    hero: {
      eyebrow: "Premium Cold-Chain Logistics seit 1996",
      title: "Temperaturgefuehrter Transport mit technischer Praezision.",
      lead:
        "TONIKA 2 verbindet Slowenien, die Schweiz und Europa mit zertifiziertem Kuehlfuhrpark, Echtzeit-Transparenz und Logistik fuer Fracht, bei der Kompromisse keine Option sind.",
      primary: "Transport anfragen",
      secondary: "Kapazitaeten ansehen"
    },
    about: {
      eyebrow: "Familienunternehmen. Internationaler Anspruch.",
      title: "Stille Staerke fuer anspruchsvolle europaeische Lieferketten.",
      body:
        "Seit 1996 entwickelt TONIKA 2 eine Transportleistung, die operative Disziplin, Schweizer Routenerfahrung und moderne Kuehltechnik verbindet. Jede Sendung wird nach Zeit, Temperatur, Dokumentation und Vertrauen gefuehrt.",
      highlights: ["Slowenien-Schweiz-Slowenien", "Kroatien und Sued-EU", "Komplett- und Teilladungen", "100+ Geschaeftspartner"]
    },
    servicesTitle: "Transport als Premium-Betriebssystem.",
    servicesLead:
      "Wir verkaufen keine Kilometer. Wir steuern Temperatur, Zeit, Zollprozesse und Informationen, die den Wert Ihrer Ware sichern.",
    services: [
      {
        title: "Thermo-Frigo Transport",
        text: "Temperaturgefuehrter Transport fuer verderbliche, gefrorene, Lebensmittel- und Pharmagueter von +25 bis -25 Grad."
      },
      {
        title: "Schweizer Routenkompetenz",
        text: "Spezialisierte Slowenien-Schweiz-Slowenien-Transporte mit erfahrenen Fahrern, verlaesslichen Zeitfenstern und fundierter Streckenkenntnis."
      },
      {
        title: "Zoll und Dokumentation",
        text: "Organisation von Import- und Exportverzollung in Slowenien und der Schweiz inklusive Transportdokumenten."
      },
      {
        title: "High-Value Logistics",
        text: "Transport hochwertiger Waren, pharmazeutischer Produkte, ADR-Sendungen, Sammelgut und Expressfahrten mit Doppelbesatzung."
      }
    ],
    fleet: {
      eyebrow: "Fleet intelligence",
      title: "Ein Fuhrpark fuer Temperatur- und Zeitkontrolle.",
      cards: [
        ["5 Fahrzeuge", "Scania und Volvo EURO 6, EURO 5 und EEV mit GPS/GSM/SMS-Telematik."],
        ["7 Auflieger", "Schmitz Kuehlauflieger mit 33-66 Europaletten Kapazitaet und Doppelstockboden."],
        ["Dual-temp", "Drei Auflieger ermoeglichen zwei Temperaturbereiche gleichzeitig."],
        ["Zertifiziert", "ATP, Kalibrierung, Temperaturausdrucke, ADR-Ausstattung und Zertifikate fuer Lebensmittel und Pharma."]
      ]
    },
    stats: [
      ["1996+", "Gruendung"],
      ["25+", "Bediente Laender"],
      ["€1,000,000", "Warenversicherung"],
      ["24/7", "Transportverfuegbarkeit"],
      ["100%", "Temperaturueberwachung"]
    ],
    galleryTitle: "Praezisionslogistik in filmischer Qualitaet.",
    galleryLead:
      "Eine premium Galerie aus Alpenrouten, Kuehlaufliegern, Nachtoperationen, Fuhrparkdetails und Kontrollraum-Transparenz fuer die TONIKA 2 Transportwelt.",
    contact: {
      title: "Starten wir eine verlaessliche Route.",
      lead: "Senden Sie Ihre Anfrage. Wir entwickeln eine Transportloesung nach Temperatur, Termin, Dokumentation und Zielort.",
      name: "Name",
      company: "Unternehmen",
      email: "E-Mail",
      phone: "Telefon",
      message: "Nachricht",
      submit: "Anfrage senden",
      success: "Ihre Nachricht wurde gesendet. TONIKA 2 wird Sie kontaktieren.",
      error: "Die Nachricht konnte momentan nicht gesendet werden. Bitte erneut versuchen oder direkt per E-Mail schreiben."
    },
    footer: "Premium Thermo-Frigo Transport. Slowenien. Schweiz. Europa."
  }
} satisfies Record<Locale, unknown>;
