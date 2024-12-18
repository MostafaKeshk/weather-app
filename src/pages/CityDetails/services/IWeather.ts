export interface IWeather {
  latitude: number;
  longitude: number;
  generationtime_ms: number;
  utc_offset_seconds: number;
  timezone: string;
  timezone_abbreviation: string;
  elevation: number;
  current_units: ICurrentUnits;
  current: ICurrent;
}

export interface ICurrentUnits {
  time: string;
  interval: string;
  temperature_2m: string;
  relative_humidity_2m: string;
  weather_code: string;
  wind_speed_10m: string;
}

export interface ICurrent {
  time: string;
  interval: number;
  temperature_2m: number;
  relative_humidity_2m: number;
  weather_code: number;
  wind_speed_10m: number;
}
