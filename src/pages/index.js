import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import IconButton from "@mui/material/IconButton";
import Divider from "@mui/material/Divider";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import NorthEastIcon from "@mui/icons-material/NorthEast";

import Layout from "../components/Layout";
import PageHeader from "../components/PageHeader";
import Seo from "../components/Seo";

const CV_URL =
  "https://drive.google.com/file/d/1F0R1AsV-4Jb8eJAZdBULHl6eYcHFazOQ/view?usp=share_link";
const SCHOLAR_PROFILE =
  "https://scholar.google.com/citations?hl=en&user=nThSlSwAAAAJ";

const FOCUS = [
  "LLM efficiency",
  "LLM safety",
  "AutoML",
  "Neural architecture search",
  "Speech synthesis",
];

const HIGHLIGHTS = [
  {
    title: "LLMs",
    text: "Leading work on LLM efficiency and safety: learning without training, in context learning dynamics, and long context optimization.",
  },
  {
    title: "AutoML",
    text: "Created AdaNet and scaled it into a framework for automated neural architecture and ensemble search.",
  },
  {
    title: "Speech synthesis",
    text: "Built high quality text to speech: hybrid HMM and unit selection systems shipped in production at Google.",
  },
];

const SOCIALS = [
  {
    label: "GitHub",
    href: "https://github.com/xavigonzalvo",
    path: "M12 2C6.475 2 2 6.588 2 12.253c0 4.537 2.862 8.369 6.838 9.727.5.09.687-.218.687-.487 0-.243-.013-1.05-.013-1.91C7 20.059 6.35 18.957 6.15 18.38c-.113-.295-.6-1.205-1.025-1.448-.35-.192-.85-.667-.013-.68.788-.012 1.35.744 1.538 1.051.9 1.551 2.338 1.116 2.912.846.088-.666.35-1.115.638-1.371-2.225-.256-4.55-1.14-4.55-5.062 0-1.115.387-2.038 1.025-2.756-.1-.256-.45-1.307.1-2.717 0 0 .837-.269 2.75 1.051.8-.23 1.65-.346 2.5-.346.85 0 1.7.115 2.5.346 1.912-1.333 2.75-1.05 2.75-1.05.55 1.409.2 2.46.1 2.716.637.718 1.025 1.628 1.025 2.756 0 3.934-2.337 4.806-4.562 5.062.362.32.675.936.675 1.897 0 1.371-.013 2.473-.013 2.82 0 .268.188.589.688.486a10.039 10.039 0 0 0 4.932-3.74A10.447 10.447 0 0 0 22 12.253C22 6.588 17.525 2 12 2Z",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/xavigonzalvo",
    path: "M18.335 18.339H15.67v-4.177c0-.996-.02-2.278-1.39-2.278-1.389 0-1.601 1.084-1.601 2.205v4.25h-2.666V9.75h2.56v1.17h.035c.358-.674 1.228-1.387 2.528-1.387 2.7 0 3.2 1.778 3.2 4.091v4.715zM7.003 8.575a1.546 1.546 0 01-1.548-1.549 1.548 1.548 0 111.547 1.549zm1.336 9.764H5.666V9.75H8.34v8.589zM19.67 3H4.329C3.593 3 3 3.58 3 4.297v15.406C3 20.42 3.594 21 4.328 21h15.338C20.4 21 21 20.42 21 19.703V4.297C21 3.58 20.4 3 19.666 3h.003z",
  },
  {
    label: "Twitter",
    href: "https://twitter.com/xavigonzalvo",
    path: "M20.055 7.983c.011.174.011.347.011.523 0 5.338-3.92 11.494-11.09 11.494v-.003A10.755 10.755 0 0 1 3 18.186c.308.038.618.057.928.058a7.655 7.655 0 0 0 4.841-1.733c-1.668-.032-3.13-1.16-3.642-2.805a3.753 3.753 0 0 0 1.76-.07C5.07 13.256 3.76 11.6 3.76 9.676v-.05a3.77 3.77 0 0 0 1.77.505C3.816 8.945 3.288 6.583 4.322 4.737c1.98 2.524 4.9 4.058 8.034 4.22a4.137 4.137 0 0 1 1.128-3.86A3.807 3.807 0 0 1 19 5.274a7.657 7.657 0 0 0 2.475-.98c-.29.934-.9 1.729-1.713 2.233A7.54 7.54 0 0 0 22 5.89a8.084 8.084 0 0 1-1.945 2.093Z",
  },
  {
    label: "Google Scholar",
    href: SCHOLAR_PROFILE,
    path: "M12 24a7 7 0 110-14 7 7 0 010 14zm0-24L0 9.5l4.838 3.94A8 8 0 0112 9a8 8 0 017.162 4.44L24 9.5z",
  },
];

function Metric({ value, label }) {
  return (
    <Box>
      <Typography sx={{ fontSize: "1.15rem", fontWeight: 700, lineHeight: 1.1, color: "text.primary", fontVariantNumeric: "tabular-nums" }}>
        {value.toLocaleString()}
      </Typography>
      <Typography sx={{ mt: 0.25, fontSize: "0.68rem", color: "text.secondary" }}>
        {label}
      </Typography>
    </Box>
  );
}

function FactRow({ label, children }) {
  return (
    <Box sx={{ display: "flex", gap: 1.5, alignItems: "baseline" }}>
      <Typography sx={{ flex: "none", width: 42, fontSize: "0.7rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em", color: "text.secondary" }}>
        {label}
      </Typography>
      <Typography sx={{ fontSize: "0.8rem", color: "text.primary" }}>{children}</Typography>
    </Box>
  );
}

function CredibilityCard({ scholar }) {
  const hasStats = scholar && scholar.hIndexAll != null;
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "26rem",
        borderRadius: "20px",
        border: 1,
        borderColor: "divider",
        bgcolor: (t) => (t.palette.mode === "dark" ? "rgba(39,39,42,0.4)" : "background.paper"),
        boxShadow: (t) =>
          t.palette.mode === "dark"
            ? "0 1px 2px rgba(0,0,0,0.4)"
            : "0 10px 30px -12px rgba(39,39,42,0.15)",
        p: { xs: 3, sm: 4 },
      }}
    >
      <Typography sx={{ fontSize: "0.7rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em", color: "text.secondary" }}>
        Research focus
      </Typography>
      <Box sx={{ mt: 1.5, display: "flex", flexWrap: "wrap", gap: 0.75 }}>
        {FOCUS.map((f) => (
          <Chip
            key={f}
            label={f}
            size="small"
            sx={{
              height: "auto",
              fontSize: "0.72rem",
              fontWeight: 500,
              borderRadius: "8px",
              color: (t) => (t.palette.mode === "dark" ? "#d4d4d8" : "#3f3f46"),
              bgcolor: (t) => (t.palette.mode === "dark" ? "#27272a" : "#f4f4f5"),
              "& .MuiChip-label": { px: 1, py: 0.4 },
            }}
          />
        ))}
      </Box>

      <Divider sx={{ my: 2.5 }} />
      <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
        <FactRow label="Now">Research Scientist and team lead, Google, New York</FactRow>
        <FactRow label="PhD">Electrical Engineering, Universitat Ramon Llull (2010)</FactRow>
      </Box>

      {hasStats && (
        <>
          <Divider sx={{ my: 2.5 }} />
          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <Typography sx={{ fontSize: "0.7rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em", color: "text.secondary" }}>
              Google Scholar
            </Typography>
            <Link
              href={scholar.profileUrl}
              target="_blank"
              rel="noreferrer"
              sx={{ display: "inline-flex", alignItems: "center", fontSize: "0.72rem", color: "text.secondary" }}
            >
              Profile <NorthEastIcon sx={{ fontSize: 12, ml: 0.4 }} />
            </Link>
          </Box>
          <Box sx={{ mt: 1.5, display: "flex", gap: 4 }}>
            <Metric value={scholar.citationsAll} label="Citations" />
            <Metric value={scholar.hIndexAll} label="h-index" />
            <Metric value={scholar.i10IndexAll} label="i10-index" />
          </Box>
        </>
      )}
    </Box>
  );
}

const IndexPage = () => {
  const { scholarStats } = useStaticQuery(graphql`
    query {
      scholarStats {
        profileUrl
        citationsAll
        hIndexAll
        i10IndexAll
      }
    }
  `);

  return (
    <Layout>
      <Box sx={{ position: "relative", zIndex: 1, minHeight: "100vh", display: "flex", flexDirection: "column" }}>
        <PageHeader />

        <Box
          component="main"
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            py: { xs: 6, md: 6 },
          }}
        >
          <Box sx={{ width: "100%", maxWidth: "64rem", mx: "auto", px: { xs: 3, sm: 5 } }}>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr", md: "1.1fr 0.9fr" },
                alignItems: "center",
                gap: { xs: 5, md: 8 },
              }}
            >
            {/* Identity */}
            <Box>
              <Typography
                component="h1"
                sx={{ fontSize: { xs: "2.25rem", sm: "3rem" }, fontWeight: 700, letterSpacing: "-0.025em", lineHeight: 1.05, color: "text.primary" }}
              >
                Xavi Gonzalvo
              </Typography>
              <Typography sx={{ mt: 1, fontSize: { xs: "1rem", sm: "1.125rem" }, fontWeight: 500, color: "text.secondary" }}>
                Electrical Engineer & Machine Learning Researcher
              </Typography>
              <Typography sx={{ mt: 3, fontSize: "0.95rem", lineHeight: 1.65, color: "text.secondary", maxWidth: "34rem" }}>
                Research Scientist at Google in New York, where I lead a team working
                on{" "}
                <Box component="span" sx={{ fontWeight: 600, color: "text.primary" }}>
                  LLM efficiency and LLM safety
                </Box>
                . Previously I led Google's AutoML team, working on machine learning
                efficiency, ensembles, multi source adaptation, and neural architecture
                search.
              </Typography>

              <Box sx={{ mt: 4, display: "flex", flexWrap: "wrap", alignItems: "center", gap: 1.5 }}>
                <Button
                  component="a"
                  href="/publications/"
                  variant="contained"
                  disableElevation
                  sx={{ borderRadius: "10px", px: 2.5, py: 1, fontSize: "0.875rem", color: "#fff" }}
                >
                  View publications
                </Button>
                <Button
                  component="a"
                  href={CV_URL}
                  target="_blank"
                  rel="noreferrer"
                  variant="outlined"
                  endIcon={<ArrowDownwardIcon sx={{ fontSize: 16 }} />}
                  sx={{
                    borderRadius: "10px",
                    px: 2.5,
                    py: 1,
                    fontSize: "0.875rem",
                    color: "text.primary",
                    borderColor: (t) => (t.palette.mode === "dark" ? "rgba(255,255,255,0.35)" : "#a1a1aa"),
                    "&:hover": { borderColor: "text.primary", bgcolor: "transparent" },
                  }}
                >
                  Download CV
                </Button>

                <Box sx={{ display: "flex", gap: 0.5, ml: { sm: 1 } }}>
                  {SOCIALS.map((s) => (
                    <IconButton
                      key={s.label}
                      component="a"
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={s.label}
                      size="small"
                      sx={{ "&:hover svg": { fill: (t) => (t.palette.mode === "dark" ? "#d4d4d8" : "#52525b") } }}
                    >
                      <Box component="svg" viewBox="0 0 24 24" aria-hidden="true" sx={{ height: 20, width: 20, fill: (t) => t.palette.text.secondary, transition: "fill 150ms" }}>
                        <path d={s.path} />
                      </Box>
                    </IconButton>
                  ))}
                </Box>
              </Box>
            </Box>

            {/* Credibility card */}
            <Box sx={{ display: "flex", justifyContent: { xs: "flex-start", md: "flex-end" } }}>
              <CredibilityCard scholar={scholarStats} />
            </Box>
            </Box>

            {/* Selected work */}
            <Box sx={{ mt: { xs: 6, md: 8 } }}>
              <Typography sx={{ fontSize: "0.7rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em", color: "text.secondary" }}>
                Selected work
              </Typography>
              <Box sx={{ mt: 2, display: "grid", gridTemplateColumns: { xs: "1fr", sm: "repeat(3, 1fr)" }, gap: 2 }}>
                {HIGHLIGHTS.map((h) => (
                  <Box
                    key={h.title}
                    sx={{
                      p: 2.5,
                      borderRadius: "14px",
                      border: 1,
                      borderColor: "divider",
                      transition: "border-color 150ms",
                      "&:hover": {
                        borderColor: (t) =>
                          t.palette.mode === "dark" ? "rgba(255,255,255,0.25)" : "#d4d4d8",
                      },
                    }}
                  >
                    <Typography sx={{ fontSize: "0.9rem", fontWeight: 700, color: "text.primary" }}>
                      {h.title}
                    </Typography>
                    <Typography sx={{ mt: 0.75, fontSize: "0.8rem", lineHeight: 1.5, color: "text.secondary" }}>
                      {h.text}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => (
  <Seo
    title="Xavi Gonzalvo · Machine Learning Researcher"
    description="Xavi Gonzalvo, Research Scientist at Google in New York, leading a team on LLM efficiency and LLM safety. Previously led Google's AutoML team. PhD in Electrical Engineering."
    pathname="/"
    noTemplate
  />
);
