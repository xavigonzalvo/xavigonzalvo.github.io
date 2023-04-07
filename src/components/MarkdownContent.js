// src/components/MarkdownContent.js
import React from "react";
import { graphql, useStaticQuery } from "gatsby";

const MarkdownContent = ({ fileName }) => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
            }
            html
            fileAbsolutePath
          }
        }
      }
    }
  `);

  const content = data.allMarkdownRemark.edges.find((edge) => {
    const pathArray = edge.node.fileAbsolutePath.split("/");
    const markdownFileName = pathArray[pathArray.length - 1];
    return markdownFileName === fileName;
  });

  if (!content) {
    return <p>Markdown file not found.</p>;
  }

  return (
    <section>
      <h2>{content.node.frontmatter.title}</h2>
      <div dangerouslySetInnerHTML={{ __html: content.node.html }} />
    </section>
  );
};

export default MarkdownContent;
