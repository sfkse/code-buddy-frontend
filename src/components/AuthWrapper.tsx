import React from "react";
import { Navigate, useLocation } from "react-router-dom";

type AuthWrapperProps = {
  children?: React.ReactNode;
};

const AuthWrapper = ({ children }: AuthWrapperProps) => {
  const location = useLocation();
  const credentials = localStorage.getItem("credentials")
    ? JSON.parse(localStorage.getItem("credentials") || "")
    : null;

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  // Send user to login page if not logged in
  if (
    !credentials &&
    location.pathname !== "/login" &&
    location.pathname !== "/register"
  )
    return <Navigate to="/login" />;

  // Send user to welcome page if not activated
  if (credentials && !credentials.activated && location.pathname !== "/welcome")
    return <Navigate to="/welcome" />;

  // Send user to home page if logged in
  if (
    credentials &&
    credentials.activated &&
    (location.pathname === "/welcome" ||
      location.pathname === "/register" ||
      location.pathname === "/login")
  )
    return <Navigate to="/" />;

  return <>{children}</>;
};

export default AuthWrapper;

