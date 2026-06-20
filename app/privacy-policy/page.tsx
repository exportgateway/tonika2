import type { Metadata } from "next";
import Link from "next/link";
import { company, contactEmail } from "@/lib/content";

export const metadata: Metadata = {
  title: "Privacy Policy | TONIKA 2",
  description: "Privacy information for TONIKA 2 website inquiries and contact form processing."
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[#030305] px-5 py-16 text-white md:px-8">
      <div className="mx-auto max-w-4xl">
        <Link href="/sl" className="text-sm font-bold uppercase tracking-[0.22em] text-[#ff4fa3]">
          TONIKA 2
        </Link>
        <h1 className="mt-10 font-[var(--font-manrope)] text-5xl font-black tracking-[-0.055em] md:text-7xl">Privacy Policy</h1>
        <div className="mt-10 space-y-8 rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 leading-8 text-white/72 md:p-10">
          <section>
            <h2 className="text-2xl font-semibold text-white">Data controller</h2>
            <p className="mt-3">{company.legalName}, {company.street}, {company.city}, tax number {company.taxId}, registration number {company.registration}.</p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-white">What we process</h2>
            <p className="mt-3">When you submit the contact form, we process the information you provide: name, company, email, phone number, message content, consent confirmation, and technical delivery metadata.</p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-white">Purpose and legal basis</h2>
            <p className="mt-3">We process data to respond to your transport inquiry, prepare an offer, and communicate about requested services. Processing is based on your inquiry, legitimate business communication, and your consent confirmation in the form.</p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-white">Retention and rights</h2>
            <p className="mt-3">Inquiry data is retained only as long as needed for communication, offer preparation, legal obligations, or legitimate business records. You may request access, correction, deletion, restriction, or objection by writing to <a className="text-[#ff4fa3]" href={`mailto:${contactEmail}`}>{contactEmail}</a>.</p>
          </section>
        </div>
      </div>
    </main>
  );
}
