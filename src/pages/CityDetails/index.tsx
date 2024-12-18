import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Switch,
  Toolbar,
  Typography,
} from "@mui/material";
import useCityDetails from "./containers/useCityDetails";
import { styles } from "./styles";
import WeatherDisplay from "./components/WeatherDetails";
import AirIcon from "@mui/icons-material/Air";
import OpacityIcon from "@mui/icons-material/Opacity";
import ThermostatIcon from "@mui/icons-material/Thermostat";
import LoadingPage from "../../components/core/LoadingPage";

const CityDetails = () => {
  const { loading, cityDetails, handleTempType, tempType } = useCityDetails();

  if (loading || !cityDetails) return <LoadingPage />;

  const { current, current_units, name } = cityDetails;
  const { weather_code, wind_speed_10m, temperature_2m, relative_humidity_2m } =
    current;
  const {
    wind_speed_10m: windspeedUnit,
    temperature_2m: temperatureUnit,
    relative_humidity_2m: humidityUnit,
  } = current_units;

  return (
    <Container maxWidth="lg" sx={styles.container}>
      <Toolbar />

      <Box sx={{ mb: 4, textAlign: "center" }}>
        <Typography variant="h3" fontWeight="bold">
          Weather in {name}
        </Typography>

        <Box display="flex" alignItems="center" justifyContent="center" gap={1}>
          <Typography variant="h6">Celsius °C</Typography>
          <Switch checked={tempType === "F"} onClick={handleTempType} />
          <Typography variant="h6">Fahrenheit °F</Typography>
        </Box>
      </Box>

      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12} md={6} lg={3}>
          <Card sx={{ textAlign: "center", boxShadow: 2 }}>
            <CardContent>
              <WeatherDisplay weatherCode={weather_code} />
              <Typography variant="h6" color="textSecondary">
                Description
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6} lg={3}>
          <Card sx={{ textAlign: "center", boxShadow: 2 }}>
            <CardContent>
              <ThermostatIcon color="primary" sx={{ fontSize: 40 }} />
              <Typography variant="h5" mt={1}>
                {temperature_2m} {temperatureUnit}
              </Typography>
              <Typography variant="h6" color="textSecondary">
                Temperature
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6} lg={3}>
          <Card sx={{ textAlign: "center", boxShadow: 2 }}>
            <CardContent>
              <AirIcon color="info" sx={{ fontSize: 40 }} />
              <Typography variant="h5" mt={1}>
                {wind_speed_10m} {windspeedUnit}
              </Typography>
              <Typography variant="h6" color="textSecondary">
                Wind Speed
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6} lg={3}>
          <Card sx={{ textAlign: "center", boxShadow: 2 }}>
            <CardContent>
              <OpacityIcon color="success" sx={{ fontSize: 40 }} />
              <Typography variant="h5" mt={1}>
                {relative_humidity_2m} {humidityUnit}
              </Typography>
              <Typography variant="h6" color="textSecondary">
                Humidity
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default CityDetails;
