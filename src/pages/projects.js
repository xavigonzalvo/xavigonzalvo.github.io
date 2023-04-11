import * as React from "react";

import Borders from "../components/Borders";
import Footer from "../components/Footer";
import PageHeader from "../components/PageHeader";
import ProjectCard from "../components/ProjectCard";

function Content({ children }) {
  return (
    <>
      <div class="sm:px-8 mt-16 sm:mt-32">
        <div class="mx-auto max-w-7xl lg:px-8">
          <div class="relative px-4 sm:px-8 lg:px-12">
            <div class="mx-auto max-w-2xl lg:max-w-5xl">
              <div class="mt-16 sm:mt-20">{children}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function ProjectList() {
  return (
    <div class="mt-16 sm:mt-20">
      <ul
        role="list"
        class="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
      >
        <ProjectCard />
      </ul>
    </div>
  );
}

function Projects() {
  return (
    <div class="flex h-full flex-col bg-zinc-50 dark:bg-black">
      <Borders />
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
                These are some of the interesting projects I've worked during my
                career.
              </p>
            </header>
            <ProjectList />
          </Content>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default Projects;
