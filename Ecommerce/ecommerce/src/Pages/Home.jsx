import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { Link, Navigate } from "react-router-dom";
import Login from "./Login";
const Home = () => {
  const { isAuth, logout, token } = useContext(AuthContext);
  return (
    <div>
      {isAuth ? (
        <div>
          <h1>Home</h1>
          <h3>Token :{token} </h3>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <div>
          <h1>Please login First</h1>
          <Link to="/login" element={<Login />}>
            {" "}
            <button>Login</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Home;
