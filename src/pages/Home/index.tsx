import { Container, Toolbar, Typography } from "@mui/material";
import useHome from "./containers/useHome";
import { styles } from "./styles";
import SearchDropdown from "../../components/core/SearchDropdown";

import SearchHistory from "./components/SearchHistory";

const Home = () => {
  const {
    loading,
    handleSearch,
    searchValue,
    locations,
    openList,
    handleSelectLocation,
    handleClear,
    recentLocations,
  } = useHome();

  return (
    <Container maxWidth="lg" sx={styles.container}>
      <Toolbar />

      <Typography variant="h1" component="h1">
        Weather App
      </Typography>

      <SearchDropdown
        value={searchValue}
        onChange={handleSearch}
        loading={loading}
        options={locations}
        getOptionLabel={(location) => {
          return location?.country
            ? `${location.country ?? ""}  ${
                location.admin1 ? `- ${location.admin1}` : ""
              }`
            : "";
        }}
        onSelect={handleSelectLocation}
        onClear={handleClear}
        openList={openList}
      />

      <SearchHistory recentLocations={recentLocations} />
    </Container>
  );
};

export default Home;
