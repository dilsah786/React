import React from "react";
import "./Homepage.css";
const Homepage = () => {
  return (
    <div className="homepage_component">
      <div className="homepage">
        <div className="homeTextDiv">
          <h1>
            I' am a <br /> FULL STACK <br /> WEB DEVELOPER.
          </h1>
          <button>Previous Projects</button>
        </div>
        <div className="homeImage">
          <img src="https://www.techgeek360.com/wp-content/uploads/2021/11/full-stack-web-development.jpg" />
        </div>
      </div>
      
    </div>
  );
};

export default Homepage;
