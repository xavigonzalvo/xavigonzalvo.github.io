import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import WorkOutlineIcon from "@mui/icons-material/WorkOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

import getIcon from "./utils";

const cardSx = {
  borderRadius: "16px",
  border: 1,
  borderColor: "divider",
  p: 3,
};

const headingSx = {
  display: "flex",
  alignItems: "center",
  fontSize: "0.875rem",
  fontWeight: 600,
  color: "text.primary",
};

function MiniResume() {
  const data = useStaticQuery(graphql`
    query {
      allWorkCsv(sort: { start: DESC }) {
        nodes {
          start
          end
          company
          role
          icon
        }
      }
      allResumeCsv(sort: { year: DESC }) {
        nodes {
          year
          degree
          field
          title
        }
      }
    }
  `);

  return (
    <>
      <Box sx={cardSx}>
        <Typography component="h2" sx={headingSx}>
          <WorkOutlineIcon sx={{ fontSize: 22, color: "text.secondary" }} />
          <Box component="span" sx={{ ml: 1.5 }}>Work</Box>
        </Typography>
        <Box component="ol" sx={{ listStyle: "none", m: 0, mt: 3, p: 0, display: "flex", flexDirection: "column", gap: 2 }}>
          {data.allWorkCsv.nodes.map((row, index) => (
            <Box component="li" key={index} sx={{ display: "flex", gap: 2 }}>
              <Box
                sx={(t) => ({
                  mt: 0.5,
                  height: 40,
                  width: 40,
                  flex: "none",
                  display: "flex",
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
                <Box component="img" alt="" src={getIcon(row.icon)} sx={{ height: 28, width: 28 }} />
              </Box>
              <Box sx={{ display: "flex", flex: "auto", flexWrap: "wrap", columnGap: 1 }}>
                <Typography sx={{ width: "100%", fontSize: "0.75rem", fontWeight: 500, color: "text.primary" }}>
                  {row.company}
                </Typography>
                <Typography sx={{ fontSize: "0.75rem", color: "text.secondary" }}>{row.role}</Typography>
                <Typography sx={{ ml: "auto", fontSize: "0.75rem", color: "text.secondary" }}>
                  <time dateTime={row.start}>{row.start}</time>{" "}
                  <span aria-hidden="true">—</span>{" "}
                  <time dateTime={row.end}>{row.end}</time>
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>

      <Box sx={{ ...cardSx, mt: 3 }}>
        <Typography component="h2" sx={headingSx}>
          <SchoolOutlinedIcon sx={{ fontSize: 22, color: "text.secondary" }} />
          <Box component="span" sx={{ ml: 1.5 }}>Education</Box>
        </Typography>
        <Box component="ol" sx={{ listStyle: "none", m: 0, mt: 3, p: 0, display: "flex", flexDirection: "column", gap: 2 }}>
          {data.allResumeCsv.nodes.map((row, index) => (
            <Box component="li" key={index} sx={{ display: "flex", gap: 2 }}>
              <Box sx={{ display: "flex", flex: "auto", flexWrap: "wrap", columnGap: 1 }}>
                <Typography sx={{ width: "100%", fontSize: "0.75rem", fontWeight: 500, color: "text.primary" }}>
                  {row.degree}
                  {row.field && ` - ${row.field}`}
                </Typography>
                {row.title && (
                  <Typography sx={{ width: "100%", fontSize: "0.75rem", color: "text.secondary" }}>
                    {row.title}
                  </Typography>
                )}
                <Typography sx={{ ml: "auto", fontSize: "0.75rem", color: "text.secondary" }}>
                  <time dateTime={row.year}>{row.year}</time>
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>

      <Button
        component="a"
        href="https://drive.google.com/file/d/1F0R1AsV-4Jb8eJAZdBULHl6eYcHFazOQ/view?usp=share_link"
        endIcon={<ArrowDownwardIcon sx={{ fontSize: 16 }} />}
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
        Download CV
      </Button>
    </>
  );
}

export default MiniResume;
