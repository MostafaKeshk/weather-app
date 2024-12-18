import React from "react";
import { Typography } from "@mui/material";
import { mapWeatherCodeToDetails } from "../utils/mapWeatherCodeToDetails";

interface Props {
  weatherCode: number;
}

const WeatherDisplay: React.FC<Props> = ({ weatherCode }) => {
  const weather = mapWeatherCodeToDetails(weatherCode);
  const WeatherIcon = weather.icon;

  return (
    <>
      <WeatherIcon color="primary" sx={{ fontSize: 40 }} />

      <Typography variant="h5" mt={1}>
        {weather.description}
      </Typography>
    </>
  );
};

export default WeatherDisplay;
