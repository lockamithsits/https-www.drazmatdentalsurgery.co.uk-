import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SITE } from "@/lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Dr Azmat Dental Surgery | Dentist in Alum Rock, Birmingham",
    template: "%s",
  },
  description:
    "Dr Azmat Dental Surgery is a dentist at 694 Alum Rock Road, Birmingham B8. Call +44 121 327 0307. Open Monday to Friday, Wednesday until 7pm.",
  authors: [{ name: "Dr Azmat Dental Surgery", url: "https://drazmatdentalsurgery.co.uk/" }],
  creator: "Dr Azmat Dental Surgery",
  publisher: "Dr Azmat Dental Surgery",
  alternates: {
    canonical: "https://drazmatdentalsurgery.co.uk/",
    languages: { "en-GB": "https://drazmatdentalsurgery.co.uk/" },
  },
  openGraph: {
    title: "Dr Azmat Dental Surgery | Dentist in Alum Rock, Birmingham",
    description:
      "Dr Azmat Dental Surgery is a dentist at 694 Alum Rock Road, Birmingham B8. Call +44 121 327 0307 to book an appointment.",
    url: "https://drazmatdentalsurgery.co.uk/",
    siteName: "Dr Azmat Dental Surgery",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Dr Azmat Dental Surgery — Dentist in Alum Rock, Birmingham",
        type: "image/jpeg",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr Azmat Dental Surgery | Dentist in Alum Rock, Birmingham",
    description:
      "Dr Azmat Dental Surgery is a dentist at 694 Alum Rock Road, Birmingham B8. Call +44 121 327 0307 to book an appointment.",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  verification: {
    google: "9zPyMJIyvZeMvwgknSwRTDcyQB40ulR8WlFu2QwQr9I",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  "@id": "https://drazmatdentalsurgery.co.uk/#dentist",
  name: "Dr Azmat Dental Surgery",
  url: "https://drazmatdentalsurgery.co.uk/",
  telephone: "+441213270307",
  address: {
    "@type": "PostalAddress",
    streetAddress: "694 Alum Rock Rd",
    addressLocality: "Birmingham",
    postalCode: "B8 3NU",
    addressCountry: "GB",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "17:30",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Wednesday",
      opens: "09:00",
      closes: "19:00",
    },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-GB" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <head>
        <meta name="theme-color" content="#134e4a" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-white">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
