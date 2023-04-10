import * as React from "react";

import Borders from "../components/Borders";
import PaperList from "../components/PaperList";
import Footer from "../components/Footer";
import PageHeader from "../components/PageHeader";

function Main() {
  return (
    <div class="flex h-full flex-col bg-zinc-50 dark:bg-black">
      <Borders />
      <div class="relative">
        <PageHeader />
        <div style={{ height: "var(--content-offset);" }}></div>
        <main>
          <div class="sm:px-8 mt-16 sm:mt-32">
            <div class="mx-auto max-w-7xl lg:px-8">
              <div class="relative px-4 sm:px-8 lg:px-12">
                <div class="mx-auto max-w-2xl lg:max-w-5xl">
                  <div class="mt-16 sm:mt-20">
                    <PaperList />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default Main;
