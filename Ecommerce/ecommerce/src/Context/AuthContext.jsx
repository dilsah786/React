import { createContext, useState } from "react";
import React from "react";

export const AuthContext = React.createContext();

export const AuthContextProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const [token, setToken] = useState("");
  const login = (token) => {
    setIsAuth(true);
    setToken(token);
  };
  const logout = () => {
    setIsAuth(false);
    setToken("");
  };
  console.log();
  console.log(children);
  return (
    <AuthContext.Provider value={{ isAuth, login, logout, setToken, token }}>
      {children}{" "}
    </AuthContext.Provider>
  );
};
