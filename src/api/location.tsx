import axios from "axios";
import api from "./axios";

import { API_KEY_GEOCODE } from "../config/config.dev.json";
import { UserLocation } from "../types/location";

export const getCoordinatesFromLocation = async (
  cityName: string,
  countryCode: string
) => {
  try {
    const { data } = await axios.get(
      `http://api.openweathermap.org/geo/1.0/direct?q=${cityName},${countryCode}&appid=${API_KEY_GEOCODE}`
    );
    return data[0];
  } catch (error) {
    console.log(`Error when fetching coordinates: ${error}`);
  }
};

export const getCountriesAndCities = async () => {
  const { data } = await axios.get(
    "https://countriesnow.space/api/v0.1/countries"
  );
  return data;
};

export const setUserLocation = async (location: UserLocation, id: string) => {
  try {
    console.log(location);
    const { data } = await api.put(
      `/users/single/${id}/location`,
      JSON.stringify(location)
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};

