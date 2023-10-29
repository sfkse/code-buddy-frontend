import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateSingleUser } from "../../api/user";
import { User, UserAccountSettings } from "../../types/user";

const useUpdateSingleUser = (iduser: string, userData: UserAccountSettings) => {
  const queryClient = useQueryClient();
  const { mutate, error, data, isLoading, reset } = useMutation({
    mutationFn: () => updateSingleUser(iduser, userData),
    onSuccess: () => {
      queryClient.invalidateQueries(["singleUser", iduser]);
    },
    // onSettled: () =>
    //   setFormState({
    //     email: "",
    //     password: "",
    //   }),
    onError: (error: any) => {
      //   setErrorMessage(error.response.data.message);
      //   reset();
      console.log(error);
    },
  });
  return { mutate, errorUserUpdate: error, isLoadingUserUpdate: isLoading };
};

export default useUpdateSingleUser;

