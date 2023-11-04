import { useQuery } from "@tanstack/react-query";
import { getAllUserNotes } from "../../api/notes";

const useFetchUserNotes = (iduser: string, isAuthenticated: boolean) => {
  const {
    data,
    isLoading: isLoad,
    error,
  } = useQuery({
    queryKey: ["allUserNotes", iduser],
    queryFn: () => getAllUserNotes(iduser),
    staleTime: 1000 * 60 * 5,
    enabled: isAuthenticated,
  });

  if (error instanceof Error) error;
  const isLoading = isLoad && isAuthenticated;
  return { notes: data, isLoading, error };
};

export default useFetchUserNotes;

