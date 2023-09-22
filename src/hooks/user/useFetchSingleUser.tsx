import { useQuery } from "@tanstack/react-query";
import { getSingleUser } from "../../api/user";

export const useFetchSingleUser = (id: string) => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["singleUser", id],
    queryFn: () => getSingleUser(id),
    retryDelay: 1000,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });

  return { data, isLoading, isError, error };
};

