import { useMutation, useQueryClient } from "@tanstack/react-query";
import { PostNoteData } from "../../types/notes";
import { saveUserNote } from "../../api/notes";

const useSaveUserNote = (noteData: PostNoteData) => {
  const queryClient = useQueryClient();
  const { mutate, error, data, isLoading } = useMutation({
    mutationFn: () => saveUserNote(noteData),
    onSuccess: () => {
      queryClient.invalidateQueries(["allUserNotes", noteData.owner]);
    },
  });

  if (error instanceof Error) error;

  return { mutate, data, error, isLoading };
};

export default useSaveUserNote;

