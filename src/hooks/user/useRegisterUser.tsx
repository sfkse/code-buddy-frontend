import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

import { authenticateRegister } from "../../api/auth";
import { saveCredentials } from "../../utils/userUtils";
import { AuthFormState } from "../../types/user";

export const useRegisterUser = (
  formState: AuthFormState,
  setFormState: React.Dispatch<React.SetStateAction<AuthFormState>>,
  setErrorMessage: React.Dispatch<React.SetStateAction<string>>
) => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate, data, error, isLoading } = useMutation({
    mutationFn: () => authenticateRegister(formState),
    onSuccess: (data) => {
      if (data) {
        saveCredentials(data.data.user.idusers);

        setFormState({
          email: "",
          password: "",
          confirmPassword: "",
          firstName: "",
          lastName: "",
          skills: "",
        });
        queryClient.invalidateQueries(["singleUser"]);
        return navigate("/welcome");
      }
    },
    onError: (error: any) => setErrorMessage(error.response.data.message),
  });

  return { mutate, data, error, isLoading };
};

