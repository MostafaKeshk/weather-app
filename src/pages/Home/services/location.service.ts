import axios from "axios";

class LocationService {
  async getLocations(name: string) {
    const response = await axios.get(
      "https://geocoding-api.open-meteo.com/v1/search",
      {
        params: { name, format: "json", count: 10 },
      }
    );
    return response.data;
  }
}

const locationService = new LocationService();

export default locationService;
