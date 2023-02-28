import React from "react";
import "./Shop.css";
import ShopItem from "./ShopItem";

const Shop = (props) => {
  return (
    <div className="Shop">
      {props.item.map((shop) => {
        return (
          <ShopItem
            key={shop.id}
            title={shop.title}
            description={shop.description}
            price={shop.price}
            discountpercentage={shop.discountPercentage}
            rating={shop.rating}
            stock={shop.stock}
            brand={shop.brand}
            category={shop.category}
            images={shop.images[0]}
          />
        );
      })}
    </div>
  );
};

export default Shop;
