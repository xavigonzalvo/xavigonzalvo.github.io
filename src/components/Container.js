import * as React from "react";
import Box from "@mui/material/Box";

// Reproduces the template's nested width pattern used across every section:
//   sm:px-8 > mx-auto max-w-7xl lg:px-8 > px-4 sm:px-8 lg:px-12 > max-w-2xl lg:max-w-5xl
// (MUI spacing unit = 8px, so px:2=16px, px:4=32px, px:6=48px.)

export function OuterContainer({ children, sx }) {
  return (
    <Box sx={{ px: { sm: 4 }, ...sx }}>
      <Box sx={{ mx: "auto", maxWidth: "80rem", px: { lg: 4 } }}>{children}</Box>
    </Box>
  );
}

export function InnerContainer({ children, sx }) {
  return (
    <Box sx={{ position: "relative", px: { xs: 2, sm: 4, lg: 6 }, ...sx }}>
      <Box sx={{ mx: "auto", maxWidth: { xs: "42rem", lg: "64rem" } }}>
        {children}
      </Box>
    </Box>
  );
}

export default function Container({ children, sx }) {
  return (
    <OuterContainer sx={sx}>
      <InnerContainer>{children}</InnerContainer>
    </OuterContainer>
  );
}
