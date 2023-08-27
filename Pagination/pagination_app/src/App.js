import logo from "./logo.svg";
import "./App.css";
import Pagination from "./Component/Pagination";
import { useEffect, useState } from "react";

function App() {
  const [copyData, setCopyData] = useState([]);
  const [data, setData] = useState([]);
  const [currPage, setCurrPage] = useState(1);
  const [limit, setLimit] = useState(5);
  const [selectedOption, setSelectedOption] = useState();

  // handling the Page_Limit option for the current page

  const handleOptionClick = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);
    setLimit(selectedValue);
    // Perform any action you want based on the selected value
    console.log("Selected option:", selectedValue);
  };

  // Handling the Api call and fetching the Data.........

  const fetchApiData = async (currPage, limit) => {
    try {
      const result = await fetch(
        `http://localhost:3000/social_media?_page=${currPage}&_limit=${limit}`
      );
      const response = await fetch(`http://localhost:3000/social_media`);
      const responseJson = await response.json();
      setCopyData(responseJson);
      const res = await result.json();
      setData(res);
    } catch (err) {
      console.log(err);
    }
  };
  console.log(copyData);
  console.log(data);

  useEffect(() => {
    fetchApiData(currPage, limit);
  }, [currPage, limit]);

  //  Setting the page value for diffrenet page in case on Next button and Prev button
  function handleNextBtn() {
    setCurrPage(currPage + 1);
  }
  function handlePreBtn() {
    setCurrPage(currPage - 1);
  }

  // handling the Dynamic Page Buttons

  let total_page = Math.ceil(copyData.length / limit);
  console.log("total_page  -> " + total_page);


  for (let i = 1; i <= total_page; i = i++) {
    console.log(i);
  }




  return (
    <div className="App">
      <h1>Hello Insta People</h1>
      <div>
        <button onClick={handlePreBtn} disabled={currPage === 1}>
          Prev{" "}
        </button>
        <button>{currPage}</button>
        <button onClick={handleNextBtn} disabled={currPage === total_page}>
          Next
        </button>
      </div>
      <h5>Limit per Page</h5>
      <select value={selectedOption} onChange={handleOptionClick}>
        <option>5</option>
        <option>10</option>
        <option>20</option>
        <option>30</option>
        <option>40</option>
        <option>50</option>
        <option>60</option>
        <option>70</option>
        <option>80</option>
        <option>90</option>
        <option>100</option>
        <option>150</option>
        <option>200</option>
        <option>500</option>
      </select>

      {data.map((users) => {
        return <Pagination key={users.id} {...users} />;
      })}
    </div>
  );
}

export default App;
