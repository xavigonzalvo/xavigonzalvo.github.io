import * as React from "react";

import Borders from "../components/Borders";
import PaperList from "../components/PaperList";
import Footer from "../components/Footer";
import PageHeader from "../components/PageHeader";
import Content from "../components/Content";

function Main() {
  return (
    <Borders>
      <div class="relative">
        <PageHeader />
        <div style={{ height: "var(--content-offset);" }}></div>
        <main>
          <Content>
            <PaperList />
          </Content>
        </main>
        <Footer />
      </div>
    </Borders>
  );
}

export default Main;
