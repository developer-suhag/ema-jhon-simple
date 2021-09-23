import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./Cart.css";
const Cart = (props) => {
  const { cart } = props;
  // let total = 0;
  // for (const product of cart) {
  //   total += product.price;
  // }
  const total = cart.reduce((previous, product) => previous + product.price, 0);
  const shipping = cart.length * 3.99;
  const totalBefore = total + shipping;
  const tax = (totalBefore * 10) / 100;
  const grandTotal = totalBefore + tax;
  return (
    <div className="cart-container">
      <h3>Order Summary</h3>
      <h5>Items ordered: {cart.length}</h5>
      <div className="cart-items">
        <p className="total">Total: {total.toFixed(2)}</p>
        <p className="shipping">Shipping & Handling: {shipping.toFixed(2)} </p>
        <p className="total-before">
          Total before tax: {totalBefore.toFixed(2)}
        </p>
        <p className="tax">Estimated Tax:{tax.toFixed(2)}</p>
        <h5 className="grand-total">
          Order Total: <b>{grandTotal.toFixed(2)}</b>
        </h5>
      </div>
      <button className="regular-btn">
        <span className="icon">
          <FontAwesomeIcon icon={faShoppingCart} />
        </span>
        Review Order
      </button>
    </div>
  );
};

export default Cart;
