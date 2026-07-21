import * as React from "react";
import ThemeModeProvider from "./src/components/ThemeModeProvider";

// Shared by gatsby-browser.js and gatsby-ssr.js so the MUI theme wraps the
// whole app in both the client runtime and the static build.
export const wrapRootElement = ({ element }) => (
  <ThemeModeProvider>{element}</ThemeModeProvider>
);
