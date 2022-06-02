import React, { useContext } from "react";
import { useState } from "react";
import { AuthContext } from "../context/AuthContext";

export const Login = () => {
  const [loginCreds, setLoginCreds] = useState({});

  const { login } = useContext(AuthContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginCreds({
      ...loginCreds,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login();
  };
  return (
    <div>
      Login
      <form onSubmit={handleSubmit} className="form">
        <input
          name="email"
          type="email"
          placeholder="email"
          onChange={handleChange}
        />
        <input
          name="password"
          type="password"
          placeholder="Enter Password"
          onChange={handleChange}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};
