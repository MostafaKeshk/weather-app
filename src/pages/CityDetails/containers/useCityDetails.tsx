import { useEffect, useState } from "react";
import useCallApi from "../../../hooks/useCallApi";
import weatherService from "../services/weather.service";
import { IWeather } from "../services/IWeather";
import { useSearchParams } from "react-router";

const useCityDetails = () => {
  const { callApi: callWeatherApi, loading: weatherLoading } =
    useCallApi<IWeather>();

  const [cityDetails, setCityDetails] = useState<
    IWeather & { name: string | null }
  >();

  const [tempType, setTempType] = useState<"F" | "C">("C");

  const handleTempType = () => {
    setTempType((prev) => (prev === "C" ? "F" : "C"));
  };

  const [searchParams] = useSearchParams();
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");
  const cityName = searchParams.get("city");

  useEffect(() => {
    if (lat && lng) {
      callWeatherApi({
        promise: () => weatherService.getWeather(lat, lng, tempType === "F"),
        successCb: (result) => {
          setCityDetails({ ...result, name: cityName });
        },
      });
    }
  }, [lat, lng, tempType, cityName]);

  return {
    loading: weatherLoading,
    cityDetails,
    tempType,
    handleTempType,
  };
};

export default useCityDetails;
