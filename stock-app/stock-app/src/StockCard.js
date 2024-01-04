import React from "react";
import "./StockCard.css";
const StockCard = ({ stock }) => {
  console.log(stock);
  return (
    <div className="stock-card">
      <h2>{stock.symbol}</h2>
      <p>Price: ${stock.close}</p>
      <p>Volume: {stock.volume}</p>
    </div>
  );
};

export default StockCard;
