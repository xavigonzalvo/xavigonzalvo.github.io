import * as React from "react";
import Box from "@mui/material/Box";

import Layout from "../components/Layout";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import MarkdownContent from "../components/MarkdownContent";
import MiniResume from "../components/MiniResume";
import Seo from "../components/Seo";

function About() {
  return (
    <Layout>
      <Box sx={{ position: "relative" }}>
        <PageHeader />
        <Box component="main">
          <Box sx={{ mt: { xs: 8, sm: 12 }, px: { sm: 4 } }}>
            <Box sx={{ mx: "auto", maxWidth: "80rem", px: { lg: 4 } }}>
              <Box sx={{ position: "relative", px: { xs: 2, sm: 4, lg: 6 } }}>
                <Box sx={{ mx: "auto", maxWidth: { xs: "42rem", lg: "64rem" } }}>
                  <Box
                    sx={{
                      display: "grid",
                      gridTemplateColumns: { xs: "1fr", lg: "1fr 1fr" },
                      rowGap: 8,
                      columnGap: 0,
                    }}
                  >
                    <Box sx={{ display: "flex", flexDirection: "column", gap: 6 }}>
                      <MarkdownContent isH1={true} fileName="intro.md" />
                      <MarkdownContent isH1={false} fileName="about.md" />
                    </Box>
                    <Box sx={{ pl: { lg: 8, xl: 12 } }}>
                      <MiniResume />
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        <Footer />
      </Box>
    </Layout>
  );
}

export default About;

export const Head = () => (
  <Seo
    title="About"
    description="About Xavi Gonzalvo: career from La Salle and Phonetic Arts to leading research teams at Google, plus education and a downloadable CV."
    pathname="/about/"
  />
);
