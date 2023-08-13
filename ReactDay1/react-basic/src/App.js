import React from "react";
import About from "./component/About";
import { createContext } from "react";


export const MyContext = createContext();
const App = () => {
 
  return (
    <div>
      <h1>Hello I am App Component</h1>
      <MyContext.Provider value={{name:"Dilnawaz" , vill:"Kapasiya"}}>
        <About/>
      </MyContext.Provider>
      
    </div>
  );
};

export default App;
