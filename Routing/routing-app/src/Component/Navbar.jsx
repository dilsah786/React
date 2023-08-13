import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const links = [
    { path: "/", title: "Home" },
    { path: "/about", title: "About" },
    { path: "/contact", title: "Contact" },
    { path: "/login", title: "Login" },
  ];

  return (
    <div style={{display:"flex" , justifyContent:"space-around"}}>
      {links.map((link) => {
      return <h1 key={link.path}><Link to={link.path}>{link.title}</Link> </h1>;
      })}
      ;
    </div>
  );
};

export default Navbar;
