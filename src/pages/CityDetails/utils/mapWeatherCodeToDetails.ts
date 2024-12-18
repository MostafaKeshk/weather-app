import {
  WbSunny as ClearSkyIcon,
  Cloud as CloudIcon,
  CloudQueue as PartlyCloudyIcon,
  AcUnit as SnowIcon,
  Grain as RainIcon,
  Thunderstorm as ThunderstormIcon,
} from "@mui/icons-material";

import { SvgIconProps } from "@mui/material";
import FogIcon from "../../../components/icons/FogIcon";

interface WeatherDetails {
  description: string;
  icon: React.ElementType<SvgIconProps>;
}

export const mapWeatherCodeToDetails = (code: number): WeatherDetails => {
  const weatherDetails: { [key: number]: WeatherDetails } = {
    0: { description: "Clear sky", icon: ClearSkyIcon },
    1: { description: "Mainly clear", icon: PartlyCloudyIcon },
    2: { description: "Partly cloudy", icon: PartlyCloudyIcon },
    3: { description: "Overcast", icon: CloudIcon },
    45: { description: "Fog", icon: FogIcon },
    48: { description: "Depositing rime fog", icon: FogIcon },
    51: { description: "Drizzle: Light intensity", icon: RainIcon },
    53: { description: "Drizzle: Moderate intensity", icon: RainIcon },
    55: { description: "Drizzle: Dense intensity", icon: RainIcon },
    61: { description: "Rain: Slight intensity", icon: RainIcon },
    63: { description: "Rain: Moderate intensity", icon: RainIcon },
    65: { description: "Rain: Heavy intensity", icon: RainIcon },
    71: { description: "Snowfall: Slight intensity", icon: SnowIcon },
    73: { description: "Snowfall: Moderate intensity", icon: SnowIcon },
    75: { description: "Snowfall: Heavy intensity", icon: SnowIcon },
    95: {
      description: "Thunderstorm: Slight or moderate",
      icon: ThunderstormIcon,
    },
    96: { description: "Thunderstorm: Slight hail", icon: ThunderstormIcon },
    99: { description: "Thunderstorm: Heavy hail", icon: ThunderstormIcon },
  };

  return (
    weatherDetails[code] || {
      description: "Unknown weather condition",
      icon: CloudIcon,
    }
  );
};
