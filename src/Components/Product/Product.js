import React from "react";
import "./Product.css";

const Product = (props) => {
  // console.log(props);
  const { img, name, seller, price, stock } = props.product;
  return (
    <div className="product">
      <div className="product-img">
        <img src={img} alt="" />
      </div>
      <div className="product-detail">
        <h4 className="product-name">{name}</h4>
        <br />
        <p><small>by: {seller}</small></p>
        <p>${price}</p>
        <p><small>Only {stock} left in stock - Order soon</small></p>
      </div>
    </div>
  );
};

export default Product;
