import { getUserEvents } from "../../api/event";
import { useQuery } from "@tanstack/react-query";

const useFetchUserEvents = (idUser: string, status: number) => {
  const { data, isPending, error } = useQuery({
    queryKey: ["userEvents", idUser],
    queryFn: () => getUserEvents(idUser, status),
  });

  if (error instanceof Error) error;

  return { events: data, isPending, error };
};

export default useFetchUserEvents;

