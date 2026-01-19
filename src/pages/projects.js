import * as React from "react";
import Layout from "../components/Layout";
import Footer from "../components/Footer";
import PageHeader from "../components/PageHeader";
import ResearchProjects from "../components/ResearchProjects";

function Projects() {
  return (
    <Layout>
      <div class="relative">
        <PageHeader />
        <div style={{ height: "var(--content-offset);" }}></div>
        <main>
          <ResearchProjects />
        </main>
        <Footer />
      </div>
    </Layout>
  );
}

export default Projects;
