import { Typography, Box } from "@mui/material";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        bgcolor: "primary.main",
        color: "white",
        textAlign: "center",
        py: 2,
        mt: 4,
      }}
    >
      <Typography variant="body2">
        © {new Date().getFullYear()} Bodega Mendez y García – {t("footer.rights")}
      </Typography>
    </Box>
  );
};

export default Footer;

