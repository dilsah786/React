import React from "react";
import { useState } from "react";
import Show from "./Show";

const Fetch = () => {
  const [apidata, setApidata] = useState([]);

  const fetchData = async () => {
    let result = await fetch(`https://tours-data-3ajf.onrender.com/Tours`);
    let res = await result.json();
    setApidata(res);
    //console.log(data)
  };
  console.log(apidata);
  //fetchData();
  return (
    <div>
      <button onClick={fetchData}>Click Me</button>

      {apidata.map((elem) => {
       

        <Show key={elem.id} elem={elem} />;
      })}
    </div>
  );
};

export default Fetch;
