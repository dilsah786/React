import React from "react";
import "./Navbar.css";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import CodeIcon from "@mui/icons-material/Code";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import { Link } from "react-router-dom";
import Homepage from "../Homepage/Homepage";
import About from "../AboutMe/About";
import Projects from "../Projects/Projects";
import Experience from "../Experience/Experience";
import Contact from "../Contact/Contact";
const Navbar = () => {
  return (
    <div className="navbar_component">
      <div className="nav">
        <div className="name-logo">
          <img
            className="logo"
            src="https://avatars.githubusercontent.com/u/120841935?v=4"
            width={100}
            height={100}
          />
          <h1>MD DILNAWAZ ALAM</h1>
        </div>
        <div className="NavItems">
          <ul>
            <Link to="/" element={<Homepage />}>
              Home
            </Link>
            <Link to="/about" element={<About />}>
              About
            </Link>
            <Link to="/project" element={<Projects />}>
              Projects
            </Link>
            <Link to="/experience" element={<Experience />}>
              Experience
            </Link>
            <Link to="/contact" element={<Contact />}>
              {" "}
              Contact
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
