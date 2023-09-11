import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

const Products = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(4);
  const [order, setOrder] = useState("");
  const [sort1, setSort1] = useState(false);
  const [filterBy, setFilterBy] = useState("");
  const [searchParam, setSearchParam] = useSearchParams();

  console.log(data);
  console.log(filterBy);



  console.log(filterBy);

  useEffect(() => {
    let url = `http://localhost:8080/insta?_page=${page}&_limit=${limit}&`;

    if (order && filterBy) {
      url += `_sort=year&_order=${order === "asc" ? "asc" : "desc"}&type=${filterBy} `;
      }
    else if (order) {
      url += `_sort=year&_order=${order === "asc" ? "asc" : "desc"}`;
    }
     else if (filterBy) {
      url += `type=${filterBy}`;
    }

    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        setData(res);
      });
  }, [filterBy, order, page, limit]);

  useEffect(() => {
    const paramObj = { page, limit, filterBy, order, sort };
    setSearchParam(paramObj);
  }, [page, limit, filterBy, order]);

  console.log(order);
  return (
    <div>
      <h1>Products</h1>
      <div>
        <button onClick={() => setOrder("asc")}>Sort By Ascending</button>
        <button onClick={() => setOrder("desc")}>Sort By Descending</button>
      </div>
      <div>
        <button onClick={() => setFilterBy("movie")}>Filter By Movie</button>
        <button onClick={() => setFilterBy("game")}>Filter By Game</button>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)" }}>
        {data?.map((elem) => {
          return (
            <div
              key={elem.id}
              style={{
                border: "2px solid red",
                margin: "20px",
                padding: "20px",
                borderRadius: "20px",
              }}
            >
              <img src={elem.poster} />
              <h1> {elem.title}</h1>
              <h3>{elem.type}</h3>
              <p>{elem.year} </p>
              <p>{elem.rating} </p>
              <Link to={`/product/${elem.id}`}>More Details</Link>
            </div>
          );
        })}
      </div>
      <button onClick={() => setPage(page - 1)} disabled={page === 1}>
        Prev
      </button>
      <button>{page}</button>
      <button onClick={() => setPage(page + 1)}>Next</button>
    </div>
  );
};

export default Products;
