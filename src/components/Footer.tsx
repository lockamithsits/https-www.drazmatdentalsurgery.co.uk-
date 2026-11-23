import Link from "next/link";
import { FOOTER_LINKS, HOURS, SITE } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-teal-900 text-teal-50">
      <div className="mx-auto grid max-w-5xl gap-10 px-4 py-12 sm:grid-cols-3 sm:px-6">
        <div>
          <p className="text-lg font-bold text-white">Dr Azmat Dental Surgery</p>
          <p className="mt-2 text-sm leading-relaxed">
            {SITE.streetAddress}
            <br />
            {SITE.addressLocality} {SITE.postalCode}
            <br />
            United Kingdom
          </p>
          <p className="mt-3 text-sm">
            <a href={SITE.phoneHref} className="font-semibold text-white hover:underline">
              {SITE.phoneDisplay}
            </a>
          </p>
        </div>
        <div>
          <p className="text-sm font-bold uppercase tracking-wide text-teal-200">
            Opening hours
          </p>
          <ul className="mt-2 space-y-1 text-sm">
            {HOURS.map((h) => (
              <li key={h.day} className="flex justify-between gap-4">
                <span>{h.label}</span>
                <span>{h.open ? `${h.open} – ${h.close}` : "Closed"}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-sm font-bold uppercase tracking-wide text-teal-200">Pages</p>
          <ul className="mt-2 space-y-1 text-sm">
            {FOOTER_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-white hover:underline">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-4">
            <a
              href={SITE.phoneHref}
              className="inline-block rounded-full bg-white px-4 py-2 text-sm font-semibold text-teal-900 hover:bg-teal-50"
            >
              Call {SITE.phoneDisplay}
            </a>
          </p>
        </div>
      </div>
      <div className="border-t border-teal-800">
        <p className="mx-auto max-w-5xl px-4 py-4 text-xs text-teal-200 sm:px-6">
          © 2026 Dr Azmat Dental Surgery. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
