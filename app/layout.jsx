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
    default: "Bikram Giri | Web Developer & AI/ML Enthusiast",
    template: "%s | Bikram Giri",
  },
  description: description,
  keywords: [
    "Bikram Giri",
    "Bikram",
    "Giri Bikram",
    "bikramgiri",
    "Bikram Giri Portfolio",
    "Bikram Giri Web Developer",
    "Bikram Giri Nepal",
    "Bikram Giri CSIT",
    "Bikram Giri Software Developer",
    "Web Developer",
    "AI Enthusiast",
    "ML Enthusiast",
    "Tech Blog",
    "Web Apps",
    "Scalable Web Applications",
    "Technology Insights",
    "Programming",
    "Software Development",
    "Full Stack Developer",
    "MERN Stack Developer",
    "Nepal Web Developer",
  ],
  authors: [{ name: "Bikram Giri", url: siteUrl }],
  creator: "Bikram Giri",
  publisher: "Bikram Giri",
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
    locale: "en_US",
    url: siteUrl,
    siteName: name,
    title: "Bikram Giri – Web Developer & AI/ML Enthusiast",
    description: description,
    images: [
      {
        url: `${siteUrl}/og-bikram-giri.jpg`,
        width: 1200,
        height: 630,
        alt: "Bikram Giri – Web Developer & AI/ML Enthusiast",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bikram Giri | Web Developer & AI/ML Enthusiast",
    description:
      "Web Developer and AI/ML Enthusiast sharing projects, insights, and innovations.",
    creator: "@bikram__giri",
    images: [`${siteUrl}/og-bikram-giri.jpg`],
  },
  icons: {
    icon: [
      { url: "/bikram-giri.ico" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
};

export default function RootLayout({ children }) {
  const jsonLdPerson = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${siteUrl}/#person`,
    name: name,
    alternateName: ["Bikram", "Giri Bikram", "bikramgiri"],
    url: siteUrl,
    image: `${siteUrl}/og-bikram-giri.jpg`,
    jobTitle: "Web Developer and AI/ML Enthusiast",
    description: description,
    sameAs: [
      "https://www.linkedin.com/in/bikram-giri/",
      "https://github.com/bikramgiri",
      "https://x.com/bikram__giri/",
      "https://www.youtube.com/@technologyknowledgee",
      "https://giribikram.com.np/",
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
      "React",
      "Next.js",
      "Node.js",
      "Python",
    ],
  };

  const jsonLdWebsite = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    name: name,
    alternateName: ["Bikram Giri Portfolio", "Bikram Portfolio"],
    url: siteUrl,
    publisher: {
      "@id": `${siteUrl}/#person`,
    },
  };

  const jsonLdProfile = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${siteUrl}/#profile`,
    url: siteUrl,
    name: "Bikram Giri - Portfolio Profile",
    mainEntity: {
      "@id": `${siteUrl}/#person`,
    },
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdPerson) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebsite) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdProfile) }}
        />
      </head>
      <body className="bg-gray-900 text-gray-100 antialiased min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
