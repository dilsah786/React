import React from "react";
import {Link} from "react-router-dom"
const Navbar = () => {
  const links = [
    { title: "Home", path: "/" },
    { title: "About", path: "/about" },
    { title: "Contact", path: "/contact" },
    { title: "Product", path: "/product" },
    { title: "Login", path: "/login" },
  ];

  return <div style={{display:"flex",justifyContent:"space-around",marginTop:"30px",textDecoration:"none"}}>
  {links.map((e)=>{
    return  <Link key={e.path} to={e.path} >{e.title} </Link>
  })}

  </div>;
};

export default Navbar;
