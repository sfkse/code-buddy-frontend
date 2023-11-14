import { useQuery } from "@tanstack/react-query";
import { getSingleEvent } from "../../api/event";

const useFetchSingleEvent = (id: string, enabled: boolean = true) => {
  const { data, isPending, error } = useQuery({
    queryKey: ["singleEvent", id],
    queryFn: () => getSingleEvent(id),
    enabled,
  });

  if (error instanceof Error) error;

  const event = data ? data[0] : [];
  return { event, isEventLoading: isPending, error };
};

export default useFetchSingleEvent;

