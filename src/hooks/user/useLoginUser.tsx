import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

import { authenticateLogin } from "../../api/auth";
import { saveCredentials } from "../../utils/userUtils";
import { AuthFormState } from "../../types/form";

export const useLoginUser = (
  formState: AuthFormState,
  setFormState: React.Dispatch<React.SetStateAction<AuthFormState>>,
  setErrorMessage: React.Dispatch<React.SetStateAction<string>>
) => {
  const navigate = useNavigate();

  const { mutate, error, data, isLoading, reset } = useMutation({
    mutationFn: () => authenticateLogin(formState),
    onSuccess: (data) => {
      if (data) {
        saveCredentials(data.data.user.idusers);
        return navigate("/");
      }
    },
    onSettled: () =>
      setFormState({
        email: "",
        password: "",
      }),
    onError: (error: any) => {
      setErrorMessage(error.response.data.message);
      reset();
    },
  });

  return { mutate, data, error, isLoading };
};

