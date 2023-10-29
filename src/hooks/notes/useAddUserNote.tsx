import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addUserNote } from "../../api/notes";
import { CreateNoteData } from "../../types/notes";

const useAddUserNote = (note: CreateNoteData) => {
  const queryClient = useQueryClient();
  const { mutate, error, data, isLoading } = useMutation({
    mutationFn: () => addUserNote(note),
    onSuccess: () => {
      queryClient.invalidateQueries(["allUserNotes", note.owner]);
    },
  });

  if (error instanceof Error) error;

  return { mutate, data, error, isLoading };
};

export default useAddUserNote;

