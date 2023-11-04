import { useQuery } from "@tanstack/react-query";
import { getAllEvents } from "../../api/event";

const useFetchAllEvents = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["allEvents"],
    queryFn: getAllEvents,
    staleTime: 1000 * 60 * 5,
  });

  if (error instanceof Error) error;
  const events = data ? data : [];
  return { events, isLoading, error };
};

export default useFetchAllEvents;

