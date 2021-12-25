import React from "react";

import "./row.css";

const Row = ({ listItem, hover, editItem, deleteItem}) => {
 
  const renderButtons = () => {
    return (
      <div
        className="row__btns"
      >
        <button onClick={() => editItem(listItem)}>Edit</button>
        <button onClick={() => deleteItem(listItem.id)}>Delete</button>
      </div>
    );
  };
  return (
    <>
      <div className="row__details">
        <div className="row__details--brand">{`Brand: ${listItem.brand}`}</div>
        <div className="row__details--size">{`Size: ${listItem.size}`}</div>
        <div className="row__details--color">{`Color: ${listItem.color}`}</div>
        <div className="row__details--price">{`Price: ${listItem.price}$`}</div>
      </div>
      {hover && renderButtons()}
    </>
  );
};

export default Row;
