import React from "react";
import "./Popular.css";
import Item from "../Item/Item";
const Popular = () => {
  return (
    <div className="popular">
      <h1>POPULAR IN WOMEN</h1>
      <hr />
      <div className="popular-item">
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

export default Popular;
