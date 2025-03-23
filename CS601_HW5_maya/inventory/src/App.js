import React, { useState, useEffect } from "react";
import InventoryList from "./components/InventoryList";
import "./App.css"; 

const App = () => {
  const [inventory, setInventory] = useState([]);

  // Fetch inventory data from JSON
  useEffect(() => {
    fetch("/inventory.json")
      .then((response) => response.json())
      .then((data) => setInventory(data));
  }, []);

  return (
    <div className="app">
     
      <header className="header">
        <h1>Zully's Makeup Store</h1>
        <img
          src="/flowerlogo.jpg" 
          alt="Shop Logo"
          className="logo"
        />
      </header>

      
      <main>
        <InventoryList items={inventory} />
      </main>

      
      <footer className="footer">
        <p>&copy; 2024 Zully's Makeup Store. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
