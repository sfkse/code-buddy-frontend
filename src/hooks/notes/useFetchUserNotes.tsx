import { useQuery } from "@tanstack/react-query";
import { getAllUserNotes } from "../../api/notes";

const useFetchUserNotes = (id: string) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["allUserNotes", id],
    queryFn: () => getAllUserNotes(id),
    staleTime: 1000 * 60 * 5,
    retry: 3,
  });

  if (error instanceof Error) error;

  return { notes: data, isLoading, error };
};

export default useFetchUserNotes;

