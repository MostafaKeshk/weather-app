import { Box } from "@mui/material";
import { ILocation } from "../services/ILocation";
import { NavLink } from "react-router";
import { Paths } from "../../../routes/paths";
import { Link as MUILink } from "@mui/material";

const SearchHistory = ({
  recentLocations,
}: {
  recentLocations: ILocation[];
}) => {
  return (
    <Box display="flex" gap={1} flexDirection="column" width="100%">
      {recentLocations.map((location: ILocation) => {
        const city = location?.country
          ? `${location.country ?? ""}  ${
              location.admin1 ? `- ${location.admin1}` : ""
            }`
          : "";

        return (
          <MUILink
            key={location.id}
            component={NavLink}
            to={Paths.getCityDetails(
              location.latitude,
              location.longitude,
              city
            )}
            color="inherit"
            underline="hover"
          >
            {city}
          </MUILink>
        );
      })}
    </Box>
  );
};

export default SearchHistory;
