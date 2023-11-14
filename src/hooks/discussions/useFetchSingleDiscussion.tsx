import { useQuery } from "@tanstack/react-query";
import { getSingleDiscussion } from "../../api/discussions";

const useFetchSingleDiscussion = (discussionId: string) => {
  const { data, isPending, error } = useQuery({
    queryKey: ["singleDiscussion", discussionId],
    queryFn: () => getSingleDiscussion(discussionId),
    // enabled,
  });

  console.log(data);

  if (error instanceof Error) error;
  const discussion = data ? data[0] : {};
  return { discussion, isPending, error };
};

export default useFetchSingleDiscussion;

