import { useQuery } from "@tanstack/react-query";
import { getCountriesAndCities } from "../../api/location";

export const useGetCountriesAndCities = () => {
  const { data, isPending, isError, error } = useQuery({
    queryKey: ["countriesAndCities"],
    queryFn: getCountriesAndCities,
  });

  const countries = data?.data?.flat();
  return { countries, isPending, isError, error };
};

