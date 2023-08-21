import React from 'react'
import './Button.css'
import { useState } from 'react';
const Button = () => {
    const [count , setCount] = useState(0);
    const user = {
        name: 'Hedy Lamarr',
        imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
        imageSize: 90,
      };

      function alertButton(){
      setCount(count+1);
        alert("I am clicked by Dilnawaz");
      
      }

  return (
    <div>
        
        <button className="btn" onClick={alertButton}>I am clicked {count} times</button>
        <button className="btn" onClick={alertButton}>I am an alert Button Button is clicked {count} times</button>
     
        <img src = {user.imageUrl} alt={"Photo of "+ user.name}  style={{
          width: user.imageSize,
          height: user.imageSize
        }}/>

    </div>
  )
}

export default Button