import axios from "axios";

interface IParams {
  latitude: string;
  longitude: string;
  current: string;
  temperature_unit?: string;
}

class WeatherService {
  async getWeather(latitude: string, longitude: string, isFahrenheit: boolean) {
    const params: IParams = {
      latitude,
      longitude,
      current:
        "temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m",
    };

    if (isFahrenheit) {
      params.temperature_unit = "fahrenheit";
    }

    const response = await axios.get("https://api.open-meteo.com/v1/forecast", {
      params,
    });
    return response.data;
  }
}

const weatherService = new WeatherService();

export default weatherService;
