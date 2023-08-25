import { useQuery } from "@tanstack/react-query";
import { getUser } from "../../api/user";

export const useFetchUser = (id: string) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["user"],
    queryFn: () => getUser(id),
    retryDelay: 1000,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });

  return { data, isLoading, isError };
};

// export default useFetchUser;

