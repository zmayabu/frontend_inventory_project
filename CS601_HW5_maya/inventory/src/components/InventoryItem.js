import React from "react";

const InventoryItem = ({ sku, name, qty, price, image }) => {
  return (
    <div className="inventory-item">
      <img src={image} alt={name} className="product-image" />
      <p><strong>SKU:</strong> {sku}</p>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Quantity:</strong> {qty}</p>
      <p><strong>Price:</strong> ${price.toFixed(2)}</p>
    </div>
  );
};

export default InventoryItem;
