import { useNavigate } from "react-router-dom";

export const useLogoutUser = () => {
  const navigate = useNavigate();

  const logoutUser = () => {
    localStorage.removeItem("user_key");
    navigate("/login");
  };

  return { logoutUser };
};

