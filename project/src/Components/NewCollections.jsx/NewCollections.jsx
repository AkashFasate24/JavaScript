import React from "react";
import "./NewCollections.css";
import Item from "../Item/Item";
const NewCollections = () => {
  return (
    <div className="newcollections">
      <h1>NEW COLLECTIONS</h1>
      <hr />
      <div className="collections">
        <Item
          name="Bring the Happiness to Home"
          new_price="111"
          old_price="333"
        />
        <Item
          name="Bring the Happiness to Home"
          new_price="111"
          old_price="333"
        />
        <Item
          name="Bring the Happiness to Home"
          new_price="111"
          old_price="333"
        />
      </div>
    </div>
  );
};

export default NewCollections;
