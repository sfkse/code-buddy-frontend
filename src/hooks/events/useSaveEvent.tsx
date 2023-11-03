import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEvent } from "../../api/event";
import { CreateEvent } from "../../types/events";

const useSaveEvent = () => {
  const queryClient = useQueryClient();
  const { mutate, error, data, isLoading } = useMutation({
    mutationFn: (data: CreateEvent) => createEvent(data),
    onSuccess: () => {
      queryClient.invalidateQueries(["allEvents"]);
    },
  });

  return { mutate, data, error, isLoading };
};

export default useSaveEvent;

