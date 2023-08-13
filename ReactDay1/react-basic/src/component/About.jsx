import React, { useContext } from 'react'
import { MyContext } from  "../App";

const About = () => {
 const {name , vill} = useContext(MyContext);
  return (
    <div>
    <h2>hello</h2>
    <h1>{name} {vill} </h1>
    </div>
  )
}

export default About