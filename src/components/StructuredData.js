import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

function StructuredData() {
  const { site } = useStaticQuery(
    graphql`
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
    `
  );

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.siteMetadata.author,
    jobTitle: "Machine Learning Researcher",
    worksFor: {
      "@type": "Organization",
      name: "Google",
    },
    url: site.siteMetadata.siteUrl,
    sameAs: [
      `https://twitter.com/${site.siteMetadata.social.twitter}`,
      `https://github.com/${site.siteMetadata.social.github}`,
      `https://linkedin.com/in/${site.siteMetadata.social.linkedin}`,
      `https://scholar.google.com/citations?user=${site.siteMetadata.social.scholar}`,
    ],
    alumniOf: {
      "@type": "Organization",
      name: "Universitat Ramon Llull",
    },
    description: site.siteMetadata.description,
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(personSchema)}
      </script>
    </Helmet>
  );
}

export default StructuredData;
