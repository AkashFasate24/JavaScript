import React from "react";
import "./Offers.css";
const Offers = () => {
  return (
    <div className="offers">
      <div className="offers-left">
        <h1>Exclusive</h1>
        <h1>Offers for you</h1>
        <p>ONLY ON BEST SELLERS PRODUCTS</p>
        <button>Check Now</button>
      </div>
      <div className="offers-right">
        <img
          src="https://static.vecteezy.com/system/resources/previews/045/603/188/large_2x/young-woman-in-sunglasses-and-summer-hat-carrying-shopping-bags-transparent-background-png.png"
          alt=""
          height="300px"
        />
      </div>
    </div>
  );
};

export default Offers;
