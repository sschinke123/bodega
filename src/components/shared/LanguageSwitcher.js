import { useTranslation } from "react-i18next";
import { Button, Stack } from "@mui/material";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  return (
    <Stack direction="row" spacing={1}>
      <Button variant="outlined"
        sx={{ color: "white", borderColor: "white" }} onClick={() => i18n.changeLanguage("en")}>EN</Button>
      <Button variant="outlined"
        sx={{ color: "white", borderColor: "white" }} onClick={() => i18n.changeLanguage("de")}>DE</Button>
      <Button variant="outlined"
        sx={{ color: "white", borderColor: "white" }} onClick={() => i18n.changeLanguage("es")}>ES</Button>
    </Stack>
  );
};

export default LanguageSwitcher;
