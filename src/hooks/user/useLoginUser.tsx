import { useMutation, useQueryClient } from "@tanstack/react-query";
import { authenticateLogin } from "../../api/auth";
import { useNavigate } from "react-router-dom";

export const useLoginUser = (
  email: string,
  password: string,
  setErrorMessage: React.Dispatch<React.SetStateAction<string>>
) => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const mutation = useMutation(() => authenticateLogin(email, password), {
    onSuccess: (data) => {
      localStorage.setItem("user", JSON.stringify(data));
      queryClient.invalidateQueries(["user"]);
      navigate("/");
    },
    onError: (error: any) => {
      setErrorMessage(error.response.data.message);
    },
  });

  const { mutate, error, data, isLoading } = mutation;

  return { mutate, data, error, isLoading };
};

