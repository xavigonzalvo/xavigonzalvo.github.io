import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

import { formatPagePath } from "./utils";
import { OuterContainer } from "./Container";

function Footer() {
  const data = useStaticQuery(graphql`
    {
      ...AllSitePageFragment
    }
  `);

  return (
    <Box component="footer" sx={{ mt: 16 }}>
      <OuterContainer>
        <Box sx={{ borderTop: 1, borderColor: "divider", pb: 8, pt: 5 }}>
          <Box sx={{ position: "relative", px: { xs: 2, sm: 4, lg: 6 } }}>
            <Box sx={{ mx: "auto", maxWidth: { xs: "42rem", lg: "64rem" } }}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 3,
                }}
              >
                <Box sx={{ display: "flex", gap: 3 }}>
                  {data.allSitePage.nodes.map((row) => (
                    <Link
                      key={row.path}
                      href={row.path}
                      sx={{ fontSize: "0.875rem", fontWeight: 500, color: "text.primary" }}
                    >
                      {formatPagePath(row.path)}
                    </Link>
                  ))}
                </Box>
                <Typography sx={{ fontSize: "0.875rem", color: "text.secondary" }}>
                  © {new Date().getFullYear()} Xavi Gonzalvo
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </OuterContainer>
    </Box>
  );
}

export default Footer;
