import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";

function ResearchProjectCard({ title, summary, papers }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        p: 3,
        borderRadius: "16px",
        border: 1,
        borderColor: "divider",
        bgcolor: (t) => (t.palette.mode === "dark" ? "rgba(39,39,42,0.5)" : "#fff"),
        boxShadow: "0 1px 2px 0 rgba(0,0,0,0.05)",
        transition: "box-shadow 150ms",
        "&:hover": { boxShadow: "0 4px 6px -1px rgba(0,0,0,0.1)" },
      }}
    >
      <Typography component="h3" sx={{ fontSize: "1.25rem", fontWeight: 600, color: "text.primary", mb: 1.5 }}>
        {title}
      </Typography>
      <Typography sx={{ fontSize: "0.875rem", color: "text.secondary", mb: 2 }}>
        {summary}
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
        {papers.map((paper, idx) => (
          <Box key={idx} sx={{ display: "flex", alignItems: "flex-start", gap: 1.5 }}>
            <DescriptionOutlinedIcon sx={{ flexShrink: 0, mt: 0.25, fontSize: 20, color: "primary.main" }} />
            <Box sx={{ flex: 1, minWidth: 0 }}>
              {paper.url ? (
                <Link
                  href={paper.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ fontSize: "0.875rem", fontWeight: 500, color: "text.primary" }}
                >
                  {paper.title}
                </Link>
              ) : (
                <Typography component="span" sx={{ fontSize: "0.875rem", fontWeight: 500, color: "text.primary" }}>
                  {paper.title}
                </Typography>
              )}
              <Typography sx={{ fontSize: "0.75rem", color: "text.secondary", mt: 0.5 }}>
                {paper.description}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default ResearchProjectCard;
