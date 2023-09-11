import React, { useContext, useState } from "react";
import axios from "axios";
import { AuthContext } from "../Context/AuthContext";
import { Navigate, json } from "react-router-dom";

const Login = () => {
  const { login, isAuth, logout, setToken, token } = useContext(AuthContext);
  const [email, setEmail] = useState("eve.holt@reqres.in");
  const [password, setPassword] = useState("cityslicka");

  const handleSubmit = async () => {
    try {
      const result = await fetch(`https://reqres.in/api/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      const res = await result.json();
      setToken(res.token);
      login(res.token);
    } catch (err) {
      console.log(err);
    }
  };

  if (isAuth) {
    return <Navigate to="/" />;
  }

  console.log(email);
  console.log(password);

  console.log(token);

  return (
    <div>
      <h1>Login</h1>
      <input
        type="text"
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSubmit}>Login</button>
    </div>
  );
};

export default Login;
