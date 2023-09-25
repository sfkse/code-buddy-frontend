import { useQuery } from "@tanstack/react-query";
import { getAllUsers } from "../../api/user";

export const useFetchAllUsers = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["allUsers"],
    queryFn: getAllUsers,
  });

  if (error instanceof Error) error;

  return { data, isLoading, isError, error };
};
