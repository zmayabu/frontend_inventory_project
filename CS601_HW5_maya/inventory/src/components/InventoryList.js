import React from "react";
import InventoryItem from "./InventoryItem";

const InventoryList = ({ items }) => {
  return (
    <div>
      <h2>Makeup Products</h2>
      <div className="inventory-list">
        {items.length > 0 ? (
          items.map((item) => (
            <InventoryItem
              key={item.sku} 
              sku={item.sku}
              name={item.name}
              qty={item.qty}
              price={item.price}
              image={item.image}
            />
          ))
        ) : (
          <p>No items available.</p>
        )}
      </div>
    </div>
  );
};

export default InventoryList;
