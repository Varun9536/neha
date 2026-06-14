import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { site } from "@/lib/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  applicationName: "Neha Singh HR Portfolio",
  title: {
    default: site.title,
    template: "%s | Neha Singh",
  },
  description: site.description,
  keywords: [
    "Neha Singh HR Recruiter",
    "Neha Singh portfolio",
    "HR Recruiter Noida",
    "HR Recruiter Ghaziabad",
    "HR Generalist Noida",
    "Human Resources portfolio",
    "IT Recruitment",
    "Talent Acquisition",
    "Recruitment Coordinator",
    "HR Operations",
    "Employee Onboarding",
    "ATS Management",
    "HR One ATS",
    "Naukri recruiter",
    "LinkedIn Recruiter",
    "Indeed sourcing",
    "Internshala hiring",
    "Recruitment reporting",
    "Employee engagement",
    "MBA Human Resources",
  ],
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.name,
  category: "Human Resources",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: site.title,
    description: site.description,
    url: site.url,
    siteName: "Neha Singh HR Portfolio",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Neha Singh - HR Recruiter and Human Resources Portfolio",
      },
    ],
    locale: "en_IN",
    type: "profile",
    firstName: "Neha",
    lastName: "Singh",
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${site.url}/#person`,
        name: site.name,
        givenName: "Neha",
        familyName: "Singh",
        jobTitle: "HR Recruiter",
        url: site.url,
        image: `${site.url}/opengraph-image`,
        email: `mailto:${site.email}`,
        telephone: site.phone,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Ghaziabad",
          addressRegion: "Uttar Pradesh",
          addressCountry: "IN",
        },
        sameAs: [site.linkedin, `mailto:${site.email}`, site.whatsapp],
        worksFor: {
          "@type": "Organization",
          name: "Eice Technology Pvt. Ltd.",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Noida",
            addressCountry: "IN",
          },
        },
        alumniOf: [
          {
            "@type": "CollegeOrUniversity",
            name: "University of Delhi, School of Open Learning",
          },
          {
            "@type": "CollegeOrUniversity",
            name: "Chaudhary Charan Singh University",
          },
        ],
        knowsAbout: [
          "IT recruitment",
          "Talent acquisition",
          "Candidate sourcing",
          "Resume screening",
          "Interview coordination",
          "Onboarding documentation",
          "ATS management",
          "HR operations",
          "Employee engagement",
          "Recruitment reporting",
        ],
        hasCredential: {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "MBA",
          name: "MBA in Human Resources",
        },
        description: site.description,
      },
      {
        "@type": "ProfilePage",
        "@id": `${site.url}/#profile`,
        url: site.url,
        name: site.title,
        description: site.description,
        mainEntity: {
          "@id": `${site.url}/#person`,
        },
      },
      {
        "@type": "WebSite",
        "@id": `${site.url}/#website`,
        url: site.url,
        name: "Neha Singh HR Portfolio",
        description: site.description,
        publisher: {
          "@id": `${site.url}/#person`,
        },
      },
    ],
  };

  return (
    <html lang="en-IN">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </body>
    </html>
  );
}
