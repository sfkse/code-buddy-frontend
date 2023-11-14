import { useQuery } from "@tanstack/react-query";
import { getUserDiscussions } from "../../api/discussions";

const useFetchUserDiscussions = (idUser: string) => {
  const { data, isPending, error } = useQuery({
    queryKey: ["useDiscussions", idUser],
    queryFn: () => getUserDiscussions(idUser),
    // enabled,
  });

  if (error instanceof Error) error;

  return {
    userDiscussions: data,
    isUserDiscussionsPending: isPending,
    isUserDiscussionsError: error,
  };
};

export default useFetchUserDiscussions;

