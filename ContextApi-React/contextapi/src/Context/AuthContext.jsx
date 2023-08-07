import { createContext, useState } from "react";
// 1. Creating the Context
export const AuthContext = createContext();

// 2. Create a Custom Function
export const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  //login
  const LoginFun = () => {
    setIsAuth(true);
  };

  // logout

  const LogoutFun = () => {
    setIsAuth(false);
  };
  return (
    <AuthContext.Provider value={{ LoginFun, LogoutFun, isAuth }}>
      {children}
    </AuthContext.Provider>
  );
};
