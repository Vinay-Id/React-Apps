import React, { useState, useEffect } from "react";

const Products = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products/1");
        const json = await response.json();
        setData(json);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {data ? (
        <>
          <h1>{data.title}</h1>
          <p>{data.description}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Products;