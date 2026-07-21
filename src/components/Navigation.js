import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

import { formatPagePath, AllSitePageFragment } from "./utils";
import { frostedSx } from "./surfaces";

const navItemSx = {
  position: "relative",
  display: "block",
  px: 1.5,
  py: 1,
  fontSize: "0.875rem",
  fontWeight: 500,
  color: "text.primary",
};

export default function Navigation() {
  const data = useStaticQuery(graphql`
    {
      ...AllSitePageFragment
    }
  `);

  return (
    <Box component="nav" sx={{ pointerEvents: "auto", display: { xs: "none", md: "block" } }}>
      <Box
        component="ul"
        sx={(t) => ({
          display: "flex",
          m: 0,
          p: 0,
          px: 1.5,
          listStyle: "none",
          borderRadius: 9999,
          ...frostedSx(t),
        })}
      >
        {data.allSitePage.nodes.map((row) => (
          <Box component="li" key={row.path}>
            <Link href={row.path} sx={navItemSx}>
              {formatPagePath(row.path)}
            </Link>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export function DialogNavigation({ onClose }) {
  const data = useStaticQuery(graphql`
    {
      ...AllSitePageFragment
    }
  `);

  return (
    <Box>
      <Box
        onClick={onClose}
        aria-hidden
        sx={(t) => ({
          position: "fixed",
          inset: 0,
          zIndex: 50,
          backdropFilter: "blur(4px)",
          bgcolor: t.palette.mode === "dark" ? "rgba(0,0,0,0.8)" : "rgba(39,39,42,0.4)",
        })}
      />
      <Box
        sx={{
          position: "fixed",
          left: 16,
          right: 16,
          top: 32,
          zIndex: 50,
          transformOrigin: "top",
          borderRadius: 6,
          p: 4,
          bgcolor: "background.paper",
          boxShadow: (t) =>
            `inset 0 0 0 1px ${
              t.palette.mode === "dark" ? "#27272a" : "rgba(24,24,27,0.05)"
            }`,
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "row-reverse", alignItems: "center", justifyContent: "space-between" }}>
          <IconButton aria-label="Close menu" onClick={onClose} size="small" sx={{ color: "text.secondary" }}>
            <CloseIcon fontSize="small" />
          </IconButton>
          <Box component="h2" sx={{ m: 0, fontSize: "0.875rem", fontWeight: 500, color: "text.secondary" }}>
            Navigation
          </Box>
        </Box>
        <Box component="nav" sx={{ mt: 3 }}>
          <Box
            component="ul"
            sx={{ m: 0, p: 0, listStyle: "none", "& > li": { borderTop: 1, borderColor: "divider" }, "& > li:first-of-type": { borderTop: 0 } }}
          >
            {data.allSitePage.nodes.map((row) => (
              <Box component="li" key={row.path}>
                <Link href={row.path} sx={{ display: "block", py: 1, fontSize: "1rem", fontWeight: 500, color: "text.primary" }}>
                  {formatPagePath(row.path)}
                </Link>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
