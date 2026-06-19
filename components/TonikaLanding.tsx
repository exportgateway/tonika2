"use client";

import { FormEvent, useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { company, contactEmail, content, localeLabels, locales, type Locale } from "@/lib/content";

type Copy = (typeof content)[Locale];

const galleryPrompts = [
  "White refrigerated semi-truck with neon pink accents, wet black studio floor, cinematic luxury lighting.",
  "Swiss alpine route at blue hour with a premium refrigerated truck and subtle pink light trails.",
  "Futuristic cold-chain operations center with route intelligence dashboards and glass control room.",
  "Macro fleet detail: refrigerated trailer texture, cold vapor, black reflections, pink edge light."
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

function Counter({ value }: { value: string }) {
  const numeric = Number(value.replace(/[^0-9]/g, ""));
  const suffix = value.replace(/[0-9]/g, "");
  const [display, setDisplay] = useState(value.includes("/") ? value : "0");

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
          setDisplay(`${next}${suffix}`);
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

export function TonikaLanding({ locale }: { locale: Locale }) {
  const copy = content[locale] as Copy;
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.35], [0, 180]);

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

      <section id="top" className="relative flex min-h-screen items-center px-5 pb-20 pt-32 md:px-8">
        <Particles />
        <motion.div style={{ y: heroY }} className="absolute inset-x-0 top-24 mx-auto h-[42rem] max-w-6xl rounded-full bg-[#ff4fa3]/20 blur-[120px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_35%,rgba(255,255,255,0.16),transparent_22rem)]" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.04fr_0.96fr]">
          <Reveal>
            <div>
              <p className="mb-5 text-xs font-bold uppercase tracking-[0.35em] text-[#ff4fa3]">{copy.hero.eyebrow}</p>
              <h1 className="text-balance font-[var(--font-manrope)] text-5xl font-black leading-[0.92] tracking-[-0.06em] text-white md:text-7xl xl:text-8xl">
                {copy.hero.title}
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-white/70 md:text-xl">{copy.hero.lead}</p>
              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <a href="#contact" className="pink-glow rounded-full bg-[#ff4fa3] px-7 py-4 text-center text-sm font-bold uppercase tracking-[0.22em] text-black">
                  {copy.hero.primary}
                </a>
                <a href="#fleet" className="rounded-full border border-white/15 px-7 py-4 text-center text-sm font-bold uppercase tracking-[0.22em] text-white/80 backdrop-blur">
                  {copy.hero.secondary}
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="glass relative min-h-[30rem] overflow-hidden rounded-[2.5rem] p-5">
              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,79,163,0.28),transparent_34%),radial-gradient(circle_at_64%_34%,rgba(255,255,255,0.18),transparent_20rem)]" />
              <motion.div
                animate={{ y: [0, -14, 0], rotate: [0, -0.7, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-8 left-6 right-6 h-52 rounded-[2rem] border border-white/15 bg-gradient-to-br from-white via-zinc-300 to-zinc-700 shadow-2xl"
              >
                <div className="absolute -top-16 left-8 h-24 w-52 rounded-t-[2rem] bg-gradient-to-br from-zinc-100 to-zinc-500" />
                <div className="absolute -top-10 left-20 h-12 w-24 rounded-xl bg-black/80" />
                <div className="absolute left-6 top-16 h-1.5 w-[82%] bg-[#ff4fa3] pink-glow" />
                <div className="absolute bottom-6 left-12 h-14 w-14 rounded-full border-[10px] border-black bg-zinc-700" />
                <div className="absolute bottom-6 right-16 h-14 w-14 rounded-full border-[10px] border-black bg-zinc-700" />
              </motion.div>
              <div className="relative z-10 max-w-sm rounded-[1.5rem] border border-white/10 bg-black/35 p-5 backdrop-blur-xl">
                <p className="text-xs uppercase tracking-[0.28em] text-white/50">Cold Chain OS</p>
                <p className="mt-4 text-3xl font-semibold">+25°C / -25°C</p>
                <p className="mt-2 text-sm text-white/60">Realtime temperature, route and documentation confidence.</p>
              </div>
            </div>
          </Reveal>
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

      <section id="fleet" className="relative px-5 py-24 md:px-8">
        <div className="absolute inset-x-0 top-1/3 h-96 bg-[#ff4fa3]/10 blur-[100px]" />
        <div className="relative mx-auto max-w-7xl">
          <Reveal>
            <p className="text-sm font-bold uppercase tracking-[0.32em] text-[#ff4fa3]">{copy.fleet.eyebrow}</p>
            <h2 className="mt-5 max-w-5xl font-[var(--font-manrope)] text-4xl font-black tracking-[-0.04em] md:text-6xl">{copy.fleet.title}</h2>
          </Reveal>
          <div className="mt-12 grid gap-5 lg:grid-cols-4">
            {copy.fleet.cards.map(([title, text], index) => (
              <Reveal key={title} delay={index * 0.08}>
                <div className="glass min-h-72 rounded-[2rem] p-6">
                  <div className="mb-12 h-28 rounded-[1.5rem] bg-[linear-gradient(135deg,rgba(255,255,255,0.92),rgba(255,79,163,0.42),rgba(255,255,255,0.12))]" />
                  <h3 className="text-3xl font-semibold">{title}</h3>
                  <p className="mt-4 text-sm leading-6 text-white/60">{text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="stats" className="px-5 py-24 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-5">
          {copy.stats.map(([value, label], index) => (
            <Reveal key={label} delay={index * 0.06}>
              <div className="glass rounded-[2rem] p-6">
                <Counter value={value} />
                <p className="mt-4 text-sm uppercase tracking-[0.18em] text-white/50">{label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="gallery" className="px-5 py-24 md:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <h2 className="max-w-4xl font-[var(--font-manrope)] text-4xl font-black tracking-[-0.04em] md:text-6xl">{copy.galleryTitle}</h2>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-white/65">{copy.galleryLead}</p>
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {galleryPrompts.map((prompt, index) => (
              <Reveal key={prompt} delay={index * 0.08}>
                <div className="glass relative min-h-80 overflow-hidden rounded-[2rem] p-6">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,79,163,0.38),transparent_18rem),linear-gradient(135deg,rgba(255,255,255,0.12),transparent)]" />
                  <div className="relative z-10 flex h-full flex-col justify-end">
                    <span className="mb-24 text-xs font-black uppercase tracking-[0.26em] text-[#ff4fa3]">AI prompt 0{index + 1}</span>
                    <p className="text-xl leading-8 text-white/80">{prompt}</p>
                  </div>
                </div>
              </Reveal>
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
    </main>
  );
}
