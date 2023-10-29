import { useQuery } from "@tanstack/react-query";
import { getSingleUser } from "../../api/user";
import { User } from "../../types/user";

export const useFetchSingleUser = (id: string) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["singleUser", id],
    queryFn: () => getSingleUser(id),
    staleTime: 1000 * 60 * 5,
  });

  if (error instanceof Error) error;
  const user = data ? data[0] : ({} as User);

  return { user: user, isLoading, error };
};

