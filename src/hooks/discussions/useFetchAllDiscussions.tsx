import { useQuery } from "@tanstack/react-query";
import { getAllDiscussions } from "../../api/discussions";

const useFetchAllDiscussions = () => {
  const { data, isPending, error } = useQuery({
    queryKey: ["allDiscussions"],
    queryFn: getAllDiscussions,
  });

  if (error instanceof Error) error;
  const discussions = data ? data : [];
  return { discussions, isPending, error };
};

export default useFetchAllDiscussions;

