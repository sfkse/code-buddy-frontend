import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateSingleUser } from "../../api/user";
import { UserAccountSettings } from "../../types/user";

const useUpdateSingleUser = (iduser: string) => {
  const queryClient = useQueryClient();

  const { mutate, error, isPending, reset } = useMutation({
    mutationFn: (userData: UserAccountSettings) =>
      updateSingleUser(iduser, userData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["authUser"] });
    },
    // onSettled: () =>
    //   setFormState({
    //     email: "",
    //     password: "",
    //   }),
    onError: (error: any) => {
      // setErrorMessage(error.response.data.message);
      reset();
      console.log(error);
    },
  });
  console.log(isPending);

  if (error instanceof Error) error;

  return { mutate, error, isPending };
};

export default useUpdateSingleUser;

