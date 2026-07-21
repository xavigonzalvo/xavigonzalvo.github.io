import * as React from "react";
import Box from "@mui/material/Box";

import Container from "./Container";

function Content({ children }) {
  return (
    <Container sx={{ mt: { xs: 8, sm: 16 } }}>
      <Box sx={{ mt: { xs: 8, sm: 10 } }}>{children}</Box>
    </Container>
  );
}

export default Content;
