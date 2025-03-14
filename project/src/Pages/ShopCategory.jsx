import React, { useContext } from "react";
import "./ShopCategory.css";
import { ShopContext } from "../Context/ShopContext";
import Item from "../Components/Item/Item";
import dp from "../Components/Assets/dropdown.png";

const ShopCategory = ({ banner, category }) => {
  const { all_product } = useContext(ShopContext);

  return (
    <div className="shop-category">
      <img className="shopcategory-banner" src={banner} alt="banner" />
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className="shopcategory-sort">
          sort by <img src={dp} alt="dropdown icon" height="20px" />
        </div>
      </div>
      <div className="shopcategory-produts">
        {/* {all_product.map((item, i) => {
          if (category === item.category) {
            return (
              <Item
                name="Bring the Happiness to Home"
                new_price="111"
                old_price="333"
              />
            );
          } else {
            return null;
          }
        })} */}
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
      <div className="shopcategory-loadmore">Expore More</div>
    </div>
  );
};

export default ShopCategory;
