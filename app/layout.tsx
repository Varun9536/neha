import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { experience, projects, services, skills } from "@/lib/data";
import { seoKeywords, site } from "@/lib/site";
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
  applicationName: site.title,
  referrer: "origin-when-cross-origin",
  title: {
    default: site.title,
    template: "%s | Neha Singh HR Portfolio",
  },
  description: site.description,
  keywords: seoKeywords,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.name,
  category: "Human Resources",
  classification: "Professional portfolio",
  alternates: {
    canonical: "/",
    languages: {
      "en-IN": "/",
      "x-default": "/",
    },
  },
  openGraph: {
    title: site.title,
    description: site.description,
    url: site.url,
    siteName: site.title,
    images: [
      {
        url: site.ogImage,
        width: 1200,
        height: 630,
        alt: "Neha Singh - HR Recruiter in Noida and Ghaziabad",
      },
    ],
    locale: site.locale,
    type: "profile",
    firstName: "Neha",
    lastName: "Singh",
    username: "nehas29",
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
    images: [site.ogImage],
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
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  manifest: "/manifest.webmanifest",
  other: {
    "profile:first_name": "Neha",
    "profile:last_name": "Singh",
    "profile:username": "nehas29",
    "geo.region": "IN-UP",
    "geo.placename": "Ghaziabad",
    "ICBM": "28.6692, 77.4538",
    "theme-color": "#0d0520",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
  themeColor: "#0d0520",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const skillNames = Object.values(skills)
    .flat()
    .map((skill) => skill.name);

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${site.url}/#person`,
        name: site.name,
        givenName: "Neha",
        familyName: "Singh",
        jobTitle: [
          site.role,
          "HR Operations",
          "Talent Acquisition",
          "HR Recruiter",
          "Recruitment Executive",
        ],
        url: site.url,
        image: `${site.url}${site.ogImage}`,
        email: `mailto:${site.email}`,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Ghaziabad",
          addressRegion: "Uttar Pradesh",
          addressCountry: "IN",
        },
        sameAs: [site.linkedin, `mailto:${site.email}`],
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "recruiting opportunities",
          email: site.email,
          areaServed: "IN",
          availableLanguage: ["English", "Hindi"],
        },
        worksFor: {
          "@type": "Organization",
          name: site.currentCompany,
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
          ...skillNames,
          ...services.map((service) => service.title),
        ],
        hasCredential: {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "MBA",
          name: "MBA in Human Resources",
        },
        hasOccupation: {
          "@type": "Occupation",
          name: "HR Executive, HR Operations, and Talent Acquisition",
          occupationLocation: {
            "@type": "City",
            name: "Noida",
          },
          skills: skillNames.join(", "),
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
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: `${site.url}${site.ogImage}`,
          width: 1200,
          height: 630,
        },
      },
      {
        "@type": "WebSite",
        "@id": `${site.url}/#website`,
        url: site.url,
        name: site.title,
        alternateName: site.shortTitle,
        description: site.description,
        inLanguage: "en-IN",
        publisher: {
          "@id": `${site.url}/#person`,
        },
      },
      {
        "@type": "WebPage",
        "@id": `${site.url}/#webpage`,
        url: site.url,
        name: site.title,
        description: site.description,
        isPartOf: {
          "@id": `${site.url}/#website`,
        },
        about: {
          "@id": `${site.url}/#person`,
        },
        mainEntity: {
          "@id": `${site.url}/#person`,
        },
        breadcrumb: {
          "@id": `${site.url}/#breadcrumb`,
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${site.url}/#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: site.url,
          },
        ],
      },
      {
        "@type": "ItemList",
        "@id": `${site.url}/#work`,
        name: "HR recruitment and operations work",
        itemListElement: projects.map((project, index) => ({
          "@type": "CreativeWork",
          position: index + 1,
          name: project.title,
          description: project.desc,
          keywords: project.tech.join(", "),
          creator: {
            "@id": `${site.url}/#person`,
          },
        })),
      },
      {
        "@type": "ItemList",
        "@id": `${site.url}/#experience`,
        name: "Professional experience",
        itemListElement: experience.map((item, index) => ({
          "@type": "OrganizationRole",
          position: index + 1,
          roleName: item.role,
          startDate: item.period.split(" - ")[0],
          description: item.desc,
          memberOf: {
            "@type": "Organization",
            name: item.company,
          },
        })),
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
            __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
          }}
        />
      </body>
    </html>
  );
}
