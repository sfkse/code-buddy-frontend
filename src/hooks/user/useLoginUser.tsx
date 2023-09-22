import { useMutation } from "@tanstack/react-query";
import { authenticateLogin } from "../../api/auth";
import { useNavigate } from "react-router-dom";

export const useLoginUser = (
  email: string,
  password: string,
  setErrorMessage: React.Dispatch<React.SetStateAction<string>>
) => {
  const navigate = useNavigate();

  const { mutate, error, data, isLoading } = useMutation({
    mutationFn: () => authenticateLogin(email, password),
    onSuccess: (data) => {
      if (data) {
        localStorage.setItem("user", JSON.stringify(data.data.user));
        navigate("/");
        return;
      } else {
        console.log("no data", data);
      }
    },
    onError: (error: any) => setErrorMessage(error.response.data.message),
  });

  return { mutate, data, error, isLoading };
};

