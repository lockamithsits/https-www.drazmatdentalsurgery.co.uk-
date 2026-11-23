import type { Metadata } from "next";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy | Dr Azmat Dental Surgery, Birmingham",
  description:
    "Privacy policy for drazmatdentalsurgery.co.uk. This website has no contact form and no analytics, so it collects no personal information from visitors.",
  alternates: { canonical: "https://drazmatdentalsurgery.co.uk/privacy/" },
  openGraph: { url: "https://drazmatdentalsurgery.co.uk/privacy/" },
};

export default function Privacy() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">Privacy Policy</h1>
      <p className="mt-2 text-sm text-slate-500">Last updated: 23 November 2026</p>
      <div className="mt-8 space-y-8 leading-relaxed text-slate-700">
        <section>
          <h2 className="text-xl font-bold text-slate-900">Who runs this website</h2>
          <p className="mt-2">
            This website is run by Dr Azmat Dental Surgery, {SITE.addressFullUk}. To
            contact the practice, call{" "}
            <a href={SITE.phoneHref} className="font-semibold text-teal-900 hover:underline">
              {SITE.phoneDisplay}
            </a>
            .
          </p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-slate-900">
            What this website collects
          </h2>
          <p className="mt-2">
            This website collects no personal information from visitors. It has no
            contact form, no account system and no analytics.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-slate-900">Cookies</h2>
          <p className="mt-2">
            This website itself sets no cookies. The map on the contact page is provided
            by Google Maps and may set cookies when it loads.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-slate-900">Changes to this policy</h2>
          <p className="mt-2">
            This policy may be updated from time to time. The latest version is always
            published on this page.
          </p>
        </section>
      </div>
    </div>
  );
}
