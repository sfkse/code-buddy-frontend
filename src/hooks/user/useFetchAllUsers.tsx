import { useQuery } from "@tanstack/react-query";
import { getAllUsers } from "../../api/user";

export const useFetchAllUsers = () => {
  const {
    data: users,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["allUsers"],
    queryFn: getAllUsers,
  });

  if (error instanceof Error) error;

  return { users, isLoading, error };
};

