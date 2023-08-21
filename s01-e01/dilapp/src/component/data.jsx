import React, { useEffect, useState } from "react";
import Datacard from "./dataCard";

const Data = () => {
  const [data, setData] = useState([]);

  async function fetchData() {
    try {
      let result = await fetch(`https://tours-data-3ajf.onrender.com/Tours`);
      let res = await result.json();
      setData(res);
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      {data?.map((elem) => {
        return <Datacard key={elem.id} {...elem} />;
      })}
    </div>
  );
};

export default Data;
