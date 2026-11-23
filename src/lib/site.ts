// Shared site facts — GBP-verified 2026-11-23 (see INTAKE.md).
// Everything here is a confirmed fact. Anything unconfirmed is a gate, not a fact.

export const SITE = {
  name: "Dr Azmat Dental Surgery",
  shortName: "Dr Azmat",
  category: "Dentist",
  url: "https://drazmatdentalsurgery.co.uk",
  phoneDisplay: "+44 121 327 0307",
  phoneHref: "tel:+441213270307",
  streetAddress: "694 Alum Rock Rd",
  addressLocality: "Birmingham",
  postalCode: "B8 3NU",
  addressCountry: "GB",
  addressFull: "694 Alum Rock Rd, Birmingham B8 3NU",
  addressFullUk: "694 Alum Rock Rd, Birmingham B8 3NU, United Kingdom",
  plusCode: "F5P9+W4 Birmingham",
  area: "Alum Rock",
} as const;

export type DayHours = { day: string; label: string; open: string | null; close: string | null };

export const HOURS: DayHours[] = [
  { day: "Monday", label: "Monday", open: "9:00am", close: "5:30pm" },
  { day: "Tuesday", label: "Tuesday", open: "9:00am", close: "5:30pm" },
  { day: "Wednesday", label: "Wednesday", open: "9:00am", close: "7:00pm" },
  { day: "Thursday", label: "Thursday", open: "9:00am", close: "5:30pm" },
  { day: "Friday", label: "Friday", open: "9:00am", close: "5:30pm" },
  { day: "Saturday", label: "Saturday", open: null, close: null },
  { day: "Sunday", label: "Sunday", open: null, close: null },
];

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about/", label: "About" },
  { href: "/contact/", label: "Contact" },
] as const;

export const FOOTER_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about/", label: "About" },
  { href: "/contact/", label: "Contact" },
  { href: "/privacy/", label: "Privacy Policy" },
  { href: "/terms/", label: "Terms of Use" },
] as const;

export const MAP_EMBED_URL =
  "https://www.google.com/maps?q=694%20Alum%20Rock%20Rd%2C%20Birmingham%20B8%203NU&output=embed";

export const MAP_DIRECTIONS_URL =
  "https://www.google.com/maps/dir/?api=1&destination=694+Alum+Rock+Rd%2C+Birmingham+B8+3NU";
