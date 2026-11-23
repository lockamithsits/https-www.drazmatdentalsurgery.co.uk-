import Link from "next/link";
import { NAV_LINKS, SITE } from "@/lib/site";

export default function Header() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center gap-x-6 gap-y-3 px-4 py-4 sm:px-6">
        <Link href="/" className="flex items-center gap-3">
          <span
            aria-hidden="true"
            className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal-900 text-base font-bold tracking-wide text-white"
          >
            DA
          </span>
          <span className="text-lg font-bold leading-tight text-slate-900">
            Dr Azmat Dental Surgery
            <span className="block text-xs font-medium text-slate-500">
              Dentist · Alum Rock, Birmingham
            </span>
          </span>
        </Link>
        <nav aria-label="Main" className="ml-auto flex items-center gap-5">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-700 hover:text-teal-900 hover:underline"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <a
          href={SITE.phoneHref}
          className="rounded-full bg-teal-900 px-4 py-2 text-sm font-semibold text-white hover:bg-teal-800"
        >
          Call {SITE.phoneDisplay}
        </a>
      </div>
    </header>
  );
}
