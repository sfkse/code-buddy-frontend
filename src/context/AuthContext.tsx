import React, { createContext, useState } from "react";

interface CurrentUserContextType {
  isAuthenticated: boolean;
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
}

const AuthContext = createContext<CurrentUserContextType>({
  isAuthenticated: false,
  setIsAuthenticated: () => {},
});

function AuthContextProvider(props: React.PropsWithChildren) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
export { AuthContextProvider };

