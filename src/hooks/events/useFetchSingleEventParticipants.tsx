import { useQuery } from "@tanstack/react-query";
import { getSingleEventParticipants } from "../../api/event";

const useFetchSingleEventParticipants = (idEvent: string) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["singleEventParticipants", idEvent],
    queryFn: () => getSingleEventParticipants(idEvent),
  });

  if (error instanceof Error) error;

  const participants = data ? data : [];
  return { participants, isParticipantsLoading: isLoading, error };
};

export default useFetchSingleEventParticipants;

