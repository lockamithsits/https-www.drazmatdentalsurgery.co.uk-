import type { Metadata } from "next";
import HoursTable from "@/components/HoursTable";
import { MAP_DIRECTIONS_URL, MAP_EMBED_URL, SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Dr Azmat Dental Surgery | Alum Rock, Birmingham",
  description:
    "Contact Dr Azmat Dental Surgery at 694 Alum Rock Road, Birmingham B8 3NU. Call +44 121 327 0307. Open Monday to Friday, Wednesday until 7pm.",
  alternates: { canonical: "https://drazmatdentalsurgery.co.uk/contact/" },
  openGraph: { url: "https://drazmatdentalsurgery.co.uk/contact/" },
};

export default function Contact() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
      <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">
        Contact Dr Azmat Dental Surgery
      </h1>
      <p className="mt-4 max-w-2xl leading-relaxed text-slate-700">
        Call the practice on{" "}
        <a href={SITE.phoneHref} className="font-semibold text-teal-900 hover:underline">
          {SITE.phoneDisplay}
        </a>{" "}
        or visit the practice at the address below.
      </p>
      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <div className="rounded-xl border border-slate-200 bg-white p-6">
          <h2 className="text-lg font-bold text-slate-900">Address</h2>
          <p className="mt-2 text-slate-700">
            {SITE.streetAddress}
            <br />
            {SITE.addressLocality} {SITE.postalCode}
            <br />
            United Kingdom
          </p>
          <p className="mt-2 text-sm text-slate-500">Plus code: {SITE.plusCode}</p>
          <p className="mt-4">
            <a
              href={MAP_DIRECTIONS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-teal-900 hover:underline"
            >
              Get directions on Google Maps →
            </a>
          </p>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-6">
          <h2 className="text-lg font-bold text-slate-900">Phone</h2>
          <p className="mt-2">
            <a
              href={SITE.phoneHref}
              className="text-xl font-bold text-teal-900 hover:underline"
            >
              {SITE.phoneDisplay}
            </a>
          </p>
          <p className="mt-2 text-slate-700">
            Call to book an appointment or to ask about the practice.
          </p>
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-lg font-bold text-slate-900">Opening hours</h2>
        <div className="mt-3 rounded-xl border border-slate-200 bg-white p-6">
          <HoursTable />
        </div>
        <p className="mt-3 text-slate-700">
          The practice is closed on Saturday and Sunday.
        </p>
      </div>
      <div className="mt-8">
        <h2 className="text-lg font-bold text-slate-900">Map</h2>
        <p className="mt-1 text-sm text-slate-500">
          Map of {SITE.addressFull}.
        </p>
        <iframe
          title={`Map of ${SITE.addressFull}`}
          src={MAP_EMBED_URL}
          className="mt-3 h-96 w-full rounded-xl border border-slate-200"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>
    </div>
  );
}
