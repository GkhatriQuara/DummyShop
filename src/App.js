import React, { useState, useEffect } from "react";
import Shop from "./components/Shop";
import Header from "./components/Header";

let dummy_Commerce = [];

const App = () => {
  const [commerce, setCommerce] = useState(dummy_Commerce);

  const fetchData = () => {
    fetch("https://dummyjson.com/products")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setCommerce(data.products);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <Header />
      <Shop item={commerce} />
    </div>
  );
};

export default App;
