import React from "react";
import { Helmet } from "react-helmet";

const SEO = () => {
  const siteUrl = "https://bikram-giri.com.np";
  const name = "Bikram Giri";
  const description =
    "Bikram Giri is a Web Developer and AI/ML Enthusiast building modern, scalable web apps and sharing tech insights, projects, and innovations.";

  return (
    <Helmet>
      {/* Primary SEO */}
      <title>{name} | Web Developer & AI/ML Enthusiast</title>
      <meta name="description" content={description} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={siteUrl} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:title" content={`${name} | Web Developer & AI/ML Enthusiast`} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${siteUrl}/og-bikram-giri.jpg`} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={`${name} – Web Developer & AI/ML Enthusiast`} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={`${name} | Web Developer & AI/ML Enthusiast`} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${siteUrl}/og-bikram-giri.jpg`} />

      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "@id": `${siteUrl}/#person`,
          "name": name,
          "url": siteUrl,
          "image": `${siteUrl}/og-bikram-giri.jpg`,
          "jobTitle": "Web Developer and AI/ML Enthusiast",
          "description": description,
          "sameAs": [
            "https://www.linkedin.com/in/bikram-giri/",
            "https://github.com/bikramgiri",
            "https://x.com/bikram__giri/",
            "https://www.youtube.com/@technologyknowledgee"
          ],
          "alumniOf": {
            "@type": "CollegeOrUniversity",
            "name": "Tribhuvan University"
          },
          "knowsAbout": [
            "Web Development",
            "Artificial Intelligence",
            "Machine Learning",
            "MERN Stack Developer",
            "Software Developer",
            "Full Stack Developer",
            "Software Development"
          ]
        })}
      </script>

      {/* Website Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": name,
          "url": siteUrl,
          "potentialAction": {
            "@type": "SearchAction",
            "target": `${siteUrl}/?s={search_term_string}`,
            "query-input": "required name=search_term_string"
          }
        })}
      </script>

      {/* Breadcrumb Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": siteUrl
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "About",
              "item": `${siteUrl}/about`
            }
          ]
        })}
      </script>
    </Helmet>
  );
};

export default SEO;
