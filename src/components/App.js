import React, { useState, useEffect } from "react";
import ListRow from "./ListRow/ListRow";
import api from "../api";

import "./app.css";
import EditRow from "./EditRow/EditRow";

const App = () => {
  const [data, setData] = useState([]);
  const [addRow, setAddRow] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const d = await api.getItems();
      setData(d);
    };

    fetchData();
  }, []);

  const handlePlusClick = () => {
    setAddRow(true);
  };

  const deleteListItem = async (id) => {
    await api.deleteItem(id);
    const d = await api.getItems();
    setData(d);
  };

  const updateListItem = async (listItem) => {
    await api.putItem(listItem);
    const d = await api.getItems();
    setData(d);
  };

  const createNewItem = async (listItem) =>{
    await api.postItem(listItem);
    const d = await api.getItems();
    setData(d);
  }

  return (
    <div className="app">
      <div className="header-container">
        <h4>My Shoes List</h4>
        <button className="plus-btn" onClick={handlePlusClick}><i className="fal fa-plus"> Add Shoe</i></button>
      </div>
      <div className="todo-list">
        {data.map((entry) => (
          <ListRow
            key={entry.id}
            listItem={entry}
            deleteListItem={deleteListItem}
            update={updateListItem}
          />
        ))}
        <div className="row-container">
        {addRow && (
          <EditRow
            listItem={{ brand: "", price: "", size: "", color: "" }}
            cancelItem={() => setAddRow(false)}
            updateItem={createNewItem}
          />
        )}
        </div>
      </div>
    </div>
  );
};

export default App;