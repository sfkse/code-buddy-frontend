import { useQuery } from "@tanstack/react-query";
import { getSingleEvent } from "../../api/event";

const useFetchSingleEvent = (id: string) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["singleEvent", id],
    queryFn: () => getSingleEvent(id),
    retry: 3,
  });

  if (error instanceof Error) error;

  const event = data ? data[0] : [];
  return { event, isLoading, error };
};

export default useFetchSingleEvent;

