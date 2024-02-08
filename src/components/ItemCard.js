import React from 'react';

const ItemCard = ({ ProductName, brand, price }) => {
  return (
    <div className="item-card">
      <h2>{ProductName}</h2>
      <p>brand: {brand}</p>
      <p>price: {price} €</p>
    </div>
  );
};

export default ItemCard;
