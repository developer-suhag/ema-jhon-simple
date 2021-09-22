import React from "react";
import "./Product.css";

const Product = (props) => {
  const { name, img, seller, price, stock, star } = props.product;
  return (
    <div className="product">
      <div>
        <img src={img} alt="" />
      </div>
      <div>
        <h2 className="product-name">{name}</h2>
        <p className="seller">
          <small>By: {seller}</small>
        </p>
        <h4 className="price">Price: {price}</h4>
        <p className="stock">
          <small>only {stock} left in stock - order soon</small>
        </p>
      </div>
    </div>
  );
};

export default Product;
