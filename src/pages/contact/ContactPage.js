import { Box, Card, CardContent, TextField, Button, Typography } from "@mui/material";
import WeatherWidget from "../../components/shared/WeatherWidget";
import { useTranslation } from "react-i18next";

const ContactPage = () => {
  const { t } = useTranslation();

  return (
    <Box sx={{ maxWidth: 1200, mx: "auto", mt: 6, mb: 6, px: 2 }}>
      
      <Typography variant="h3" gutterBottom textAlign="center">
        {t("contact.title")}
      </Typography>

<Box sx={{ mt: 6, mb: 6 }}>
  <Card sx={{ width: "100%", transition: "0.3s", "&:hover": { boxShadow: 6 } }}>
    <CardContent>
      <Typography variant="h5" gutterBottom>
        {t("contact.formTitle")}
      </Typography>

      
      <form 
        action="https://formspree.io/f/meoylqny" 
        method="POST"
      >
        <TextField
          fullWidth
          name="name"
          label={t("contact.name")}
          margin="normal"
          required
        />
        <TextField
          fullWidth
          name="email"
          type="email"
          label={t("contact.email")}
          margin="normal"
          required
        />
        <TextField
          fullWidth
          name="message"
          label={t("contact.message")}
          multiline
          rows={4}
          margin="normal"
          required
        />

        <Button fullWidth type="submit" variant="contained" sx={{ mt: 2 }}>
          {t("contact.send")}
        </Button>
      </form>
    </CardContent>
  </Card>
</Box>

      
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 4,
        }}
      >
        
        <Card
          sx={{
            flex: 1,
            height: 260,
            overflow: "hidden",
            borderRadius: 2,
            transition: "0.3s",
        "&:hover": {
          transform: "scale(1.03)",
          boxShadow: 6,
        },
          }}
        >
          <CardContent sx={{ p: 0, height: "100%" }}>
            <iframe
              src="https://maps.google.com/maps?q=42.3139,2.0267&z=15&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              title="Weingut Standort"
            />
          </CardContent>
        </Card>

        
        <Box sx={{ flex: 1 }}>
          <WeatherWidget />
        </Box>
      </Box>
    </Box>
  );
};

export default ContactPage;








