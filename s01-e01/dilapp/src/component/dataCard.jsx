import React from "react";

const Datacard = (elem) => {
console.log(elem)
  
  return (
    <div>
      <h1>hello</h1>
        <h1>{elem.name}</h1>
        <img src={elem.image}/>
        
      
    </div>
  );
};

export default Datacard ;
