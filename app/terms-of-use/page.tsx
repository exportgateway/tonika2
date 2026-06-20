import type { Metadata } from "next";
import Link from "next/link";
import { company, contactEmail } from "@/lib/content";

export const metadata: Metadata = {
  title: "Terms of Use | TONIKA 2",
  description: "Terms of use for the TONIKA 2 website."
};

export default function TermsOfUsePage() {
  return (
    <main className="min-h-screen bg-[#030305] px-5 py-16 text-white md:px-8">
      <div className="mx-auto max-w-4xl">
        <Link href="/sl" className="text-sm font-bold uppercase tracking-[0.22em] text-[#ff4fa3]">
          TONIKA 2
        </Link>
        <h1 className="mt-10 font-[var(--font-manrope)] text-5xl font-black tracking-[-0.055em] md:text-7xl">Terms of Use</h1>
        <div className="mt-10 space-y-8 rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 leading-8 text-white/72 md:p-10">
          <section>
            <h2 className="text-2xl font-semibold text-white">Website owner</h2>
            <p className="mt-3">{company.legalName}, {company.street}, {company.city}, tax number {company.taxId}, registration number {company.registration}.</p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-white">Information only</h2>
            <p className="mt-3">The website presents company information, transport capabilities, and contact options. Website content is informational and does not represent a binding transport offer.</p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-white">Inquiries and offers</h2>
            <p className="mt-3">Transport availability, pricing, temperature requirements, documentation, insurance, and delivery terms are confirmed individually after direct communication with TONIKA 2.</p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-white">Contact</h2>
            <p className="mt-3">For website or service questions, contact <a className="text-[#ff4fa3]" href={`mailto:${contactEmail}`}>{contactEmail}</a>.</p>
          </section>
        </div>
      </div>
    </main>
  );
}
