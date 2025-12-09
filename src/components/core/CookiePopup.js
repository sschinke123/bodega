import { Box, Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const CookiePopup = () => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) setOpen(true);
  }, []);

  const accept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setOpen(false);
  };

  if (!open) return null;

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 0,
        width: "100%",
        bgcolor: "background.paper",
        p: 2,
        boxShadow: 10,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        zIndex: 9999,
      }}
    >
      <Typography>{t("cookie.message")}</Typography>
      <Button variant="contained" onClick={accept}>
        {t("cookie.accept")}
      </Button>
    </Box>
  );
};

export default CookiePopup;

