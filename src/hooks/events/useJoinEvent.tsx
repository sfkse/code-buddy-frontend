import { useMutation, useQueryClient } from "@tanstack/react-query";
import { joinSingleEvent } from "../../api/event";

const useJoinEvent = () => {
  const queryClient = useQueryClient();
  const { mutate, error, data, isPending } = useMutation({
    mutationFn: (data: { idEvent: string; idUser: string }) =>
      joinSingleEvent(data.idEvent, data.idUser),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["singleEventParticipants"] });
    },
  });

  return { mutate, data, error, isPending };
};

export default useJoinEvent;

