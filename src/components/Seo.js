import React from "react";
import { useStaticQuery, graphql } from "gatsby";

// Rendered via Gatsby's native Head API (export const Head) — returns plain
// head tags, NOT react-helmet. react-helmet uses a global sink that leaks
// state across pages during static rendering, which scrambled per-page titles
// and canonicals. The Head API renders each page's head in isolation.
function Seo({
  title,
  description,
  pathname = "",
  image = "/og-image.png",
  imageAlt = "Xavi Gonzalvo, Machine Learning Researcher at Google",
  article = false,
  noTemplate = false,
  children,
}) {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          author
          siteUrl
          social {
            twitter
            github
            linkedin
            scholar
          }
        }
      }
    }
  `);

  const meta = site.siteMetadata;
  const defaultTitle = meta.title;
  const fullTitle =
    noTemplate || !defaultTitle ? title : `${title} | ${defaultTitle}`;
  const metaDescription = description || meta.description;
  const url = pathname ? `${meta.siteUrl}${pathname}` : meta.siteUrl;
  const imageUrl = `${meta.siteUrl}${image}`;
  const twitter = meta.social?.twitter || "";

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: meta.author,
    jobTitle: "Machine Learning Researcher",
    worksFor: { "@type": "Organization", name: "Google" },
    knowsAbout: [
      "Large Language Models",
      "LLM efficiency",
      "LLM safety",
      "AutoML",
      "Neural architecture search",
      "Speech synthesis",
      "Machine Learning",
    ],
    image: `${meta.siteUrl}/avatar.png`,
    url: meta.siteUrl,
    sameAs: [
      `https://twitter.com/${twitter.replace(/^@/, "")}`,
      `https://github.com/${meta.social?.github}`,
      `https://linkedin.com/in/${meta.social?.linkedin}`,
      `https://scholar.google.com/citations?user=${meta.social?.scholar}`,
    ],
    alumniOf: { "@type": "Organization", name: "Universitat Ramon Llull" },
    description: meta.description,
  };

  return (
    <>
      <html lang="en" />
      <title>{fullTitle}</title>
      <link rel="canonical" href={url} />
      <meta name="description" content={metaDescription} />
      <meta name="author" content={meta.author} />

      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content={article ? "article" : "website"} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content={defaultTitle} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={imageAlt} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={twitter} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={imageUrl} />
      <meta name="twitter:image:alt" content={imageAlt} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      {children}
    </>
  );
}

export default Seo;
