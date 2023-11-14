import { getSingleUser } from "../../api/user";
import { useQuery } from "@tanstack/react-query";

const useFetchSingleUser = (iduser: string) => {
  const { data, isPending, error } = useQuery({
    queryKey: ["singleEvent", iduser],
    queryFn: () => getSingleUser(iduser),
    // enabled,
  });

  if (error instanceof Error) error;

  return { user: data, isPending, error };
};

export default useFetchSingleUser;

