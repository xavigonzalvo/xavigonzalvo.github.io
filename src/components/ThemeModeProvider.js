import * as React from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import DarkModeContext from "./DarkModeContext";
import getTheme from "../theme";

const STORAGE_KEY = "darkMode";

function readStored() {
  if (typeof window === "undefined") return false;
  try {
    return JSON.parse(window.localStorage.getItem(STORAGE_KEY)) || false;
  } catch {
    return false;
  }
}

// Root-level provider: owns the light/dark state, persists it, and supplies the
// MUI theme + CssBaseline. Mounted once via wrapRootElement so the choice
// survives client-side page transitions.
export default function ThemeModeProvider({ children }) {
  // SSR/first paint is always light to match the static HTML; the stored
  // preference is applied on mount to avoid a hydration mismatch.
  const [darkMode, setDarkMode] = React.useState(false);

  React.useEffect(() => {
    setDarkMode(readStored());
  }, []);

  const toggleDarkMode = React.useCallback(() => {
    setDarkMode((prev) => {
      const next = !prev;
      try {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      } catch {
        /* ignore storage failures (private mode, etc.) */
      }
      return next;
    });
  }, []);

  const theme = React.useMemo(
    () => getTheme(darkMode ? "dark" : "light"),
    [darkMode]
  );

  const ctx = React.useMemo(
    () => ({ darkMode, toggleDarkMode }),
    [darkMode, toggleDarkMode]
  );

  return (
    <DarkModeContext.Provider value={ctx}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </DarkModeContext.Provider>
  );
}
