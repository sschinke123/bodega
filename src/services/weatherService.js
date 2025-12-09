export const getFixedWeather = async () => {
  const url =
    "https://api.open-meteo.com/v1/forecast?latitude=42.3139&longitude=2.0267&current_weather=true";

  const response = await fetch(url);
  const data = await response.json();

  const weatherCode = data.current_weather.weathercode;

  return {
    temperatura_actual: data.current_weather.temperature,
    viento: data.current_weather.windspeed,
    humedad: "-",
    stateSky: {
      code: weatherCode, 
    },
  };
};
