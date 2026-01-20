import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

function SEO({
  title,
  description,
  meta = [],
  pathname = "",
  image = null,
  article = false
}) {
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
            }
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;
  const defaultTitle = site.siteMetadata?.title;
  const siteUrl = site.siteMetadata.siteUrl;
  const canonical = pathname ? `${siteUrl}${pathname}` : siteUrl;

  return (
    <Helmet
      htmlAttributes={{
        lang: "en",
      }}
      title={title}
      titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : null}
      link={[
        {
          rel: "canonical",
          href: canonical,
        },
      ]}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title || defaultTitle,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: article ? `article` : `website`,
        },
        {
          property: `og:url`,
          content: canonical,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata?.social?.twitter || ``,
        },
        {
          name: `twitter:title`,
          content: title || defaultTitle,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: `author`,
          content: site.siteMetadata.author,
        },
        {
          name: `viewport`,
          content: `width=device-width, initial-scale=1`,
        },
      ]
        .concat(
          image
            ? [
                {
                  property: "og:image",
                  content: `${siteUrl}${image}`,
                },
                {
                  name: "twitter:image",
                  content: `${siteUrl}${image}`,
                },
              ]
            : []
        )
        .concat(meta)}
    />
  );
}

export default SEO;
