import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEvent } from "../../api/event";
import { CreateEvent } from "../../types/events";

const useSaveEvent = () => {
  const queryClient = useQueryClient();
  const { mutate, error, data, isPending } = useMutation({
    mutationFn: (data: CreateEvent) => createEvent(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["allEvents"] });
      queryClient.invalidateQueries({ queryKey: ["userEvents"] });
    },
  });

  return { mutate, data, error, isPending };
};

export default useSaveEvent;

