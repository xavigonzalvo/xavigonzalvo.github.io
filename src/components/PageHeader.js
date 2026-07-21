import * as React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";

import Navigation, { DialogNavigation } from "./Navigation";
import xaviAvatar from "../images/xavi-avatar-small.png";
import DarkModeContext from "./DarkModeContext";
import { frostedSx } from "./surfaces";

function AvatarBlock() {
  return (
    <Box sx={{ display: "flex", flex: 1 }}>
      <Box
        sx={(t) => ({
          height: 40,
          width: 40,
          p: "2px",
          borderRadius: "50%",
          ...frostedSx(t),
        })}
      >
        <Link href="/" aria-label="Home" sx={{ pointerEvents: "auto" }}>
          <Avatar alt="Xavi Gonzalvo" src={xaviAvatar} sx={{ height: 36, width: 36 }} />
        </Link>
      </Box>
    </Box>
  );
}

function Menu() {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <Box sx={{ display: "flex", flex: 1, justifyContent: { xs: "flex-end", md: "center" } }}>
      <Box sx={{ pointerEvents: "auto", display: { md: "none" } }}>
        <Button
          onClick={() => setIsOpen((v) => !v)}
          endIcon={<KeyboardArrowDownIcon sx={{ color: "text.secondary" }} />}
          sx={(t) => ({
            borderRadius: 9999,
            px: 2,
            py: 1,
            fontSize: "0.875rem",
            fontWeight: 500,
            color: "text.primary",
            ...frostedSx(t),
          })}
        >
          Menu
        </Button>
        {isOpen && <DialogNavigation onClose={() => setIsOpen(false)} />}
      </Box>
      <Navigation />
    </Box>
  );
}

function DarkThemeButton({ darkMode, toggle }) {
  return (
    <Box sx={{ display: "flex", justifyContent: "flex-end", flex: { md: 1 } }}>
      <Box sx={{ pointerEvents: "auto" }}>
        <IconButton
          aria-label="Toggle dark mode"
          onClick={toggle}
          sx={(t) => ({ borderRadius: 9999, px: 1.5, py: 1, ...frostedSx(t) })}
        >
          {darkMode ? (
            <LightModeOutlinedIcon sx={{ color: "primary.main" }} />
          ) : (
            <DarkModeOutlinedIcon sx={{ color: "text.secondary" }} />
          )}
        </IconButton>
      </Box>
    </Box>
  );
}

function PageHeader() {
  const { darkMode, toggleDarkMode } = React.useContext(DarkModeContext);

  return (
    <Box
      component="header"
      sx={{ pointerEvents: "none", position: "relative", zIndex: 50 }}
    >
      <Box sx={{ pt: 3, px: { sm: 4 } }}>
        <Box sx={{ mx: "auto", maxWidth: "80rem", px: { lg: 4 } }}>
          <Box sx={{ position: "relative", px: { xs: 2, sm: 4, lg: 6 } }}>
            <Box sx={{ mx: "auto", maxWidth: { xs: "42rem", lg: "64rem" } }}>
              <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
                <AvatarBlock />
                <Menu />
                <DarkThemeButton darkMode={darkMode} toggle={toggleDarkMode} />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default PageHeader;
