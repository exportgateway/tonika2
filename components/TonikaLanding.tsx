"use client";

import Image from "next/image";
import { FormEvent, useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { company, contactEmail, content, legalLinks, localeLabels, locales, type Locale } from "@/lib/content";

type Copy = (typeof content)[Locale];
type GalleryImage = Copy["gallery"]["images"][number];

const sectionIds = ["about", "services", "fleet", "trust", "stats", "gallery", "contact"];

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 36, filter: "blur(8px)" }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-90px" }}
      transition={{ duration: 0.75, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

function Particles() {
  const particles = useMemo(
    () =>
      Array.from({ length: 42 }, (_, index) => ({
        id: index,
        left: `${(index * 23) % 100}%`,
        top: `${(index * 41) % 100}%`,
        delay: (index % 9) * 0.28,
        size: 1 + (index % 4)
      })),
    []
  );

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((particle) => (
        <motion.span
          key={particle.id}
          className="absolute rounded-full bg-[#ff4fa3]/70 blur-[1px]"
          style={{ left: particle.left, top: particle.top, width: particle.size, height: particle.size }}
          animate={{ opacity: [0.08, 0.85, 0.08], y: [0, -26, 0], scale: [1, 1.7, 1] }}
          transition={{ duration: 5.2, repeat: Infinity, delay: particle.delay, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}

function formatCounter(value: string, current: number) {
  if (value.includes("/")) return value;

  const hasEuro = value.includes("\u20ac");
  const suffix = value.endsWith("+") ? "+" : value.endsWith("%") ? "%" : "";
  const formatted = hasEuro || current >= 10000 ? current.toLocaleString("en-US") : String(current);

  return `${hasEuro ? "\u20ac" : ""}${formatted}${suffix}`;
}

function Counter({ value }: { value: string }) {
  const numeric = Number(value.replace(/[^0-9]/g, ""));
  const [display, setDisplay] = useState(value.includes("/") ? value : formatCounter(value, 0));

  return (
    <motion.span
      className="block max-w-full whitespace-nowrap text-center font-[var(--font-manrope)] text-[clamp(1.65rem,3.2vw,2.8rem)] font-black leading-none tracking-[-0.06em] text-white"
      onViewportEnter={() => {
        if (!numeric || value.includes("/")) {
          setDisplay(value);
          return;
        }

        const steps = 48;
        let current = 0;
        const interval = window.setInterval(() => {
          current += 1;
          const next = Math.round((numeric / steps) * current);
          setDisplay(formatCounter(value, next));
          if (current >= steps) {
            window.clearInterval(interval);
            setDisplay(value);
          }
        }, 20);
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

function ContactForm({ copy, locale }: { copy: Copy["contact"]; locale: Locale }) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    const form = event.currentTarget;
    const formData = new FormData(form);

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...Object.fromEntries(formData), locale })
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
      <label className="flex gap-3 rounded-2xl border border-white/10 bg-white/[0.035] p-4 text-sm leading-6 text-white/66 md:col-span-2">
        <input required name="consent" value="true" type="checkbox" className="mt-1 h-4 w-4 accent-[#ff4fa3]" />
        <span>{copy.consent}</span>
      </label>
      <div className="flex flex-col gap-4 md:col-span-2 md:flex-row md:items-center md:justify-between">
        <button
          type="submit"
          disabled={status === "loading"}
          className="pink-glow rounded-full bg-[#ff4fa3] px-7 py-3 text-sm font-bold uppercase tracking-[0.18em] text-black transition hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-60"
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

function Lightbox({ images, selected, labels, onClose, onSelect }: { images: GalleryImage[]; selected: number | null; labels: Copy["ui"]; onClose: () => void; onSelect: (index: number) => void }) {
  useEffect(() => {
    if (selected === null) return;
    const activeIndex = selected;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowRight") onSelect((activeIndex + 1) % images.length);
      if (event.key === "ArrowLeft") onSelect((activeIndex - 1 + images.length) % images.length);
    }

    window.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [images.length, onClose, onSelect, selected]);

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
            {labels.close}
          </button>
          <button
            className="absolute left-4 top-1/2 z-10 hidden -translate-y-1/2 rounded-full border border-white/15 bg-white/10 px-4 py-3 text-white md:block"
            onClick={(event) => {
              event.stopPropagation();
              onSelect((selected - 1 + images.length) % images.length);
            }}
          >
            {labels.previous}
          </button>
          <button
            className="absolute right-4 top-1/2 z-10 hidden -translate-y-1/2 rounded-full border border-white/15 bg-white/10 px-4 py-3 text-white md:block"
            onClick={(event) => {
              event.stopPropagation();
              onSelect((selected + 1) % images.length);
            }}
          >
            {labels.next}
          </button>
          <motion.div
            className="relative h-[78vh] w-full max-w-6xl overflow-hidden rounded-[2rem] border border-white/15 bg-white/[0.04]"
            initial={{ scale: 0.96, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.96, y: 20 }}
            onClick={(event) => event.stopPropagation()}
          >
            <Image src={images[selected].src} alt={images[selected].title} fill sizes="100vw" className="object-contain" />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/70 to-transparent p-6">
              <p className="text-xs font-black uppercase tracking-[0.28em] text-[#ff4fa3]">{images[selected].tag}</p>
              <h3 className="mt-2 text-2xl font-semibold text-white">{images[selected].title}</h3>
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
  const heroY = useTransform(scrollYProgress, [0, 0.42], [0, 130]);
  const heroTextY = useTransform(scrollYProgress, [0, 0.34], [0, -42]);

  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className="luxury-grid pointer-events-none fixed inset-0 opacity-35" />
      <header className="fixed left-0 right-0 top-0 z-50 px-4 py-4 md:px-8">
        <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-black/50 px-4 py-3 shadow-2xl shadow-black/30 backdrop-blur-2xl">
          <a href="#top" className="font-[var(--font-manrope)] text-sm font-black tracking-[0.34em]">
            TONIKA 2
          </a>
          <div className="hidden items-center gap-5 text-xs font-medium text-white/60 xl:flex">
            {copy.nav.map((item, index) => (
              <a key={item} href={`#${sectionIds[index]}`} className="hover:text-white">
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
          <Image src="/images/hero-alps.webp" alt={copy.hero.title} fill priority sizes="100vw" className="object-cover object-center opacity-80" />
        </motion.div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_45%,rgba(255,79,163,0.24),transparent_26rem),linear-gradient(90deg,rgba(0,0,0,0.96)_0%,rgba(0,0,0,0.76)_44%,rgba(0,0,0,0.18)_82%),linear-gradient(180deg,rgba(0,0,0,0.08)_0%,#030305_100%)]" />
        <motion.div className="absolute right-0 top-20 h-[38rem] w-[38rem] rounded-full bg-[#ff4fa3]/24 blur-[130px]" animate={{ scale: [1, 1.16, 1], opacity: [0.45, 0.85, 0.45] }} transition={{ duration: 8, repeat: Infinity }} />

        <div className="relative mx-auto grid min-h-screen max-w-7xl items-center gap-8 pb-20 pt-32 lg:grid-cols-[0.44fr_0.56fr]">
          <motion.div style={{ y: heroTextY }} className="z-10 max-w-3xl">
            <motion.p className="mb-5 inline-flex rounded-full border border-[#ff4fa3]/35 bg-[#ff4fa3]/12 px-4 py-2 text-xs font-black uppercase tracking-[0.28em] text-[#ff4fa3] backdrop-blur" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              {copy.hero.eyebrow}
            </motion.p>
            <motion.h1 className="text-balance font-[var(--font-manrope)] text-[clamp(3rem,7.5vw,6.9rem)] font-black leading-[0.88] tracking-[-0.07em] text-white" initial={{ opacity: 0, y: 26 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.08 }}>
              {copy.hero.title}
            </motion.h1>
            <motion.p className="mt-8 max-w-2xl text-base leading-8 text-white/78 md:text-xl md:leading-9" initial={{ opacity: 0, y: 26 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.16 }}>
              {copy.hero.lead}
            </motion.p>
            <motion.div className="mt-10 flex flex-col gap-4 min-[420px]:flex-row" initial={{ opacity: 0, y: 26 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.24 }}>
              <a href="#contact" className="pink-glow rounded-full bg-[#ff4fa3] px-7 py-4 text-center text-xs font-black uppercase tracking-[0.16em] text-black transition hover:scale-[1.03] sm:text-sm">
                {copy.hero.primary}
              </a>
              <a href="#fleet" className="rounded-full border border-white/20 bg-white/[0.05] px-7 py-4 text-center text-xs font-black uppercase tracking-[0.16em] text-white/90 backdrop-blur transition hover:border-[#ff4fa3]/60 hover:text-white sm:text-sm">
                {copy.hero.secondary}
              </a>
            </motion.div>
          </motion.div>
          <motion.div className="relative min-h-[42vh] lg:min-h-[68vh]" initial={{ opacity: 0, x: 60, scale: 0.96 }} animate={{ opacity: 1, x: 0, scale: 1 }} transition={{ duration: 1, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}>
            <div className="absolute inset-0 rounded-[3rem] bg-[#ff4fa3]/20 blur-[80px]" />
            <Image src="/images/hero-alps.webp" alt={copy.hero.secondary} fill priority sizes="(min-width: 1024px) 58vw, 100vw" className="relative object-contain object-center drop-shadow-[0_40px_100px_rgba(0,0,0,0.65)]" />
          </motion.div>
        </div>
      </section>

      <section id="about" className="px-5 py-28 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.86fr_1.14fr]">
          <Reveal>
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.32em] text-[#ff4fa3]">{copy.about.eyebrow}</p>
              <h2 className="mt-5 font-[var(--font-manrope)] text-5xl font-black tracking-[-0.055em] md:text-7xl">{copy.about.title}</h2>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="glass rounded-[2.5rem] p-7 md:p-10">
              <p className="text-xl leading-9 text-white/75">{copy.about.body}</p>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {copy.about.highlights.map((item) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-sm text-white/75 transition hover:border-[#ff4fa3]/40 hover:bg-[#ff4fa3]/10">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="services" className="px-5 py-28 md:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="max-w-4xl">
              <h2 className="font-[var(--font-manrope)] text-5xl font-black tracking-[-0.055em] md:text-7xl">{copy.servicesTitle}</h2>
              <p className="mt-6 text-lg leading-8 text-white/65">{copy.servicesLead}</p>
            </div>
          </Reveal>
          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {copy.services.map((service, index) => (
              <Reveal key={service.title} delay={index * 0.07}>
                <article className="glass group min-h-72 overflow-hidden rounded-[2.3rem] p-7 transition duration-500 hover:-translate-y-2 hover:border-[#ff4fa3]/45">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-black text-[#ff4fa3]">0{index + 1}</span>
                    <span className="h-2 w-2 rounded-full bg-[#ff4fa3] shadow-[0_0_24px_rgba(255,79,163,0.9)]" />
                  </div>
                  <h3 className="mt-16 text-3xl font-semibold tracking-[-0.03em]">{service.title}</h3>
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
            {copy.fleet.cards.map((fleet, index) => (
              <Reveal key={fleet.title} delay={index * 0.08}>
                <article className="glass group h-full overflow-hidden rounded-[2.4rem] transition duration-500 hover:-translate-y-3 hover:border-[#ff4fa3]/50">
                  <div className="relative h-72 overflow-hidden">
                    <Image src={fleet.image} alt={fleet.title} fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover transition duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                    <span className="absolute left-5 top-5 rounded-full border border-white/15 bg-black/45 px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-[#ff4fa3] backdrop-blur">
                      {fleet.spec}
                    </span>
                  </div>
                  <div className="p-7">
                    <h3 className="text-3xl font-semibold tracking-[-0.04em]">{fleet.title}</h3>
                    <p className="mt-4 leading-7 text-white/62">{fleet.text}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-4">
            {copy.fleet.facts.map(([title, text], index) => (
              <Reveal key={title} delay={index * 0.06}>
                <div className="h-full rounded-[1.8rem] border border-white/10 bg-white/[0.035] p-5 backdrop-blur transition hover:border-[#ff4fa3]/45 hover:bg-[#ff4fa3]/10">
                  <h3 className="text-2xl font-semibold">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/55">{text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="trust" className="px-5 py-28 md:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="text-sm font-bold uppercase tracking-[0.32em] text-[#ff4fa3]">{copy.trust.eyebrow}</p>
            <h2 className="mt-5 max-w-5xl font-[var(--font-manrope)] text-5xl font-black tracking-[-0.055em] md:text-7xl">{copy.trust.title}</h2>
          </Reveal>
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {copy.trust.cards.map((item, index) => (
              <Reveal key={item} delay={index * 0.035}>
                <div className="glass h-full rounded-[1.8rem] p-5 transition duration-500 hover:-translate-y-2 hover:border-[#ff4fa3]/45">
                  <span className="mb-8 block h-2 w-2 rounded-full bg-[#ff4fa3] shadow-[0_0_28px_rgba(255,79,163,0.9)]" />
                  <p className="text-lg font-semibold text-white">{item}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="stats" className="px-5 py-28 md:px-8">
        <div className="mx-auto max-w-7xl rounded-[2.5rem] border border-white/10 bg-[linear-gradient(135deg,rgba(255,79,163,0.18),rgba(255,255,255,0.035))] p-4 backdrop-blur-2xl md:p-6">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {copy.stats.map(([value, label], index) => (
              <Reveal key={label} delay={index * 0.06}>
                <div className="flex min-h-40 flex-col items-center justify-center overflow-hidden rounded-[2rem] border border-white/10 bg-black/35 p-5 text-center sm:p-6">
                  <Counter value={value} />
                  <p className="mt-5 text-xs font-bold uppercase tracking-[0.14em] text-white/48">{label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="px-5 py-28 md:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <h2 className="max-w-4xl font-[var(--font-manrope)] text-5xl font-black tracking-[-0.055em] md:text-7xl">{copy.gallery.title}</h2>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/65">{copy.gallery.lead}</p>
          </Reveal>
          <div className="mt-14 columns-1 gap-5 sm:columns-2 lg:columns-3">
            {copy.gallery.images.map((image, index) => (
              <motion.button
                key={`${image.src}-${image.title}`}
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

      <section id="contact" className="px-5 py-28 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <div>
              <h2 className="font-[var(--font-manrope)] text-5xl font-black tracking-[-0.055em] md:text-7xl">{copy.contact.title}</h2>
              <p className="mt-6 text-lg leading-8 text-white/65">{copy.contact.lead}</p>
              <div className="mt-10 grid gap-3 text-sm text-white/60">
                <p>{company.legalName}</p>
                <p>{company.street}</p>
                <p>{company.city}</p>
                <p>{company.phonePrimary} / {company.phoneSecondary}</p>
                <a href={`mailto:${contactEmail}`} className="text-[#ff4fa3]">{contactEmail}</a>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <ContactForm copy={copy.contact} locale={locale} />
          </Reveal>
        </div>
      </section>

      <footer className="border-t border-white/10 px-5 py-12 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 text-sm text-white/55 md:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <p className="font-[var(--font-manrope)] text-xl font-black tracking-[0.24em] text-white">TONIKA 2</p>
            <p className="mt-4 max-w-md leading-7">{copy.footer.line}</p>
          </div>
          <div className="grid gap-2 leading-6">
            <p className="text-white">{company.shortName}</p>
            <p>{company.street}</p>
            <p>{company.city}</p>
            <p>{copy.footer.taxLabel}</p>
            <p>{company.taxId}</p>
            <p>{copy.footer.registrationLabel}</p>
            <p>{company.registration}</p>
          </div>
          <div className="grid gap-2 leading-6">
            <a href={`tel:${company.phonePrimary.replaceAll(" ", "")}`} className="hover:text-white">{company.phonePrimary}</a>
            <a href={`tel:${company.phoneSecondary.replaceAll(" ", "")}`} className="hover:text-white">{company.phoneSecondary}</a>
            <a href={`mailto:${contactEmail}`} className="text-[#ff4fa3]">{contactEmail}</a>
            <div className="mt-3 flex flex-wrap gap-3">
              {legalLinks.map((link) => (
                <a key={link.href} href={link.href} className="hover:text-white">
                  {copy.footer[link.key]}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>

      <Lightbox images={copy.gallery.images} selected={selectedImage} labels={copy.ui} onClose={() => setSelectedImage(null)} onSelect={setSelectedImage} />
    </main>
  );
}
