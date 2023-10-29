import { Note } from "../../types/notes";
import { deleteUserNote } from "../../api/notes";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const useDeleteUserNote = (id: Note["idnotes"], owner: Note["owner"]) => {
  const queryClient = useQueryClient();
  const { mutate, error, data, isLoading } = useMutation({
    mutationFn: () => deleteUserNote(id),
    onSuccess: () => {
      queryClient.invalidateQueries(["allUserNotes", owner]);
    },
  });

  if (error instanceof Error) error;

  return { mutateDelete: mutate, data, error, isLoading };
};

export default useDeleteUserNote;

