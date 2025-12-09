import {
  
  Typography,
  Button,
  Card,
  CardContent,
  Container,
  Box,
} from "@mui/material";
import WeatherWidget from "../../components/shared/WeatherWidget";
import heroImage from "../../img/start.jpg";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const HomePage = () => {
  const { t } = useTranslation();

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      
      <Card
        sx={{
          height: 450,
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
          mb: 4,
          borderRadius: 2,
        }}
      >
        <Typography
          variant="h3"
          sx={{
            bgcolor: "rgba(0, 0, 0, 0.65)",
            p: 2,
            textAlign: "center",
          }}
        >
          {t("home.heroTitle")}
        </Typography>
      </Card>

      
      <Card
        sx={{
          width: "100%",
          mb: 4,
          transition: "0.3s",
          "&:hover": { transform: "scale(1.03)", boxShadow: 6 },
        }}
      >
        <CardContent>
          <Typography variant="h5" gutterBottom>
            {t("home.featuredTitle")}
          </Typography>
          <Typography sx={{ mb: 2 }}>{t("home.featuredText")}</Typography>
          <Button variant="contained" color="primary" component={Link}
  to="/pricing">
            {t("home.buyButton")}
          </Button>
        </CardContent>
      </Card>

      
      <Box
        sx={{
          display: "flex",
          gap: 4, 
          flexWrap: "wrap", 
          justifyContent: "center",
        }}
      >
        
        <Card
          sx={{
            flex: "1 1 500px", 
            maxWidth: "600px",
            transition: "0.3s",
            "&:hover": { transform: "scale(1.03)", boxShadow: 6 },
          }}
        >
          <CardContent>
            <Typography variant="h5" gutterBottom>
              {t("home.offersTitle")}
            </Typography>
            <Typography sx={{ mb: 2 }}>{t("home.offersText")}</Typography>
            <Button variant="contained" color="secondary" component={Link}
  to="/pricing">
              {t("home.viewOffersButton")}
            </Button>
          </CardContent>
        </Card>

        
        <Box
          sx={{
            flex: "1 1 500px", 
            maxWidth: "600px",
          }}
        >
          <WeatherWidget />
        </Box>
      </Box>
    </Container>
  );
};

export default HomePage;



