import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

import { authenticateRegister } from "../../api/auth";
import { AuthFormState } from "../../types/form";

export const useRegisterUser = () => {
  const navigate = useNavigate();

  const { mutate, data, error, isPending, reset } = useMutation({
    mutationFn: (formState: AuthFormState) => authenticateRegister(formState),
    onSuccess: (data) => {
      console.log(data);
      if (data) {
        return navigate("/welcome", { state: "register" });
      }
    },
    onError: () => {
      reset();
    },
  });

  if (error instanceof Error) error;

  return { mutate, data, error, isPending };
};

