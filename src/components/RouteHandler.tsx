import { useLocation, useNavigate } from "react-router-dom";
import { useFetchAuthUser } from "../hooks/user/useFetchAuthUser";
import { isUserActivated, isUserAuthenticated } from "../utils/userUtils";
import { useEffect } from "react";

type RouteHandlerProps = {
  children?: React.ReactNode;
};

const RouteHandler = ({ children }: RouteHandlerProps) => {
  const { pathname, state } = useLocation();
  const navigate = useNavigate();
  const { authUser } = useFetchAuthUser();
  const userAuthenticated = isUserAuthenticated(authUser);
  const userActivated = isUserActivated(authUser);
  const isLoggedIn = localStorage.getItem("auth") === "true";

  const unprotectedPaths = [
    /^\/404$/,
    /^\/$/,
    /^\/login$/,
    /^\/register$/,
    /^\/events$/,
    /^\/notes$/,
    /^\/discussions\/questions$/,
  ];

  const isProtectedPath = !unprotectedPaths.some((pattern) =>
    pattern.test(pathname)
  );

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  useEffect(() => {
    if (userAuthenticated && !userActivated && isProtectedPath) {
      navigate("/welcome");
    }

    if (
      !userAuthenticated &&
      !userActivated &&
      !isLoggedIn &&
      isProtectedPath &&
      state !== "register"
    ) {
      navigate("/login");
    }
  }, [userAuthenticated, userActivated, isProtectedPath, state, navigate]);

  return <>{children}</>;
};

export default RouteHandler;

