import React from "react";
import "./Experience.css";
const Experience = () => {
  return (
    <div className="experience_component">
      <h1 style={{ textAlign: "center" }}>Experience</h1>
      <div className="language_logo">
        <div>
          <img src="https://static.javatpoint.com/core/images/java-logo1.png" />
          <h3>JAVA</h3>
        </div>

        <div>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/2048px-HTML5_Badge.svg.png" />
          <h3>HTML</h3>
        </div>

        <div>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png" />
          <h3>CSS</h3>
        </div>

        <div>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-jnAMolMemA6lbg85HSaP960e4U-IG-FUwcOmq9imYA&s" />
          <h3>JAVASCRIPT</h3>
        </div>

        <div>
          <img src="https://pbs.twimg.com/profile_images/446356636710363136/OYIaJ1KK_400x400.png" />
          <h3>REACT</h3>
        </div>

        <div>
          <img src="https://w7.pngwing.com/pngs/413/852/png-transparent-redux-react-logo-javascript-dq-purple-violet-text-thumbnail.png" />
          <h3>REDUX</h3>
        </div>

        <div>
          <img
            style={{ width: "100px" }}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Npm-logo.svg/1200px-Npm-logo.svg.png"
          />
          <h3>NPM</h3>
        </div>
      </div>
    </div>
  );
};

export default Experience;
