import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CreateDiscussionComment } from "../../types/discussions";
import { createComment } from "../../api/discussions";

const useSubmitComment = (id: string) => {
  const queryClient = useQueryClient();
  const { mutate, error, data, isPending } = useMutation({
    mutationFn: (data: CreateDiscussionComment) => createComment(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["discussionComments", id] });
    },
  });

  return {
    mutate,
    data,
    errorSubmitComment: error,
    isSubmitCommentPending: isPending,
  };
};

export default useSubmitComment;

