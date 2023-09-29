import axios from "axios";
import api from "./axios";

import { API_KEY_GEOCODE } from "../config/config.dev.json";
import { UserLocation } from "../types/location";

export const getCoordinatesFromLocation = async (
  cityName: string,
  countryCode: string
) => {
  const { data } = await axios.get(
    `http://api.openweathermap.org/geo/1.0/direct?q=${cityName},${countryCode}&appid=${API_KEY_GEOCODE}`
  );
  if (data.length === 0) return { lat: 0, lon: 0 };
  return data[0];
};

export const getCountriesAndCities = async () => {
  const { data } = await axios.get(
    "https://countriesnow.space/api/v0.1/countries"
  );
  return data;
};

export const setUserLocation = async (location: UserLocation, id: string) => {
  const { data } = await api.put(
    `/users/single/${id}/location`,
    JSON.stringify(location)
  );
  return data;
};

