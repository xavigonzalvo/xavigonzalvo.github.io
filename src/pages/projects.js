import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Borders from "../components/Borders";
import Footer from "../components/Footer";
import PageHeader from "../components/PageHeader";
import ProjectCard from "../components/ProjectCard";
import Content from "../components/Content";

function ProjectList() {
  const data = useStaticQuery(graphql`
    query {
      allProjectsCsv {
        nodes {
          project
          company
          role
          icon
          description
          url
        }
      }
    }
  `);

  return (
    <div class="mt-16 sm:mt-20">
      <ul
        role="list"
        class="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
      >
        {data.allProjectsCsv.nodes.map((row) => (
          <ProjectCard
            name={row.project}
            description={row.description}
            url={row.url}
            icon={row.icon}
          />
        ))}
      </ul>
    </div>
  );
}

function Projects() {
  return (
    <Borders>
      <div class="relative">
        <PageHeader />
        <div style={{ height: "var(--content-offset);" }}></div>
        <main>
          <Content>
            <header class="max-w-2xl">
              <h1 class="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
                Interesting projects
              </h1>
              <p class="mt-6 text-base text-zinc-600 dark:text-zinc-400">
                These are some of the projects I've worked during my career.
              </p>
            </header>
            <ProjectList />
          </Content>
        </main>
        <Footer />
      </div>
    </Borders>
  );
}

export default Projects;
