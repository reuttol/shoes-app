import React,{useState} from "react";

const EditRow = ({ listItem, cancelItem, updateItem }) => {
  const [shoe, setShoe] = useState({
    brand: listItem.brand,
    size: listItem.size,
    color: listItem.color,
    price: listItem.price,
    id: listItem.id
  });

  const updateKey = (e) => {
    const val = e.target.value;
    setShoe({ ...shoe, [e.target.name]: val });
  };

  const renderButtons = () => {
    return (
      <div className="row__btns">
        <button onClick={() => updateItem(shoe)}>Save</button>
        <button onClick={cancelItem}>Cancel</button>
      </div>
    );
  };
  return (
    <>
      <div className="row__details">
        <input
          className="row__details--brand"
          name="brand"
          value={shoe.brand}
          onChange={updateKey}
          placeholder="Brand"
        />
        <input
          className="row__details--size"
          name="size"
          value={shoe.size}
          onChange={updateKey}
          placeholder="Size"
        />
        <input
          className="row__details--color"
          name="color"
          value={shoe.color}
          onChange={updateKey}
          placeholder="Color"
        />
        <input
          className="row__details--price"
          name="price"
          value={shoe.price}
          onChange={updateKey}
          placeholder="Price"
        />
      </div>
      {renderButtons()}
    </>
  );
};

export default EditRow;
