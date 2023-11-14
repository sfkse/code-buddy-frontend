import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createDiscussion } from "../../api/discussions";
import { CreateDiscussion } from "../../types/discussions";

const useSubmitDiscussion = () => {
  const queryClient = useQueryClient();
  const { mutate, error, data, isPending } = useMutation({
    mutationFn: (data: CreateDiscussion) => createDiscussion(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["useDiscussions"] });
      queryClient.invalidateQueries({ queryKey: ["allDiscussions"] });
    },
  });

  return { mutate, data, error, isPending };
};

export default useSubmitDiscussion;

