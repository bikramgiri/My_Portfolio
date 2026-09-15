import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const siteUrl = "https://bikram-giri.com.np";
const name = "Bikram Giri";
const description =
  "Bikram Giri is a Web Developer and AI/ML Enthusiast building modern, scalable web apps and sharing tech insights, projects, and innovations.";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: name,
    template: `%s | ${name}`,
  },
  description: description,
  keywords: [
    "Bikram Giri",
    "Bikram",
    "Web Developer",
    "AI Enthusiast",
    "ML Enthusiast",
    "Tech Blog",
    "Web Apps",
    "Scalable Web Applications",
    "Technology Insights",
    "Programming",
    "Software Development",
    "MERN Stack Developer",
    "Full Stack Developer",
    "Portfolio",
    "Bikram Giri Portfolio",
    "Bikram Giri Web Developer",
    "Nepal Developer",
    "Itahari Developer",
  ],
  authors: [{ name: name, url: siteUrl }],
  creator: name,
  publisher: name,
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
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: name,
    description: description,
    siteName: name,
    images: [
      {
        url: `${siteUrl}/og-bikram-giri.jpg`,
        width: 1200,
        height: 630,
        alt: `${name} – Web Developer & AI/ML Enthusiast`,
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: name,
    description:
      "Web Developer and AI/ML Enthusiast sharing projects, insights, and innovations.",
    images: [`${siteUrl}/og-bikram-giri.jpg`],
    creator: "@bikram__giri",
  },
  icons: {
    icon: [
      { url: "/bikram-giri.ico", type: "image/x-icon" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/site.webmanifest",
};

// JSON-LD Structured Data
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${siteUrl}/#person`,
  name: name,
  url: siteUrl,
  image: `${siteUrl}/og-bikram-giri.jpg`,
  jobTitle: "Web Developer and AI/ML Enthusiast",
  description: description,
  sameAs: [
    "https://www.linkedin.com/in/bikram-giri/",
    "https://github.com/bikramgiri",
    "https://x.com/bikram__giri/",
    "https://www.youtube.com/@technologyknowledgee",
  ],
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Tribhuvan University",
  },
  knowsAbout: [
    "Web Development",
    "Artificial Intelligence",
    "Machine Learning",
    "MERN Stack Developer",
    "Software Developer",
    "Full Stack Developer",
    "Software Development",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: name,
  url: siteUrl,
  potentialAction: {
    "@type": "SearchAction",
    target: `${siteUrl}/?s={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: siteUrl,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "About",
      item: `${siteUrl}/#about`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Projects",
      item: `${siteUrl}/#projects`,
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Contact",
      item: `${siteUrl}/#contact`,
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/x-icon" href="/bikram-giri.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbSchema),
          }}
        />
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
