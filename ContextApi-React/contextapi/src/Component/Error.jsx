import React from 'react'
import { NavLink } from 'react-router-dom'
const Error = () => {
  return (
    <div>
        <h1>
            Error 404 Not Found !  
        </h1>
        <NavLink to="/"><button>Home</button></NavLink>
        
    </div>
  )
}

export default Error