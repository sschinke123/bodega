import { useEffect, useState } from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { getFixedWeather } from "../../services/weatherService";
import { useTranslation } from "react-i18next";

const WeatherWidget = () => {
  const { t } = useTranslation();
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    getFixedWeather()
      .then((data) => setWeather(data))
      .catch(() => setError(t("weather.error")));
  }, [t]);

  if (error) return <Typography>{error}</Typography>;
  if (!weather) return <Typography>{t("weather.loading")}</Typography>;

  return (
    <Card
      sx={{
        width: "100%",
        height: "100%",
        transition: "0.3s",
        "&:hover": {
          transform: "scale(1.03)",
          boxShadow: 6,
        },
      }}
    >
      <CardContent>
        <Typography variant="h5" gutterBottom>
          {t("weather.title")}
        </Typography>

        <Typography>
          🌡️ {t("weather.temperature")}: {weather.temperatura_actual}°C
        </Typography>
        <Typography>
          💧 {t("weather.humidity")}: {weather.humedad}%
        </Typography>
        <Typography>
          🌬️ {t("weather.wind")}: {weather.viento} km/h
        </Typography>
        <Typography>
          🌦️ {t("weather.conditionLabel")}: {t(`weather.codes.${weather.stateSky?.code}`)}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default WeatherWidget;

