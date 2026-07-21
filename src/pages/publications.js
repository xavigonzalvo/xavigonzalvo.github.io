import * as React from "react";
import Box from "@mui/material/Box";

import Layout from "../components/Layout";
import PaperList from "../components/PaperList";
import Footer from "../components/Footer";
import PageHeader from "../components/PageHeader";
import Content from "../components/Content";
import SEO from "../components/SEO";

function Main() {
  return (
    <Layout>
      <Box sx={{ position: "relative" }}>
        <PageHeader />
        <Box component="main">
          <Content>
            <PaperList />
          </Content>
        </Box>
        <Footer />
      </Box>
    </Layout>
  );
}

export default Main;

export const Head = () => (
  <SEO
    title="Publications"
    description="Research publications by Xavi Gonzalvo on machine learning, LLMs, AutoML, speech synthesis, and neural architecture search."
    pathname="/publications/"
  />
);
