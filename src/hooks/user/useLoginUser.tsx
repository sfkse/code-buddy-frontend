import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

import { authenticateLogin } from "../../api/auth";
import { saveCredentials } from "../../utils/userUtils";
import { AuthFormState } from "../../types/user";

export const useLoginUser = (
  formState: AuthFormState,
  setFormState: React.Dispatch<React.SetStateAction<AuthFormState>>,
  setErrorMessage: React.Dispatch<React.SetStateAction<string>>
) => {
  const navigate = useNavigate();

  const { mutate, error, data, isLoading } = useMutation({
    mutationFn: () => authenticateLogin(formState),
    onSuccess: (data) => {
      if (data) {
        saveCredentials(data.data.user.idusers);
        return navigate("/welcome");
      }
    },
    onSettled: () =>
      setFormState({
        email: "",
        password: "",
      }),
    onError: (error: any) => setErrorMessage(error.response.data.message),
  });

  return { mutate, data, error, isLoading };
};

