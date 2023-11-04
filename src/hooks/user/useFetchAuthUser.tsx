import { useQuery } from "@tanstack/react-query";
import { User } from "../../types/user";
import { getLoggedInStatus } from "../../api/auth";

export const useFetchAuthUser = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["authUser"],
    queryFn: () => getLoggedInStatus(),
    staleTime: 1000 * 60 * 5,
  });

  if (error instanceof Error) error;

  const user = data ? data : ({} as User);

  return { authUser: user, isLoading, error };
};

