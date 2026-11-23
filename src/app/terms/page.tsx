import type { Metadata } from "next";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Use | Dr Azmat Dental Surgery, Birmingham",
  description:
    "Terms of use for drazmatdentalsurgery.co.uk. The information on this website is general information only and is not medical or dental advice.",
  alternates: { canonical: "https://drazmatdentalsurgery.co.uk/terms/" },
  openGraph: { url: "https://drazmatdentalsurgery.co.uk/terms/" },
};

export default function Terms() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">Terms of Use</h1>
      <p className="mt-2 text-sm text-slate-500">Last updated: 23 November 2026</p>
      <div className="mt-8 space-y-8 leading-relaxed text-slate-700">
        <section>
          <h2 className="text-xl font-bold text-slate-900">About this website</h2>
          <p className="mt-2">
            This website belongs to Dr Azmat Dental Surgery, {SITE.addressFullUk}. By
            using this website, you accept these terms.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-slate-900">General information only</h2>
          <p className="mt-2">
            The information on this website is general information only. It is not
            medical or dental advice, and it does not replace advice from a qualified
            dental professional.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-slate-900">Appointments</h2>
          <p className="mt-2">
            Appointments cannot be booked through this website. To book an appointment,
            call the practice on{" "}
            <a href={SITE.phoneHref} className="font-semibold text-teal-900 hover:underline">
              {SITE.phoneDisplay}
            </a>
            .
          </p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-slate-900">Links</h2>
          <p className="mt-2">
            This website links to Google Maps for directions and a map of the practice
            address. The practice is not responsible for the content of external
            websites.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-slate-900">Copyright</h2>
          <p className="mt-2">
            The content of this website belongs to Dr Azmat Dental Surgery unless stated
            otherwise. It may not be copied or reused without permission.
          </p>
        </section>
      </div>
    </div>
  );
}
