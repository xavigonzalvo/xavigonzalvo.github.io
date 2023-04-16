import * as React from "react";
import { Helmet } from "react-helmet";

import DarkModeContext from "./DarkModeContext";

function Layout({ children }) {
  const [darkMode, setDarkMode] = React.useState(
    () => JSON.parse(localStorage.getItem("darkMode")) || false
  );

  const saveDarkMode = (isDarkModeEnabled) => {
    localStorage.setItem("darkMode", JSON.stringify(isDarkModeEnabled));
  };

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    saveDarkMode(newDarkMode);
  };

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      <Helmet>
        <html className={darkMode ? "dark" : ""} />
      </Helmet>
      <div class="flex h-full flex-col bg-zinc-50 dark:bg-black">
        <div class="fixed inset-0 flex justify-center sm:px-8">
          <div class="flex w-full max-w-7xl lg:px-8">
            <div class="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20"></div>
          </div>
        </div>
        {children}
      </div>
    </DarkModeContext.Provider>
  );
}

export default Layout;
