import { useQuery } from "@tanstack/react-query";
import { getSingleDiscussion } from "../../api/discussions";
import { Discussion } from "../../types/discussions";

const useFetchSingleDiscussion = (discussionId: string) => {
  const { data, isPending, error } = useQuery<Discussion>({
    queryKey: ["singleDiscussion", discussionId],
    queryFn: () => getSingleDiscussion(discussionId),
    // enabled,
  });

  if (error instanceof Error) error;
  console.log(data);

  return { discussion: data, isPending, error };
};

export default useFetchSingleDiscussion;

