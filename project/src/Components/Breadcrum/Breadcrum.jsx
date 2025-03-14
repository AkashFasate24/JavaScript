import React from "react";
import "./Breadcrum.css";
const Breadcrum = (props) => {
  const { product } = props;
  return (
    <div className="breadcrum">
      HOME
      <img src="" alt="arrowicon" />
      SHOP <img src="" alt="arrowicon" />
      {product.category} <img src="" alt="" />
      {product.name} <img src="" alt="" />
    </div>
  );
};

export default Breadcrum;
