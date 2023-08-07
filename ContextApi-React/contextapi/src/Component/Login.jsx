import React, { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import { Link, Outlet } from "react-router-dom";

const Login = () => {
  // Consume the Value
  const value = useContext(AuthContext);
  const { isAuth, LoginFun, LogoutFun } = value;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = () => {};

  console.log(value);

  return (
    <div>
      <h1>
        <Outlet />
        <Link to="/">Login Page</Link>
      </h1>

      <input
        type="email"
        placeholder="Enter your email"
        onChange={(e) => {
          setEmail(e.target.value);
          console.log(e.target.value);
        }}
        value={email}
      />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => {
          setPassword(e.target.value);
          console.log(e.target.value);
        }}
        value={password}
      ></input>
      <button onClick={handleClick}>Submit</button>

      <br></br>
      <br></br>
      {isAuth ? (

        <button onClick={LogoutFun}> <Link to="/logout">LogOut</Link> </button>
      ) : (
        <Link to="/login">
          <button onClick={LoginFun}> Login</button>
        </Link>
      )}
    </div>
  );
};

export default Login;
