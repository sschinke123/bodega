import {
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Box,
  Container,
} from "@mui/material";
import { useTranslation } from "react-i18next";

import carlosImage from "../../img/team-carlos.jpg";
import elenaImage from "../../img/team-elena.jpg";
import miguelImage from "../../img/team-miguel.jpg";

const HistoryPage = () => {
  const { t } = useTranslation();

  const team = [
    {
      name: "Carlos Mendez",
      image: carlosImage,
      text: t("history.team1"),
    },
    {
      name: "Elena García",
      image: elenaImage,
      text: t("history.team2"),
    },
    {
      name: "Miguel Santos",
      image: miguelImage,
      text: t("history.team3"),
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ mt: 6, mb: 6 }}>
  
<Box mb={4}>
  <Typography variant="h3" gutterBottom textAlign="center">
    {t("history.title")}
  </Typography>

  <Card
    sx={{
      maxWidth: 900,
      mx: "auto",
      mt: 6,
      transition: "0.3s",
      "&:hover": {
        transform: "scale(1.02)",
        boxShadow: 6,
      },
    }}
  >
    <CardContent
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center", 
        alignItems: "center",     
        textAlign: "center",
        py: 4,                   
      }}
    >
      <Typography sx={{ mb: 2 }}>
        {t("history.text1")}
      </Typography>

      <Typography>
        {t("history.text2")}
      </Typography>
    </CardContent>
  </Card>
</Box>

      
      <Typography variant="h4" gutterBottom textAlign="center" sx={{ mt: 4, mb: 4 }}>
        {t("history.teamTitle")}
      </Typography>

     
      <Grid
        container
        spacing={4}
        justifyContent="center"
      >
        {team.map((member) => (
          <Grid item xs={12} sm={6} md={4} key={member.name}>
            <Card
              sx={{
                height: "100%",
                transition: "0.3s",
                "&:hover": {
                  transform: "scale(1.03)",
                  boxShadow: 6,
                },
              }}
            >
              <CardMedia
                component="img"
                height="250" 
                image={member.image}
                alt={member.name}
              />
              <CardContent sx={{ textAlign: "center" }}>
                <Typography variant="h5" gutterBottom>
                  {member.name}
                </Typography>
                <Typography>{member.text}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default HistoryPage;


