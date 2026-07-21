import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import LinkIcon from "@mui/icons-material/Link";

import getIcon from "./utils";

function ProjectCard({ name, description, url, icon }) {
  let mainUrl = null;
  if (url) {
    mainUrl = new URL(url);
  }

  return (
    <Box
      component="li"
      sx={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        "&:hover .project-hover": { opacity: 1, transform: "scale(1)" },
        "&:hover .project-host": { color: "primary.main" },
      }}
    >
      <Box
        sx={(t) => ({
          position: "relative",
          zIndex: 10,
          display: "flex",
          height: 48,
          width: 48,
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "50%",
          bgcolor: t.palette.mode === "dark" ? "#27272a" : "#fff",
          boxShadow:
            t.palette.mode === "dark"
              ? "inset 0 0 0 1px rgba(63,63,70,0.5)"
              : "0 4px 6px -1px rgba(39,39,42,0.05), inset 0 0 0 1px rgba(24,24,27,0.05)",
        })}
      >
        <Box component="img" alt="" src={getIcon(icon)} sx={{ height: 32, width: 32 }} loading="lazy" />
      </Box>

      <Typography
        component="h2"
        sx={{ position: "relative", mt: 3, fontSize: "1rem", fontWeight: 600, color: "text.primary" }}
      >
        <Box
          className="project-hover"
          sx={{
            position: "absolute",
            left: -16,
            right: -16,
            top: -24,
            bottom: -24,
            zIndex: 0,
            transform: "scale(0.95)",
            opacity: 0,
            transition: "all 150ms",
            bgcolor: (t) => (t.palette.mode === "dark" ? "rgba(39,39,42,0.5)" : "#fafafa"),
            borderRadius: { sm: "16px" },
          }}
        />
        {url ? (
          <Link href={url} sx={{ position: "relative", zIndex: 10, color: "inherit" }}>
            {name}
          </Link>
        ) : (
          <Box component="span" sx={{ position: "relative", zIndex: 10 }}>{name}</Box>
        )}
      </Typography>

      <Typography sx={{ position: "relative", zIndex: 10, mt: 1, fontSize: "0.875rem", color: "text.secondary" }}>
        {description}
      </Typography>

      {mainUrl && (
        <Typography
          className="project-host"
          sx={{
            position: "relative",
            zIndex: 10,
            mt: 3,
            display: "flex",
            alignItems: "center",
            fontSize: "0.875rem",
            fontWeight: 500,
            color: "text.secondary",
            transition: "color 150ms",
          }}
        >
          <LinkIcon sx={{ fontSize: 20, mr: 1 }} />
          {mainUrl.hostname}
        </Typography>
      )}
    </Box>
  );
}

export default ProjectCard;
