import type { Metadata } from "next";
import Link from "next/link";
import HoursTable from "@/components/HoursTable";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Dr Azmat Dental Surgery | Dentist in Alum Rock, Birmingham",
  description:
    "Dr Azmat Dental Surgery is a dentist at 694 Alum Rock Road, Birmingham B8. Call +44 121 327 0307. Open Monday to Friday, Wednesday until 7pm.",
  alternates: { canonical: "https://drazmatdentalsurgery.co.uk/" },
  openGraph: { url: "https://drazmatdentalsurgery.co.uk/" },
};

const FAQS = [
  {
    question: "Where is Dr Azmat Dental Surgery?",
    answer: "Dr Azmat Dental Surgery is at 694 Alum Rock Road, Birmingham B8 3NU.",
  },
  {
    question: "What are the opening hours of Dr Azmat Dental Surgery?",
    answer:
      "The practice is open Monday to Friday, 9:00am to 5:30pm, except Wednesday when it closes at 7:00pm. It is closed on Saturday and Sunday.",
  },
  {
    question: "How do I contact Dr Azmat Dental Surgery?",
    answer: "Call the practice on +44 121 327 0307.",
  },
  {
    question: "Is Dr Azmat Dental Surgery open on weekends?",
    answer: "No. The practice is closed on Saturday and Sunday.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      {/* Hero */}
      <section className="bg-teal-900 text-white">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20">
          <p className="text-sm font-semibold tracking-wide text-teal-200">
            Dentist · Alum Rock, Birmingham
          </p>
          <h1 className="mt-3 max-w-2xl text-4xl font-bold leading-tight sm:text-5xl">
            Dr Azmat Dental Surgery
          </h1>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-teal-100">
            A dental practice on Alum Rock Road, Birmingham. Call the practice to book an
            appointment.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={SITE.phoneHref}
              className="rounded-full bg-white px-6 py-3 text-base font-semibold text-teal-900 hover:bg-teal-50"
            >
              Call {SITE.phoneDisplay}
            </a>
            <a
              href="#hours"
              className="rounded-full border border-teal-200 px-6 py-3 text-base font-semibold text-white hover:bg-teal-800"
            >
              See opening hours
            </a>
          </div>
          <p className="mt-6 text-sm text-teal-200">
            Open Monday to Friday, 9:00am–5:30pm · Wednesday until 7:00pm · Closed Saturday
            and Sunday
          </p>
        </div>
      </section>

      {/* Visit cards */}
      <section className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
        <div className="grid gap-6 sm:grid-cols-3">
          <div className="rounded-xl border border-slate-200 bg-white p-6">
            <h2 className="text-lg font-bold text-slate-900">Visit the practice</h2>
            <p className="mt-2 text-slate-700">
              {SITE.streetAddress}
              <br />
              {SITE.addressLocality} {SITE.postalCode}
              <br />
              United Kingdom
            </p>
            <p className="mt-2 text-sm text-slate-500">Plus code: {SITE.plusCode}</p>
            <p className="mt-3">
              <Link href="/contact/" className="font-semibold text-teal-900 hover:underline">
                Directions and map →
              </Link>
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-6">
            <h2 className="text-lg font-bold text-slate-900">Call the practice</h2>
            <p className="mt-2 text-slate-700">
              Call to book an appointment or to ask about the practice.
            </p>
            <p className="mt-3">
              <a
                href={SITE.phoneHref}
                className="text-lg font-bold text-teal-900 hover:underline"
              >
                {SITE.phoneDisplay}
              </a>
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-6">
            <h2 className="text-lg font-bold text-slate-900">Opening hours</h2>
            <p className="mt-2 text-slate-700">
              Monday to Friday, 9:00am–5:30pm.
              <br />
              Wednesday until 7:00pm.
              <br />
              Closed Saturday and Sunday.
            </p>
            <p className="mt-3">
              <a href="#hours" className="font-semibold text-teal-900 hover:underline">
                Full hours →
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Hours */}
      <section id="hours" className="bg-teal-50">
        <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
          <h2 className="text-2xl font-bold text-slate-900">Opening hours</h2>
          <div className="mt-4 rounded-xl border border-slate-200 bg-white p-6">
            <HoursTable />
          </div>
          <p className="mt-4 text-slate-700">
            The practice is closed on Saturday and Sunday. To contact the practice, call{" "}
            <a href={SITE.phoneHref} className="font-semibold text-teal-900 hover:underline">
              {SITE.phoneDisplay}
            </a>
            .
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
        <h2 className="text-2xl font-bold text-slate-900">
          Frequently asked questions
        </h2>
        <div className="mt-6 space-y-6">
          {FAQS.map((f) => (
            <div key={f.question} className="border-b border-slate-200 pb-6 last:border-0">
              <h3 className="text-lg font-semibold text-slate-900">{f.question}</h3>
              <p className="mt-2 leading-relaxed text-slate-700">{f.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA band */}
      <section className="bg-teal-900 text-white">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-6 px-4 py-10 sm:px-6">
          <div>
            <h2 className="text-2xl font-bold">Call the practice</h2>
            <p className="mt-1 text-teal-100">
              {SITE.addressFull} · Open Monday to Friday
            </p>
          </div>
          <a
            href={SITE.phoneHref}
            className="rounded-full bg-white px-6 py-3 text-base font-semibold text-teal-900 hover:bg-teal-50"
          >
            Call {SITE.phoneDisplay}
          </a>
        </div>
      </section>
    </>
  );
}
