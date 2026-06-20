import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cookies | TONIKA 2",
  description: "Cookie information for the TONIKA 2 website."
};

export default function CookiesPage() {
  return (
    <main className="min-h-screen bg-[#030305] px-5 py-16 text-white md:px-8">
      <div className="mx-auto max-w-4xl">
        <Link href="/sl" className="text-sm font-bold uppercase tracking-[0.22em] text-[#ff4fa3]">
          TONIKA 2
        </Link>
        <h1 className="mt-10 font-[var(--font-manrope)] text-5xl font-black tracking-[-0.055em] md:text-7xl">Cookies</h1>
        <div className="mt-10 space-y-8 rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 leading-8 text-white/72 md:p-10">
          <section>
            <h2 className="text-2xl font-semibold text-white">Current cookie use</h2>
            <p className="mt-3">The TONIKA 2 website does not intentionally set marketing or analytics cookies in the current production version.</p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-white">Essential technology</h2>
            <p className="mt-3">Hosting, security, browser caching, and standard server logs may be used to deliver the website reliably and protect the service.</p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-white">Future changes</h2>
            <p className="mt-3">If analytics, advertising, or third-party cookies are added later, this page should be updated and a consent mechanism should be enabled before those cookies are used.</p>
          </section>
        </div>
      </div>
    </main>
  );
}
