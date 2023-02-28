import React from "react";
import "./ShopItem.css";

const ShopItem = (props) => {
  return (
    <div className="Shop-item">
      <div className="Shop-item__images">
        <img src={props.images}></img>
      </div>

      <div className="Shop-item__description">
        <h2> {props.title}</h2>
        <h4> {props.description}</h4>
        <div className="Shop-item__brand">
          Brand: {props.brand} <br /> Stock Left: {props.stock} <br /> Rating:
          {props.rating}
        </div>
        <div className="Shop-item__price">Price: ${props.price}</div>
        <div className="Shop-item__discount">
          Discount: {props.discountpercentage} % off
        </div>
      </div>
    </div>
  );
};

export default ShopItem;
