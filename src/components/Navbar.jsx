import React from "react";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export const Navbar = () => {
  const { isAuth, logout } = useContext(AuthContext);
  const nav = useNavigate();
  const handleClick = () => {
    //login screen
    if (isAuth) {
      //he wants to logout
      logout();
      nav("");
    } else {
      //he wants  to login
      nav("login");
    }
  };
  return (
    <div className="navbar">
      Navbar :<Link to="">Home</Link>
      <Link to="/feeds">Feeds</Link>
      <Link to="/posts">Posts</Link>
      <Link to="/careers">Careers</Link>
      <button onClick={handleClick}>{isAuth ? "Logout" : "Login"}</button>
    </div>
  );
};
