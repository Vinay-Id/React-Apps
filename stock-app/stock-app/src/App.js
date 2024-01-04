import React, { useState, useEffect } from 'react';
import axios from 'axios';
import StockCard from './StockCard';

const App = () => {
  const [stocks, setStocks] = useState([]);

  useEffect(() => {
    const fetchStocks = async () => {
      try {
        const response = await axios.get(
          `https://api.polygon.io/v2/aggs/ticker/AAPL/range/1/day/2022-01-01/2023-01-01?apiKey=${process.env.REACT_APP_API_KEY}`
        );
        setStocks(response.data.results);
      } catch (error) {
        console.error('Error fetching stocks:', error);
      }
    };

    fetchStocks();
  }, []);

  return (
    <div className="App">
      <h1>Stock Showing App</h1>
      <div className="stock-container">
        {stocks.map((stock) => (
          <StockCard key={stock.t} stock={stock} />
        ))}
      </div>
    </div>
  );
};

export default App;
