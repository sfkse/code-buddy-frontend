import { redirect, useLocation } from "react-router-dom";
import { useFetchAuthUser } from "../hooks/user/useFetchAuthUser";
import { isUserActivated, isUserAuthenticated } from "../utils/userUtils";

type AuthWrapperProps = {
  children?: React.ReactNode;
};

const AuthWrapper = ({ children }: AuthWrapperProps) => {
  const location = useLocation();
  const { authUser, error } = useFetchAuthUser();
  const userAuthenticated = isUserAuthenticated(authUser);
  const userActivated = isUserActivated(authUser);

  const unprotectedPaths = [
    "^/404",
    "^/",
    "^/login",
    "^/register",
    "^/events",
    "^/notes",
  ];

  const isProtectedPath = unprotectedPaths.some((path) =>
    location.pathname.match(path)
  );

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  // useEffect(() => {

  if (error) {
    redirect("/login");
  }

  if (!userAuthenticated) {
    redirect("/login");
  }

  if (userAuthenticated && !userActivated && isProtectedPath) {
    redirect("/welcome");
  }

  if (!userAuthenticated && !userActivated && isProtectedPath) {
    redirect("/login");
  }
  // }, [userAuthenticated, userActivated, isProtectedPath, error]);

  // // console.log(user);
  // console.log(userAuthenticated, userActivated);
  // // Send user to welcome page if not activated
  // if (userAuthenticated && !userActivated) {
  //   return navigate("/welcome");
  // }

  // // Send user to home page if logged in
  // else if (!userAuthenticated && !userActivated && isProtectedPath) {
  //   return navigate("/login");
  // } else {
  return <>{children}</>;
  // }
};

export default AuthWrapper;

