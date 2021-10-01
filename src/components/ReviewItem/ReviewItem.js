import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const ReviewItem = (props) => {
  const { name, seller, stock, price, key, quantity, shipping } = props.product;
  return (
    <div className="product">
      <div>
        <h2 className="product-name">{name}</h2>
        <div className="product-details">
          <div>
            <p className="seller">
              <small>By: {seller}</small>
            </p>
            <h4 className="price">Price: ${price}</h4>
            <h5>Quantity: {quantity}</h5>
            <button
              onClick={() => props.handleRemove(key)}
              className="regular-btn"
            >
              <span className="icon">
                <FontAwesomeIcon icon={faTrash} />
              </span>
              Remove
            </button>
          </div>
          <div className="feature-box">
            <h4 className="feature">Shipping rate</h4>
            <p>{shipping}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewItem;
