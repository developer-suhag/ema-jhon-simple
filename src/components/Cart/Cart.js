import React from "react";
import "./Cart.css";
const Cart = (props) => {
  const { cart } = props;
  let total = 0;
  for (const product of cart) {
    total += product.price;
  }
  return (
    <div className="cart-container">
      <h3>Order Summary</h3>
      <h5>Items ordered: {cart.length}</h5>
      <div className="cart-items">
        <p>Shipping & Handling: {(cart.length * 7.99).toFixed(2)} </p>
        <p className="total">
          Total: <b>{total.toFixed(2)}</b>
        </p>
        <p>Total before tax:</p>
        <p>Estimated Tax:</p>
        <h5>Order Total</h5>
      </div>
    </div>
  );
};

export default Cart;
