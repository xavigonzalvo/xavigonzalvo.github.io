import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

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
    return <Typography>Markdown file not found.</Typography>;
  }

  const heading = isH1 ? (
    <Typography
      variant="h1"
      sx={{
        fontSize: { xs: "2.25rem", sm: "3rem" },
        fontWeight: 700,
        letterSpacing: "-0.02em",
        lineHeight: 1.1,
        color: "text.primary",
      }}
    >
      {content.node.frontmatter.title}
    </Typography>
  ) : (
    <Typography
      variant="h2"
      sx={{ fontSize: "1rem", fontWeight: 700, letterSpacing: "-0.02em", color: "text.primary" }}
    >
      {content.node.frontmatter.title}
    </Typography>
  );

  const paragraphs = content.node.html.split(/\r?\n/);
  return (
    <Box component="section">
      {heading}
      {paragraphs.map((paragraph, index) => (
        <Box
          key={index}
          sx={{ mt: 3, fontSize: "1rem", color: "text.secondary", "& a": { color: "inherit" } }}
          dangerouslySetInnerHTML={{ __html: paragraph }}
        />
      ))}
    </Box>
  );
};

export default MarkdownContent;
