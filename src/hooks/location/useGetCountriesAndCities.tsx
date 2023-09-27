import { useQuery } from "@tanstack/react-query";
import { getCountriesAndCities } from "../../api/location";

export const useGetCountriesAndCities = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["countriesAndCities"],
    queryFn: getCountriesAndCities,
  });

  const countries = data?.data?.flat();
  return { countries, isLoading, isError, error };
};

