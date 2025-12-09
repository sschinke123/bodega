import { Typography, Grid, Card, CardContent, CardMedia } from "@mui/material";
import { useTranslation } from "react-i18next";


import wine1 from "../../img/wine1.jpg";
import wine2 from "../../img/wine2.jpg";
import wine3 from "../../img/wine3.jpg";

const PricingPage = () => {
  const { t } = useTranslation();

  const wines = [
    {
      name: "Bodega Reserve",
      year: 2023,
      price: "19€",
      image: wine1,
      description: t("pricing.wine1.desc"),
    },
    {
      name: "Chardonnay Gold",
      year: 2022,
      price: "15€",
      image: wine2,
      description: t("pricing.wine2.desc"),
    },
    {
      name: "Merlot Classic",
      year: 2021,
      price: "17€",
      image: wine3,
      description: t("pricing.wine3.desc"),
    },
  ];

  return (
    <>
      <Typography variant="h3" gutterBottom align="center" sx={{ m: 6 }}>
        {t("pricing.title")}
      </Typography>

      <Grid container spacing={4} justifyContent="center">
  {wines.map((wine) => (
    <Grid item xs={12} md={4} key={wine.name} sx={{ display: 'flex', justifyContent: 'center' }}>
      <Card
        sx={{
          height: "100%",
          maxWidth: 350,
          transition: "0.3s",
          "&:hover": {
            transform: "scale(1.03)",
            boxShadow: 6,
          },
        }}
      >
        <CardMedia
          component="img"
          height="520"
          image={wine.image}
          alt={wine.name}
        />
        <CardContent>
          <Typography variant="h5">
            {wine.name} ({wine.year})
          </Typography>
          <Typography sx={{ fontWeight: 600, mt: 1 }}>
            {t("pricing.priceLabel")}: {wine.price}
          </Typography>
          <Typography sx={{ mt: 1 }}>
            {wine.description}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  ))}
</Grid>

    </>
  );
};

export default PricingPage;

