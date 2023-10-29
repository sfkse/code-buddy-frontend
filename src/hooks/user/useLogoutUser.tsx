import { useNavigate } from "react-router-dom";

export const useLogoutUser = () => {
  const navigate = useNavigate();

  const logoutUser = () => {
    localStorage.removeItem("credentials");
    navigate("/");
  };

  return { logoutUser };
};

