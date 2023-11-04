import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addUserNote } from "../../api/notes";
import { CreateNoteData } from "../../types/notes";

const useAddUserNote = () => {
  const queryClient = useQueryClient();
  const { mutate, error, data, isPending } = useMutation({
    mutationFn: (note: CreateNoteData) => addUserNote(note),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["allUserNotes"] });
    },
  });

  if (error instanceof Error) error;

  return { mutate, data, error, isPending };
};

export default useAddUserNote;

