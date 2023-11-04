import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

import { authenticateRegister } from "../../api/auth";
import { saveAuth } from "../../utils/userUtils";
import { AuthFormState } from "../../types/form";

export const useRegisterUser = (
  formState: AuthFormState,
  setFormState: React.Dispatch<React.SetStateAction<AuthFormState>>,
  setErrorMessage: React.Dispatch<React.SetStateAction<string>>
) => {
  const navigate = useNavigate();

  const { mutate, data, error, isLoading, reset } = useMutation({
    mutationFn: () => authenticateRegister(formState),
    onSuccess: (data) => {
      if (data) {
        saveAuth(data.data.user.idusers, false);
        return navigate("/welcome");
      }
    },
    onError: (error: any) => {
      setErrorMessage(error.response.data.message);
      reset();
    },
    onSettled: () =>
      setFormState({
        email: "",
        password: "",
        confirmPassword: "",
        firstName: "",
        lastName: "",
        skills: "",
      }),
  });

  return { mutate, data, error, isLoading };
};

