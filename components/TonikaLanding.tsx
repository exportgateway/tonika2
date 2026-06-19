"use client";

import Image from "next/image";
import { FormEvent, useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { company, contactEmail, content, localeLabels, locales, type Locale } from "@/lib/content";

type Copy = (typeof content)[Locale];

type GalleryImage = {
  src: string;
  title: string;
  tag: string;
  tall?: boolean;
};

const galleryImages: GalleryImage[] = [
  { src: "/images/tonika-gallery-01-alpine-route.png", title: "Swiss alpine route", tag: "International routes", tall: true },
  { src: "/images/tonika-gallery-02-logistics-hub.png", title: "Cold-chain logistics hub", tag: "Operations" },
  { src: "/images/tonika-gallery-03-scania-truck.png", title: "Scania refrigerated tractor", tag: "Fleet", tall: true },
  { src: "/images/tonika-gallery-04-volvo-truck.png", title: "Volvo night linehaul", tag: "Fleet" },
  { src: "/images/tonika-gallery-05-schmitz-trailer.png", title: "Schmitz refrigerated trailer", tag: "Thermo-frigo" },
  { src: "/images/tonika-gallery-06-loading-dock.png", title: "Temperature-controlled docks", tag: "Handling", tall: true },
  { src: "/images/tonika-gallery-07-temperature-control.png", title: "Temperature command room", tag: "Monitoring" },
  { src: "/images/tonika-gallery-08-fleet-lineup.png", title: "Fleet lineup", tag: "Capacity", tall: true },
  { src: "/images/tonika-gallery-09-trailer-detail.png", title: "Refrigeration detail", tag: "Precision" },
  { src: "/images/tonika-gallery-10-night-route.png", title: "Night tunnel route", tag: "24/7" },
  { src: "/images/tonika-gallery-11-driver-cabin.png", title: "Premium driver cockpit", tag: "People" },
  { src: "/images/tonika-gallery-12-cold-chain.png", title: "Cold-chain loading", tag: "Cargo integrity", tall: true }
];

const fleetVisuals = [
  {
    name: "Scania refrigerated tractors",
    image: "/images/tonika-gallery-03-scania-truck.png",
    spec: "EURO 6 / GPS / Thermo-ready",
    copy: "Long-haul refrigerated power for precise Slovenia-Switzerland-EU routes."
  },
  {
    name: "Volvo linehaul trucks",
    image: "/images/tonika-gallery-04-volvo-truck.png",
    spec: "EURO 5-6 / Telematics / 24/7",
    copy: "Premium route stability, driver comfort and reliable international timing."
  },
  {
    name: "Schmitz refrigerated trailers",
    image: "/images/tonika-gallery-05-schmitz-trailer.png",
    spec: "33-66 pallets / Dual-temp / ATP",
    copy: "Certified refrigerated capacity for food, pharma, frozen and high-value cargo."
  }
];

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 34 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

function Particles() {
  const particles = useMemo(
    () =>
      Array.from({ length: 34 }, (_, index) => ({
        id: index,
        left: `${(index * 29) % 100}%`,
        top: `${(index * 47) % 100}%`,
        delay: (index % 8) * 0.3,
        size: 2 + (index % 4)
      })),
    []
  );

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((particle) => (
        <motion.span
          key={particle.id}
          className="absolute rounded-full bg-[#ff4fa3]/60 blur-[1px]"
          style={{ left: particle.left, top: particle.top, width: particle.size, height: particle.size }}
          animate={{ opacity: [0.15, 0.9, 0.15], y: [0, -18, 0], scale: [1, 1.6, 1] }}
          transition={{ duration: 4.8, repeat: Infinity, delay: particle.delay, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}

function formatCounter(value: string, current: number) {
  if (value.includes("/")) return value;

  const hasEuro = value.includes("€");
  const suffix = value.endsWith("+") ? "+" : value.endsWith("%") ? "%" : "";
  const formatted = hasEuro || current >= 10000 ? current.toLocaleString("en-US") : String(current);

  return `${hasEuro ? "€" : ""}${formatted}${suffix}`;
}

function Counter({ value }: { value: string }) {
  const numeric = Number(value.replace(/[^0-9]/g, ""));
  const [display, setDisplay] = useState(value.includes("/") ? value : formatCounter(value, 0));

  return (
    <motion.span
      className="block text-4xl font-semibold tracking-tight text-white md:text-5xl"
      onViewportEnter={() => {
        if (!numeric || value.includes("/")) {
          setDisplay(value);
          return;
        }

        const steps = 34;
        let current = 0;
        const interval = window.setInterval(() => {
          current += 1;
          const next = Math.round((numeric / steps) * current);
          setDisplay(formatCounter(value, next));
          if (current >= steps) {
            window.clearInterval(interval);
            setDisplay(value);
          }
        }, 24);
      }}
      viewport={{ once: true }}
    >
      {display}
    </motion.span>
  );
}

function LanguageSwitcher({ locale }: { locale: Locale }) {
  return (
    <div className="flex rounded-full border border-white/10 bg-white/[0.04] p-1 backdrop-blur-xl">
      {locales.map((item) => (
        <a
          key={item}
          href={`/${item}`}
          className={`rounded-full px-3 py-1.5 text-xs font-semibold transition ${
            item === locale ? "bg-white text-black" : "text-white/60 hover:text-white"
          }`}
        >
          {localeLabels[item]}
        </a>
      ))}
    </div>
  );
}

function ContactForm({ copy }: { copy: Copy["contact"] }) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    const form = event.currentTarget;
    const formData = new FormData(form);

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Object.fromEntries(formData))
    });

    if (response.ok) {
      form.reset();
      setStatus("success");
    } else {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={onSubmit} className="glass grid gap-4 rounded-[2rem] p-5 md:grid-cols-2 md:p-8">
      <input className="hidden" name="website" tabIndex={-1} autoComplete="off" />
      {[
        ["name", copy.name, "text"],
        ["company", copy.company, "text"],
        ["email", copy.email, "email"],
        ["phone", copy.phone, "tel"]
      ].map(([name, label, type]) => (
        <label key={name} className="group grid gap-2 text-sm text-white/60">
          {label}
          <input
            required={name === "name" || name === "email"}
            name={name}
            type={type}
            className="rounded-2xl border border-white/10 bg-black/35 px-4 py-3 text-white outline-none transition focus:border-[#ff4fa3]/80 focus:bg-black/55"
          />
        </label>
      ))}
      <label className="group grid gap-2 text-sm text-white/60 md:col-span-2">
        {copy.message}
        <textarea
          required
          name="message"
          rows={5}
          className="resize-none rounded-2xl border border-white/10 bg-black/35 px-4 py-3 text-white outline-none transition focus:border-[#ff4fa3]/80 focus:bg-black/55"
        />
      </label>
      <div className="flex flex-col gap-4 md:col-span-2 md:flex-row md:items-center md:justify-between">
        <button
          type="submit"
          disabled={status === "loading"}
          className="pink-glow rounded-full bg-[#ff4fa3] px-7 py-3 text-sm font-bold uppercase tracking-[0.2em] text-black transition hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "loading" ? "..." : copy.submit}
        </button>
        <AnimatePresence mode="wait">
          {status === "success" && (
            <motion.p key="success" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-sm text-white/75">
              {copy.success}
            </motion.p>
          )}
          {status === "error" && (
            <motion.p key="error" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-sm text-[#ff8fc6]">
              {copy.error}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </form>
  );
}

function Lightbox({ selected, onClose, onSelect }: { selected: number | null; onClose: () => void; onSelect: (index: number) => void }) {
  useEffect(() => {
    if (selected === null) return;
    const activeIndex = selected;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowRight") onSelect((activeIndex + 1) % galleryImages.length);
      if (event.key === "ArrowLeft") onSelect((activeIndex - 1 + galleryImages.length) % galleryImages.length);
    }

    window.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose, onSelect, selected]);

  return (
    <AnimatePresence>
      {selected !== null && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/92 p-4 backdrop-blur-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <button className="absolute right-5 top-5 z-10 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-white" onClick={onClose}>
            Close
          </button>
          <button
            className="absolute left-4 top-1/2 z-10 hidden -translate-y-1/2 rounded-full border border-white/15 bg-white/10 px-4 py-3 text-white md:block"
            onClick={(event) => {
              event.stopPropagation();
              onSelect((selected - 1 + galleryImages.length) % galleryImages.length);
            }}
          >
            Prev
          </button>
          <button
            className="absolute right-4 top-1/2 z-10 hidden -translate-y-1/2 rounded-full border border-white/15 bg-white/10 px-4 py-3 text-white md:block"
            onClick={(event) => {
              event.stopPropagation();
              onSelect((selected + 1) % galleryImages.length);
            }}
          >
            Next
          </button>
          <motion.div
            className="relative h-[78vh] w-full max-w-6xl overflow-hidden rounded-[2rem] border border-white/15 bg-white/[0.04]"
            initial={{ scale: 0.96, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.96, y: 20 }}
            onClick={(event) => event.stopPropagation()}
          >
            <Image src={galleryImages[selected].src} alt={galleryImages[selected].title} fill sizes="100vw" className="object-contain" />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/70 to-transparent p-6">
              <p className="text-xs font-black uppercase tracking-[0.28em] text-[#ff4fa3]">{galleryImages[selected].tag}</p>
              <h3 className="mt-2 text-2xl font-semibold text-white">{galleryImages[selected].title}</h3>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function TonikaLanding({ locale }: { locale: Locale }) {
  const copy = content[locale] as Copy;
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.42], [0, 160]);
  const heroTextY = useTransform(scrollYProgress, [0, 0.34], [0, -48]);

  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className="luxury-grid pointer-events-none fixed inset-0 opacity-40" />
      <header className="fixed left-0 right-0 top-0 z-50 px-4 py-4 md:px-8">
        <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-black/35 px-4 py-3 backdrop-blur-2xl">
          <a href="#top" className="font-[var(--font-manrope)] text-sm font-black tracking-[0.38em]">
            TONIKA 2
          </a>
          <div className="hidden items-center gap-6 text-xs font-medium text-white/60 lg:flex">
            {copy.nav.map((item, index) => (
              <a key={item} href={`#${["about", "services", "fleet", "stats", "gallery", "contact"][index]}`} className="hover:text-white">
                {item}
              </a>
            ))}
          </div>
          <LanguageSwitcher locale={locale} />
        </nav>
      </header>

      <section id="top" className="relative min-h-screen overflow-hidden px-5 md:px-8">
        <Particles />
        <motion.div style={{ y: heroY }} className="absolute inset-0">
          <Image src="/images/tonika-hero-truck.png" alt="Premium refrigerated TONIKA 2 truck" fill priority sizes="100vw" className="object-cover" />
        </motion.div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_45%,rgba(255,79,163,0.14),transparent_25rem),linear-gradient(90deg,rgba(0,0,0,0.98)_0%,rgba(0,0,0,0.78)_39%,rgba(0,0,0,0.2)_74%),linear-gradient(180deg,rgba(0,0,0,0.1)_0%,#030305_100%)]" />
        <motion.div className="absolute left-1/2 top-24 h-[34rem] w-[34rem] rounded-full bg-[#ff4fa3]/25 blur-[130px]" animate={{ scale: [1, 1.18, 1], opacity: [0.45, 0.8, 0.45] }} transition={{ duration: 8, repeat: Infinity }} />

        <div className="relative mx-auto flex min-h-screen max-w-7xl items-center pb-20 pt-32">
          <motion.div style={{ y: heroTextY }} className="max-w-4xl">
            <motion.p className="mb-5 inline-flex rounded-full border border-[#ff4fa3]/30 bg-[#ff4fa3]/10 px-4 py-2 text-xs font-black uppercase tracking-[0.32em] text-[#ff4fa3] backdrop-blur" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              {copy.hero.eyebrow}
            </motion.p>
            <motion.h1 className="text-balance font-[var(--font-manrope)] text-6xl font-black leading-[0.86] tracking-[-0.075em] text-white md:text-8xl xl:text-[8.8rem]" initial={{ opacity: 0, y: 26 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.08 }}>
                {copy.hero.title}
            </motion.h1>
            <motion.p className="mt-8 max-w-2xl text-lg leading-8 text-white/72 md:text-2xl md:leading-10" initial={{ opacity: 0, y: 26 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.16 }}>
              {copy.hero.lead}
            </motion.p>
            <motion.div className="mt-10 flex flex-col gap-4 sm:flex-row" initial={{ opacity: 0, y: 26 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.24 }}>
              <a href="#contact" className="pink-glow rounded-full bg-[#ff4fa3] px-8 py-4 text-center text-sm font-black uppercase tracking-[0.24em] text-black transition hover:scale-[1.03]">
                {copy.hero.primary}
              </a>
              <a href="#fleet" className="rounded-full border border-white/20 bg-white/[0.04] px-8 py-4 text-center text-sm font-black uppercase tracking-[0.24em] text-white/90 backdrop-blur transition hover:border-[#ff4fa3]/60 hover:text-white">
                {copy.hero.secondary}
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section id="about" className="px-5 py-24 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.32em] text-[#ff4fa3]">{copy.about.eyebrow}</p>
              <h2 className="mt-5 font-[var(--font-manrope)] text-4xl font-black tracking-[-0.04em] md:text-6xl">{copy.about.title}</h2>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="glass rounded-[2rem] p-7 md:p-10">
              <p className="text-xl leading-9 text-white/75">{copy.about.body}</p>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {copy.about.highlights.map((item) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-sm text-white/75">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="services" className="px-5 py-24 md:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="max-w-4xl">
              <h2 className="font-[var(--font-manrope)] text-4xl font-black tracking-[-0.04em] md:text-6xl">{copy.servicesTitle}</h2>
              <p className="mt-5 text-lg leading-8 text-white/65">{copy.servicesLead}</p>
            </div>
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {copy.services.map((service, index) => (
              <Reveal key={service.title} delay={index * 0.07}>
                <article className="glass group min-h-64 rounded-[2rem] p-7 transition duration-500 hover:-translate-y-2 hover:border-[#ff4fa3]/45">
                  <span className="text-sm font-black text-[#ff4fa3]">0{index + 1}</span>
                  <h3 className="mt-12 text-2xl font-semibold">{service.title}</h3>
                  <p className="mt-4 leading-7 text-white/60">{service.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="fleet" className="relative px-5 py-28 md:px-8">
        <div className="absolute inset-x-0 top-1/4 h-[34rem] bg-[#ff4fa3]/10 blur-[110px]" />
        <div className="relative mx-auto max-w-7xl">
          <Reveal>
            <p className="text-sm font-bold uppercase tracking-[0.32em] text-[#ff4fa3]">{copy.fleet.eyebrow}</p>
            <h2 className="mt-5 max-w-5xl font-[var(--font-manrope)] text-5xl font-black tracking-[-0.055em] md:text-7xl">{copy.fleet.title}</h2>
          </Reveal>
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {fleetVisuals.map((fleet, index) => (
              <Reveal key={fleet.name} delay={index * 0.1}>
                <article className="glass group overflow-hidden rounded-[2.4rem] transition duration-500 hover:-translate-y-3 hover:border-[#ff4fa3]/50">
                  <div className="relative h-72 overflow-hidden">
                    <Image src={fleet.image} alt={fleet.name} fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover transition duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                    <span className="absolute left-5 top-5 rounded-full border border-white/15 bg-black/40 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-[#ff4fa3] backdrop-blur">
                      {fleet.spec}
                    </span>
                  </div>
                  <div className="p-7">
                    <h3 className="text-3xl font-semibold tracking-[-0.04em]">{fleet.name}</h3>
                    <p className="mt-4 leading-7 text-white/62">{fleet.copy}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-4">
            {copy.fleet.cards.map(([title, text], index) => (
              <Reveal key={title} delay={index * 0.06}>
                <div className="rounded-[1.8rem] border border-white/10 bg-white/[0.035] p-5 backdrop-blur transition hover:border-[#ff4fa3]/45 hover:bg-[#ff4fa3]/10">
                  <h3 className="text-2xl font-semibold">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/55">{text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="stats" className="px-5 py-28 md:px-8">
        <div className="mx-auto max-w-7xl rounded-[2.5rem] border border-white/10 bg-[linear-gradient(135deg,rgba(255,79,163,0.18),rgba(255,255,255,0.035))] p-4 backdrop-blur-2xl md:p-6">
          <div className="grid gap-4 md:grid-cols-5">
            {copy.stats.map(([value, label], index) => (
              <Reveal key={label} delay={index * 0.06}>
                <div className="min-h-40 rounded-[2rem] border border-white/10 bg-black/35 p-6">
                  <Counter value={value} />
                  <p className="mt-5 text-xs font-bold uppercase tracking-[0.2em] text-white/48">{label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="px-5 py-28 md:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <h2 className="max-w-4xl font-[var(--font-manrope)] text-5xl font-black tracking-[-0.055em] md:text-7xl">{copy.galleryTitle}</h2>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/65">{copy.galleryLead}</p>
          </Reveal>
          <div className="mt-14 columns-1 gap-5 sm:columns-2 lg:columns-3">
            {galleryImages.map((image, index) => (
              <motion.button
                key={image.src}
                type="button"
                onClick={() => setSelectedImage(index)}
                className={`group relative mb-5 block w-full overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] text-left ${image.tall ? "h-[30rem]" : "h-72"}`}
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: (index % 3) * 0.05 }}
                whileHover={{ y: -6 }}
              >
                <Image src={image.src} alt={image.title} fill sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" className="object-cover transition duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/15 to-transparent opacity-90" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <p className="text-xs font-black uppercase tracking-[0.24em] text-[#ff4fa3]">{image.tag}</p>
                  <h3 className="mt-2 text-xl font-semibold text-white">{image.title}</h3>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="px-5 py-24 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <div>
              <h2 className="font-[var(--font-manrope)] text-4xl font-black tracking-[-0.04em] md:text-6xl">{copy.contact.title}</h2>
              <p className="mt-5 text-lg leading-8 text-white/65">{copy.contact.lead}</p>
              <div className="mt-10 grid gap-3 text-sm text-white/60">
                <p>{company.legalName}</p>
                <p>{company.address}</p>
                <p>{company.phonePrimary} / {company.phoneSecondary}</p>
                <a href={`mailto:${contactEmail}`} className="text-[#ff4fa3]">{contactEmail}</a>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <ContactForm copy={copy.contact} />
          </Reveal>
        </div>
      </section>

      <footer className="border-t border-white/10 px-5 py-10 md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-white/45 md:flex-row md:items-center md:justify-between">
          <p className="font-bold tracking-[0.28em] text-white">TONIKA 2</p>
          <p>{copy.footer}</p>
          <p>{company.taxId}</p>
        </div>
      </footer>

      <Lightbox selected={selectedImage} onClose={() => setSelectedImage(null)} onSelect={setSelectedImage} />
    </main>
  );
}
