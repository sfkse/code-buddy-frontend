import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

import { authenticateLogin } from "../../api/auth";
import { AuthFormState } from "../../types/form";

export const useLoginUser = (
  formState: AuthFormState,
  setFormState: React.Dispatch<React.SetStateAction<AuthFormState>>,
  setErrorMessage: React.Dispatch<React.SetStateAction<string>>
) => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate, error, data, isPending, reset } = useMutation({
    mutationFn: () => authenticateLogin(formState),
    onSuccess: async (data) => {
      if (data) {
        localStorage.setItem("auth", "true");
        queryClient.invalidateQueries({ queryKey: ["authUser"] });
        return navigate(localStorage.getItem("redirect") || "/");
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

  return { mutate, data, error, isPending };
};

