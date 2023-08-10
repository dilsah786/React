import React from "react";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="navbar_component">
      <div className="nav">
        <div className="name-logo">
        <img className="logo" src="https://avatars.githubusercontent.com/u/120841935?v=4" width={100} height={100} />
        <h1>MD DILNAWAZ ALAM</h1>
        </div>
        <div className="NavItems">
          <ul>
            <li>HOME</li>
            <li>ABOUT ME</li>
            <li>PROJECTS</li>
            <li>EXPERIENCE</li>
            <button>CONTACT</button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
