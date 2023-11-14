import { useQuery } from "@tanstack/react-query";
import { getJoinedEvents } from "../../api/event";

const useFetchJoinedEvents = (idUser: string) => {
  const { data, isPending, error } = useQuery({
    queryKey: ["userJoinedEvents", idUser],
    queryFn: () => getJoinedEvents(idUser),
  });

  if (error instanceof Error) error;

  return { events: data, isPending, error };
};

export default useFetchJoinedEvents;

