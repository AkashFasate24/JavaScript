import React from "react";
import "./Item.css";
import { Link } from "react-router-dom";
const Item = (props) => {
  return (
    <div className="item">
      <Link to={`/product/${props.id}`}>
        <img
          src="https://static.vecteezy.com/system/resources/previews/002/037/496/non_2x/woman-holding-multi-coloured-shopping-bags-free-photo.jpg"
          alt=""
          height="200px"
        />
      </Link>

      <p>{props.name}</p>
      <div className="item-prices">
        <div className="item-price-new">${props.new_price}</div>
        <div className="item-price-old">${props.old_price}</div>
      </div>
    </div>
  );
};

export default Item;
