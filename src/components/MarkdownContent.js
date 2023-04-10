import React from "react";
import { graphql, useStaticQuery } from "gatsby";

const MarkdownContent = ({ isH1, fileName }) => {
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

  const h1 = (
    <h1 class="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
      {content.node.frontmatter.title}
    </h1>
  );

  const h2 = (
    <h2 class="text-md font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-md">
      {content.node.frontmatter.title}
    </h2>
  );

  const paragraphs = content.node.html.split(/\r?\n/);
  return (
    <section>
      {isH1 ? h1 : h2}
      {paragraphs.map((paragraph, index) => (
        <div
          key={index}
          className="mt-6 text-base text-zinc-600 dark:text-zinc-400"
          dangerouslySetInnerHTML={{ __html: paragraph }}
        />
      ))}
    </section>
  );
};

export default MarkdownContent;
