import * as React from "react";
import Box from "@mui/material/Box";
import Layout from "../components/Layout";
import Footer from "../components/Footer";
import PageHeader from "../components/PageHeader";
import ResearchProjects from "../components/ResearchProjects";
import SEO from "../components/SEO";

function Projects() {
  return (
    <Layout>
      <Box sx={{ position: "relative" }}>
        <PageHeader />
        <Box component="main">
          <ResearchProjects />
        </Box>
        <Footer />
      </Box>
    </Layout>
  );
}

export default Projects;

export const Head = () => (
  <SEO
    title="Projects"
    description="Research and development projects in machine learning, including work on AutoML, LLMs, and speech synthesis technologies."
    pathname="/projects/"
  />
);
