import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Link from "@mui/material/Link";
import PictureAsPdfOutlinedIcon from "@mui/icons-material/PictureAsPdfOutlined";

const PaperList = () => {
  const data = useStaticQuery(graphql`
    query {
      allPapersCsv(sort: { Year: DESC }) {
        nodes {
          Year
          Authors
          Title
          URL
          Conference
        }
      }
    }
  `);

  return (
    <>
      <Typography
        variant="h1"
        sx={{
          fontSize: { xs: "2.25rem", sm: "3rem" },
          fontWeight: 700,
          letterSpacing: "-0.02em",
          lineHeight: 1.1,
          color: "text.primary",
        }}
      >
        Publications
      </Typography>

      <Box component="ul" sx={{ listStyle: "none", m: 0, mt: { xs: 2, sm: 3 }, p: 0 }}>
        {data.allPapersCsv.nodes.map((row, index) => {
          const venue =
            row.Conference ||
            (row.URL && row.URL.includes("arxiv.org") ? "arXiv" : null);
          return (
            <Box
              component="li"
              key={index}
              sx={{
                display: "flex",
                gap: 1,
                p: 1,
                borderRadius: 1.5,
                transition: "background-color 150ms",
                "&:hover": {
                  bgcolor: (t) =>
                    t.palette.mode === "dark" ? "rgba(39,39,42,0.5)" : "#f4f4f5",
                },
              }}
            >
              <Typography sx={{ fontSize: "0.875rem", color: "text.secondary", minWidth: "3ch" }}>
                {row.Year}
              </Typography>
              <Box>
                <Typography
                  component="div"
                  sx={{ fontSize: "0.875rem", fontWeight: 500, color: "text.primary" }}
                >
                  {row.URL ? (
                    <Link
                      href={row.URL}
                      sx={{ display: "inline-flex", alignItems: "center", color: "inherit" }}
                    >
                      <PictureAsPdfOutlinedIcon sx={{ fontSize: 18, mr: 1 }} />
                      {row.Title}
                    </Link>
                  ) : (
                    <Box component="span" sx={{ color: "text.secondary" }}>
                      {row.Title}
                    </Box>
                  )}
                </Typography>
                <Typography sx={{ fontSize: "0.75rem", color: "text.secondary" }}>
                  {row.Authors}
                </Typography>
                {venue && (
                  <Chip
                    label={venue}
                    size="small"
                    sx={{
                      mt: 0.5,
                      height: "auto",
                      fontSize: "0.75rem",
                      fontWeight: 500,
                      borderRadius: 1.5,
                      color: (t) => (t.palette.mode === "dark" ? "#d4d4d8" : "#3f3f46"),
                      bgcolor: (t) => (t.palette.mode === "dark" ? "#27272a" : "#f4f4f5"),
                      "& .MuiChip-label": { px: 1, py: 0.25 },
                    }}
                  />
                )}
              </Box>
            </Box>
          );
        })}
      </Box>
    </>
  );
};

export default PaperList;
