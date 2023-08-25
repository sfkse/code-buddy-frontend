import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

type AuthWrapperProps = {
  children?: React.ReactNode;
};

const AuthWrapper = ({ children }: AuthWrapperProps) => {
  const location = useLocation();
  const navigate = useNavigate();
  const user = localStorage.getItem("user");

  useEffect(() => {
    if (!user && location.pathname !== "/login") navigate("/login");

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location, user]);

  return <>{children}</>;
};

export default AuthWrapper;

