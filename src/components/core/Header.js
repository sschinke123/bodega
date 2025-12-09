import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Switch,
  Box,
  IconButton,
  Drawer,
  Stack,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import LanguageSwitcher from "../shared/LanguageSwitcher";

const Header = ({ mode, setMode }) => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  const toggleDrawer = (value) => () => {
    setOpen(value);
  };

  const navLinks = (
    <Stack spacing={2} sx={{ p: 2 }}>
      <Button component={Link} to="/" onClick={toggleDrawer(false)}>
        {t("nav.home")}
      </Button>
      <Button component={Link} to="/history" onClick={toggleDrawer(false)}>
        {t("nav.history")}
      </Button>
      <Button component={Link} to="/pricing" onClick={toggleDrawer(false)}>
        {t("nav.pricing")}
      </Button>
      <Button component={Link} to="/contact" onClick={toggleDrawer(false)}>
        {t("nav.contact")}
      </Button>

      <LanguageSwitcher />

      <Switch
        checked={mode === "dark"}
        onChange={() =>
          setMode(mode === "light" ? "dark" : "light")
        }
      />
    </Stack>
  );

  return (
    <>
      <AppBar position="sticky">
        <Toolbar>
          
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Bodega Mendez y García
          </Typography>

          
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
            <Button color="inherit" component={Link} to="/">
              {t("nav.home")}
            </Button>
            <Button color="inherit" component={Link} to="/history">
              {t("nav.history")}
            </Button>
            <Button color="inherit" component={Link} to="/pricing">
              {t("nav.pricing")}
            </Button>
            <Button color="inherit" component={Link} to="/contact">
              {t("nav.contact")}
            </Button>

            <LanguageSwitcher />

            <Switch
              checked={mode === "dark"}
              onChange={() =>
                setMode(mode === "light" ? "dark" : "light")
              }
            />
          </Box>

          <IconButton
            color="inherit"
            edge="end"
            sx={{ display: { md: "none" } }}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      
      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        {navLinks}
      </Drawer>
    </>
  );
};

export default Header;

