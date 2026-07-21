import { createTheme } from "@mui/material/styles";

// Tailwind "zinc" grey scale + "teal" accent, kept so the MUI build matches
// the original design. Exposed on the palette as `zinc` / `accent` so every
// component references one source of truth.
export const zinc = {
  50: "#fafafa",
  100: "#f4f4f5",
  200: "#e4e4e7",
  300: "#d4d4d8",
  400: "#a1a1aa",
  500: "#71717a",
  600: "#52525b",
  700: "#3f3f46",
  800: "#27272a",
  900: "#18181b",
  950: "#09090b",
  black: "#000000",
  white: "#ffffff",
};

const teal = {
  400: "#2dd4bf",
  500: "#14b8a6",
  600: "#0d9488",
};

const fontFamily = [
  "ui-sans-serif",
  "system-ui",
  "-apple-system",
  "BlinkMacSystemFont",
  '"Segoe UI"',
  "Roboto",
  '"Helvetica Neue"',
  "Arial",
  '"Noto Sans"',
  "sans-serif",
  '"Apple Color Emoji"',
  '"Segoe UI Emoji"',
  '"Segoe UI Symbol"',
  '"Noto Color Emoji"',
].join(",");

export function getTheme(mode) {
  const isDark = mode === "dark";

  return createTheme({
    palette: {
      mode,
      primary: { main: teal[500] },
      // Custom tokens available as theme.palette.zinc[...] / theme.palette.accent
      zinc,
      accent: { main: teal[500], hover: isDark ? teal[400] : teal[500] },
      background: {
        // Outer page vs. the centered content "panel" (see Layout).
        default: isDark ? zinc.black : zinc[50],
        paper: isDark ? zinc[900] : zinc.white,
      },
      text: {
        primary: isDark ? zinc[100] : zinc[800],
        secondary: isDark ? zinc[400] : zinc[600],
      },
      divider: isDark ? "rgba(63,63,70,0.4)" : zinc[100],
    },
    // Match Tailwind's breakpoints so the ported responsive rules line up.
    breakpoints: {
      values: { xs: 0, sm: 640, md: 768, lg: 1024, xl: 1280 },
    },
    shape: { borderRadius: 12 },
    typography: {
      fontFamily,
      h1: { fontWeight: 700, letterSpacing: "-0.02em" },
      h2: { fontWeight: 700, letterSpacing: "-0.02em" },
      button: { textTransform: "none", fontWeight: 500 },
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: { WebkitFontSmoothing: "antialiased" },
        },
      },
      MuiLink: {
        defaultProps: { underline: "none" },
        styleOverrides: {
          root: ({ theme }) => ({
            fontWeight: 600,
            color: "inherit",
            transition: "color 150ms",
            "&:hover": { color: theme.palette.accent.hover },
          }),
        },
      },
    },
  });
}

export default getTheme;
