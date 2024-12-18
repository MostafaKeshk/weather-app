export class Paths {
  static home = "/";
  static cityDetails = "city-details";

  static getCityDetails = (lat: number, lng: number, city: string) =>
    `${Paths.cityDetails}?lat=${lat}&lng=${lng}&city=${city}`;
}
