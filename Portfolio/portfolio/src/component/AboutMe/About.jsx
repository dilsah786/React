import React from 'react'
import "./About.css"
const About = () => {
  return (
    <div className='about-component'>
    <div>
    <img className="aboutimage" src="https://avatars.githubusercontent.com/u/120841935?v=4" />
    </div>
    <div className='about_text'>
    <h1>ABOUT ME</h1>
        <h3 className="about">
          I'm proficient in HTML, CSS, and JavaScript, which form the foundation
          of any web development project. <br />
          And I possess a strong blend of technical skills, creativity, and
          problem-solving abilities to bring digital <br /> concepts to life on
          the internet.
        </h3>
      
      <div className='hire-resume-Div'>
        <div>
            <button className='btn'>HIRE ME</button>
        </div>
        <div>
            <button className='btn'>RESUME</button>
        </div>
       </div>
       </div>
    </div>
  )
}

export default About