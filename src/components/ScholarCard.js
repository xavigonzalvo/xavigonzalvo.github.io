import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import NorthEastIcon from "@mui/icons-material/NorthEast";

function Metric({ label, all, recent }) {
  return (
    <Box component="li" sx={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 2 }}>
      <Typography sx={{ fontSize: "0.75rem", color: "text.secondary" }}>{label}</Typography>
      <Box sx={{ display: "flex", alignItems: "baseline", gap: 1.5 }}>
        <Typography sx={{ fontSize: "0.875rem", fontWeight: 600, fontVariantNumeric: "tabular-nums", color: "text.primary" }}>
          {all.toLocaleString()}
        </Typography>
        {recent != null && (
          <Typography sx={{ width: 40, textAlign: "right", fontSize: "0.75rem", fontVariantNumeric: "tabular-nums", color: "text.secondary" }}>
            {recent.toLocaleString()}
          </Typography>
        )}
      </Box>
    </Box>
  );
}

function ScholarCard() {
  const { scholarStats } = useStaticQuery(graphql`
    query {
      scholarStats {
        profileUrl
        citationsAll
        citationsRecent
        hIndexAll
        hIndexRecent
        i10IndexAll
        i10IndexRecent
      }
    }
  `);

  if (!scholarStats || scholarStats.hIndexAll == null) {
    return null;
  }

  const recentSince = new Date().getFullYear() - 5;

  return (
    <Box sx={{ borderRadius: "16px", border: 1, borderColor: "divider", p: 3 }}>
      <Typography component="h2" sx={{ display: "flex", alignItems: "center", fontSize: "0.875rem", fontWeight: 600, color: "text.primary" }}>
        <Box
          component="svg"
          viewBox="0 0 24 24"
          aria-hidden="true"
          sx={{ height: 22, width: 22, flex: "none", fill: "text.secondary" }}
        >
          <path d="M12 24a7 7 0 110-14 7 7 0 010 14zm0-24L0 9.5l4.838 3.94A8 8 0 0112 9a8 8 0 017.162 4.44L24 9.5z" />
        </Box>
        <Box component="span" sx={{ ml: 1.5 }}>Google Scholar</Box>
      </Typography>

      <Box sx={{ mt: 3, display: "flex", alignItems: "baseline", justifyContent: "flex-end", gap: 1.5, fontSize: "0.65rem", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.05em", color: "text.secondary" }}>
        <span>All</span>
        <Box component="span" sx={{ width: 40, textAlign: "right" }}>Since {recentSince}</Box>
      </Box>

      <Box component="ol" sx={{ listStyle: "none", m: 0, mt: 1, p: 0, display: "flex", flexDirection: "column", gap: 1.5 }}>
        <Metric label="Citations" all={scholarStats.citationsAll} recent={scholarStats.citationsRecent} />
        <Metric label="h-index" all={scholarStats.hIndexAll} recent={scholarStats.hIndexRecent} />
        <Metric label="i10-index" all={scholarStats.i10IndexAll} recent={scholarStats.i10IndexRecent} />
      </Box>

      <Button
        component="a"
        href={scholarStats.profileUrl}
        target="_blank"
        rel="noreferrer"
        endIcon={<NorthEastIcon sx={{ fontSize: 16 }} />}
        sx={(t) => ({
          mt: 3,
          width: "100%",
          borderRadius: "8px",
          py: 1,
          fontSize: "0.875rem",
          fontWeight: 500,
          color: t.palette.mode === "dark" ? "#d4d4d8" : "#18181b",
          bgcolor: t.palette.mode === "dark" ? "rgba(39,39,42,0.5)" : "#fafafa",
          "&:hover": { bgcolor: t.palette.mode === "dark" ? "#27272a" : "#f4f4f5" },
        })}
      >
        View profile
      </Button>
    </Box>
  );
}

export default ScholarCard;
