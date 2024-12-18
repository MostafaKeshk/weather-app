import { useEffect, useState } from "react";
import useCallApi from "../../../hooks/useCallApi";
import locationService from "../services/location.service";
import useDebounce from "../../../hooks/useDebounce";
import { ILocation } from "../services/ILocation";
import { useNavigate } from "react-router";
import { Paths } from "../../../routes/paths";

const useHome = () => {
  const { callApi: callLocationApi, loading: locationLoading } = useCallApi<{
    results?: ILocation[];
  }>();

  const [locations, setLocations] = useState<ILocation[]>([]);
  const recentLocations = JSON.parse(
    localStorage.getItem("recentLocations") || "[]"
  );

  const [openList, setOpenList] = useState(false);
  let navigate = useNavigate();

  const [searchValue, setSearchValue] = useState("");
  const [skipDebounce, setSkipDebounce] = useState(false);
  const debouncedSearchValue = useDebounce(searchValue, 500);

  const handleSearch = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const value = e.target.value;
    setSearchValue(value);
    if (value === "") {
      setLocations([]);
      setOpenList(false);
    }
    setSkipDebounce(false);
  };

  useEffect(() => {
    if (debouncedSearchValue && !skipDebounce) {
      callLocationApi({
        promise: () => locationService.getLocations(debouncedSearchValue),
        successCb: (result) => {
          if (result.results) {
            setLocations(result.results);
          } else {
            setLocations([]);
          }
          setOpenList(true);
        },
      });
    }
  }, [debouncedSearchValue, skipDebounce]);

  const addToLocalStorageArray = (key: string, newItem: any) => {
    const existingItems = JSON.parse(localStorage.getItem(key) || "[]");
    const updatedItems = Array.isArray(existingItems) ? existingItems : [];

    updatedItems.push(newItem);

    if (updatedItems.length > 5) {
      updatedItems.shift();
    }

    localStorage.setItem(key, JSON.stringify(updatedItems));
  };

  const handleSelectLocation = (location: ILocation) => {
    setSearchValue(`${location.admin1}, ${location.country}`);
    setOpenList(false);
    setSkipDebounce(true);
    addToLocalStorageArray("recentLocations", {
      id: location.id,
      name: location.name,
      admin1: location.admin1,
      country: location.country,
      latitude: location.latitude,
      longitude: location.longitude,
    });

    const city = location?.country
      ? `${location.admin1 ? `${location.admin1},` : ""} ${location.country}`
      : "";

    navigate(Paths.getCityDetails(location.latitude, location.longitude, city));
  };

  const handleClear = () => {
    setSearchValue("");
    setSkipDebounce(true);
    setLocations([]);
    setOpenList(false);
  };

  return {
    loading: locationLoading,
    handleSearch,
    searchValue,
    locations,
    handleSelectLocation,
    openList,
    handleClear,
    recentLocations,
  };
};

export default useHome;
