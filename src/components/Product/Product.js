import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faStar } from "@fortawesome/free-solid-svg-icons";
import "./Product.css";
import Feature from "../Feature/Feature";

const Product = (props) => {
  const { name, img, seller, price, stock, star, features } = props.product;
  return (
    <div className="product">
      <div>
        <img src={img} alt="" />
      </div>
      <div>
        <h2 className="product-name">{name}</h2>
        <div className="product-details">
          <div>
            <p className="seller">
              <small>By: {seller}</small>
            </p>
            <h4 className="price">Price: ${price}</h4>
            <p className="stock">
              <small>only {stock} left in stock - order soon</small>
            </p>
            <button
              onClick={() => props.handleCart(props.product)}
              className="regular-btn"
            >
              <span className="icon">
                <FontAwesomeIcon icon={faShoppingCart} />
              </span>
              Add to cart
            </button>
          </div>
          <div className="feature-box">
            <span className="star">
              <FontAwesomeIcon icon={faStar} />
            </span>
            <span className="star">
              <FontAwesomeIcon icon={faStar} />
            </span>
            <span className="star">
              <FontAwesomeIcon icon={faStar} />
            </span>
            <span className="star">
              <FontAwesomeIcon icon={faStar} />
            </span>
            <span className="star">
              <FontAwesomeIcon icon={faStar} />
            </span>
            <h4 className="feature">Features</h4>
            <ul>
              {features.map((feature) => (
                <Feature feature={feature}></Feature>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
