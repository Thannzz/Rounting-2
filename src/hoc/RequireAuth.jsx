import React from "react";
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export const RequireAuth = ({ children }) => {
  const { isAuth } = useContext(AuthContext);
  const { pathname } = useLocation();
  console.log(pathname);

  if (isAuth) {
    return children;
  } else {
    //redirecting code
    return <Navigate to="/login" state={{ from: pathname }} replace />;
  }
};
