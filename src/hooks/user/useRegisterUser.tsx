import { useMutation, useQueryClient } from "@tanstack/react-query";
import { authenticateRegister } from "../../api/auth";
import { useNavigate } from "react-router-dom";

export const useRegisterUser = (
  email: string,
  password: string,
  confirmPassword: string,
  setErrorMessage: React.Dispatch<React.SetStateAction<string>>
) => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const mutation = useMutation(
    () => authenticateRegister(email, password, confirmPassword),
    {
      onSuccess: (data) => {
        if (data) {
          localStorage.setItem("user", JSON.stringify(data));
          queryClient.invalidateQueries(["singleUser"]);
          navigate("/");
        }
      },
      onError: (error: any) => setErrorMessage(error.response.data.message),
    }
  );

  const { mutate, error, data, isLoading } = mutation;

  return { mutate, data, error, isLoading };
};

