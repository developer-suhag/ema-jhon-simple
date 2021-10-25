import React from "react";
import "./Cart.css";
const Cart = (props) => {
  const { cart } = props;

  // handle click
  // const history = useHistory();
  // const handleClick = () => {
  //   history.push("/review");
  // };

  let total = 0;
  let totalQuantity = 0;
  // let shipping = 0;
  for (const product of cart) {
    product.quantity = !product.quantity ? 1 : product.quantity;
    // if (!product?.quantity) {
    //   product.quantity = 1;
    // }

    totalQuantity += product.quantity;

    total = total + product.price * product.quantity;
    // shipping = shipping + product.quantity * 3.99;
  }
  const shipping = cart.reduce((pre, current) => pre + current.shipping, 0);

  // const total = cart.reduce((previous, product) => previous + product.price, 0);
  // const shipping = cart.length * 3.99;
  const totalBefore = total + shipping;
  const tax = (totalBefore * 10) / 100;
  const grandTotal = totalBefore + tax;
  return (
    <div className="cart-container">
      <h3>Order Summary</h3>
      <h5>
        <b>Items ordered: {totalQuantity}</b>
      </h5>
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
      {props.children}
    </div>
  );
};

export default Cart;
