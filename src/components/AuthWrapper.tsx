import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

type AuthWrapperProps = {
  children?: React.ReactNode;
};
type JSONString = string | object;

const AuthWrapper = ({ children }: AuthWrapperProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const user: JSONString = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user") || "")
    : null;

  useEffect(() => {
    if (!user && location.pathname !== "/login") {
      navigate("/login");
      return;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location, user]);

  return <>{children}</>;
};

export default AuthWrapper;

