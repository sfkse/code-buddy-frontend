import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

type AuthWrapperProps = {
  children?: React.ReactNode;
};
type JSONString = string | object;

const AuthWrapper = ({ children }: AuthWrapperProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const user: JSONString = localStorage.getItem("user_key")
    ? JSON.parse(localStorage.getItem("user_key") || "")
    : null;

  useEffect(() => {
    if (!user && location.pathname !== "/login") return navigate("/login");

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location, user]);

  return <>{user && children}</>;
};

export default AuthWrapper;

