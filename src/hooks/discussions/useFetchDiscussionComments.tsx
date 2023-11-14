import { useQuery } from "@tanstack/react-query";
import { getAllDiscussionComments } from "../../api/discussions";

const useFetchDiscussionComments = (discussionId: string) => {
  const { data, isPending, error } = useQuery({
    queryKey: ["discussionComments", discussionId],
    queryFn: () => getAllDiscussionComments(discussionId),
  });

  if (error instanceof Error) error;
  const comments = data ? data : [];
  return { comments, isPending, error };
};

export default useFetchDiscussionComments;

