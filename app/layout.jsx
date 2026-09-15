import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const siteUrl = "https://bikram-giri.com.np";
const blogUrl = "https://giribikram.com.np";
const name = "Bikram Giri";
const description =
  "Official portfolio of Bikram Giri – Web Developer, AI/ML Enthusiast, and creator of Bikram's Blog (giribikram.com.np). Explore modern scalable web apps, tech insights, and projects.";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Bikram Giri | Web Developer & AI/ML Enthusiast | Bikram's Blog",
    template: "%s | Bikram Giri",
  },
  description: description,
  keywords: [
    "Bikram Giri",
    "Bikram",
    "Bikram Blog",
    "Bikram's Blog",
    "Bikram Giri Blog",
    "Giri Bikram Blog",
    "giribikram",
    "bikramgiri",
    "giribikram.com.np",
    "bikram-giri.com.np",
    "Bikram Giri Portfolio",
    "Bikram Giri Web Developer",
    "Bikram Giri Nepal",
    "Bikram Giri CSIT",
    "Bikram Giri Software Developer",
    "Bikram Tech Blog",
    "Web Developer",
    "AI Enthusiast",
    "ML Enthusiast",
    "Tech Blog",
    "Full Stack Developer",
    "MERN Stack Developer",
    "Nepal Web Developer",
  ],
  authors: [
    { name: "Bikram Giri", url: siteUrl },
    { name: "Bikram's Blog", url: blogUrl },
  ],
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
    siteName: "Bikram Giri Portfolio & Bikram's Blog",
    title: "Bikram Giri | Web Developer & AI/ML Enthusiast | Bikram's Blog",
    description: description,
    images: [
      {
        url: `${siteUrl}/og-bikram-giri.jpg`,
        width: 1200,
        height: 630,
        alt: "Bikram Giri – Web Developer, AI/ML Enthusiast & Creator of Bikram's Blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bikram Giri | Web Developer & AI/ML Enthusiast | Bikram's Blog",
    description:
      "Web Developer, AI/ML Enthusiast and creator of Bikram's Blog sharing tech innovations, projects, and insights.",
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
    alternateName: ["Bikram", "Giri Bikram", "bikramgiri", "Bikram Giri Nepal"],
    givenName: "Bikram",
    familyName: "Giri",
    url: siteUrl,
    image: `${siteUrl}/og-bikram-giri.jpg`,
    jobTitle: "Web Developer and AI/ML Enthusiast",
    description: description,
    sameAs: [
      "https://www.linkedin.com/in/bikram-giri/",
      "https://github.com/bikramgiri",
      "https://x.com/bikram__giri/",
      "https://www.youtube.com/@technologyknowledgee",
      blogUrl,
    ],
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Tribhuvan University",
    },
    owns: {
      "@id": `${blogUrl}/#blog`,
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
      "Bikram's Blog",
    ],
  };

  const jsonLdWebsite = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    name: "Bikram Giri Portfolio",
    alternateName: [
      "Bikram Giri",
      "Bikram",
      "Bikram Blog",
      "Bikram's Blog",
      "Bikram Giri Official Website",
    ],
    url: siteUrl,
    publisher: {
      "@id": `${siteUrl}/#person`,
    },
  };

  const jsonLdBlog = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": `${blogUrl}/#blog`,
    name: "Bikram's Blog",
    alternateName: [
      "Bikram Blog",
      "Bikram Giri Blog",
      "Giri Bikram Blog",
      "Bikram Tech Blog",
    ],
    url: blogUrl,
    description:
      "Bikram's Blog by Bikram Giri – In-depth articles on technology, AI tools, web development, and BSc CSIT study resources.",
    author: {
      "@id": `${siteUrl}/#person`,
    },
    creator: {
      "@id": `${siteUrl}/#person`,
    },
    publisher: {
      "@id": `${siteUrl}/#person`,
    },
  };

  const jsonLdProfile = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${siteUrl}/#profile`,
    url: siteUrl,
    name: "Bikram Giri - Portfolio Profile & Bikram's Blog Creator",
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBlog) }}
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
