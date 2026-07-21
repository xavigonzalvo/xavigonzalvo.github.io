import * as React from "react";
import Box from "@mui/material/Box";

import StructuredData from "./StructuredData";
import { zinc } from "../theme";

// Visual shell: a full-height page background with a fixed, centered "panel"
// (white / zinc-900) behind the content. Theme state now lives in
// ThemeModeProvider at the app root.
function Layout({ children }) {
  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        minHeight: "100vh",
        flexDirection: "column",
        bgcolor: "background.default",
      }}
    >
      <StructuredData />

      {/* Fixed centered panel behind everything */}
      <Box
        aria-hidden
        sx={{
          position: "fixed",
          inset: 0,
          display: "flex",
          justifyContent: "center",
          px: { sm: 4 },
        }}
      >
        <Box sx={{ display: "flex", width: "100%", maxWidth: "80rem", px: { lg: 4 } }}>
          <Box
            sx={{
              width: "100%",
              bgcolor: "background.paper",
              boxShadow: (t) =>
                `inset 1px 0 0 ${
                  t.palette.mode === "dark" ? "rgba(212,212,216,0.2)" : zinc[100]
                }, inset -1px 0 0 ${
                  t.palette.mode === "dark" ? "rgba(212,212,216,0.2)" : zinc[100]
                }`,
            }}
          />
        </Box>
      </Box>

      {/* Content sits above the panel */}
      <Box sx={{ position: "relative", zIndex: 0 }}>{children}</Box>
    </Box>
  );
}

export default Layout;
