import type { Metadata } from "next";
import HoursTable from "@/components/HoursTable";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Dr Azmat Dental Surgery | Alum Rock, Birmingham",
  description:
    "About Dr Azmat Dental Surgery, a dental practice at 694 Alum Rock Road, Birmingham B8 3NU. Address, opening hours and phone number. Call +44 121 327 0307.",
  alternates: { canonical: "https://drazmatdentalsurgery.co.uk/about/" },
  openGraph: { url: "https://drazmatdentalsurgery.co.uk/about/" },
};

export default function About() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
      <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">
        About Dr Azmat Dental Surgery
      </h1>
      <div className="mt-6 max-w-2xl space-y-5 leading-relaxed text-slate-700">
        <p>
          Dr Azmat Dental Surgery is a dental practice at 694 Alum Rock Road, Birmingham
          B8 3NU.
        </p>
        <p>
          The practice is on Alum Rock Road in Birmingham, postcode B8 3NU. Its Plus code
          is {SITE.plusCode}.
        </p>
        <p>
          The practice is open Monday to Friday. On Wednesdays it stays open until
          7:00pm. It is closed on Saturday and Sunday.
        </p>
        <p>
          To contact the practice, call{" "}
          <a href={SITE.phoneHref} className="font-semibold text-teal-900 hover:underline">
            {SITE.phoneDisplay}
          </a>
          .
        </p>
      </div>
      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        <div className="rounded-xl border border-slate-200 bg-white p-6">
          <h2 className="text-lg font-bold text-slate-900">Address</h2>
          <p className="mt-2 text-slate-700">
            {SITE.streetAddress}
            <br />
            {SITE.addressLocality} {SITE.postalCode}
            <br />
            United Kingdom
          </p>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-6">
          <h2 className="text-lg font-bold text-slate-900">Opening hours</h2>
          <div className="mt-2">
            <HoursTable />
          </div>
        </div>
      </div>
      <p className="mt-10">
        <a
          href={SITE.phoneHref}
          className="inline-block rounded-full bg-teal-900 px-6 py-3 text-base font-semibold text-white hover:bg-teal-800"
        >
          Call {SITE.phoneDisplay}
        </a>
      </p>
    </div>
  );
}
