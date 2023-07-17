import React from "react";
import { useState } from "react";
import Show from "./Show";

const Fetch = () => {
  const [data, setData] = useState([]);

  const fetchData =async ()=> {
    let result = await fetch(`https://tours-data-3ajf.onrender.com/Tours`);
    let res = await result.json();
    setData(res);

  }
  console.log(data);
  return (
    <div>
      <button>Click me</button>
      {data?.map((elem) => {
        <Show key={elem.id} {...elem} />;
      })}:
      
    </div>
  );
};

export default Fetch;
