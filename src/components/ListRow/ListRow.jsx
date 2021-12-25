import React, { useState } from "react";
import EditRow from "../EditRow/EditRow";
import Row from "../Row/Row";

const ListRow = ({ listItem, deleteListItem, update }) => {
  const [hoverRow, setHoverRow] = useState(false);
  const [editRow, setEditRow] = useState(false);

  const toggleHover = () => {
    setHoverRow(!hoverRow);
  };

  const updateItem = (shoe) =>{
    setEditRow(false);
    update(shoe);
  }

  return (
    <div
      className="row-container"
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}
    >
      {!editRow && (
        <Row
          listItem={listItem}
          hover={hoverRow}
          editItem={() => setEditRow(true)}
          deleteItem={deleteListItem}
        />
      )}
      {editRow && <EditRow listItem={listItem} cancelItem={() => setEditRow(false)} updateItem={updateItem} />}
    </div>
  );
};

export default ListRow;
