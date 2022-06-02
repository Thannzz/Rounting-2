import React, { useState } from "react";
import { createContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);

  const nav = useNavigate();

  const { state } = useLocation();
  // console.log(location);

  const login = () => {
    setIsAuth(true);
    if (state.from) {
      nav(state.from, { replace: true });
    } else {
      nav("/");
    }
  };

  const logout = () => {
    setIsAuth(false);
  };
  return (
    <AuthContext.Provider value={{ isAuth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
