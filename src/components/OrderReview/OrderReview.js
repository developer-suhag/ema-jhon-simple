import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMoneyCheckAlt,
  faShippingFast,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import useCart from "../../hooks/useCart";
import useProducts from "../../hooks/useProducts";
import { clearTheCart, deleteFromDb } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import ReviewItem from "../ReviewItem/ReviewItem";
import { useHistory } from "react-router";

const OrderReview = () => {
  const [products] = useProducts();
  const [cart, setCart] = useCart(products);
  const history = useHistory();
  const handleRemove = (key) => {
    const newCart = cart.filter((product) => product.key !== key);
    setCart(newCart);
    deleteFromDb(key);
  };
  // handle Place Order
  const handleShipping = () => {
    history.push("/shipping");
    // setCart([]);
    // clearTheCart();
  };
  return (
    <div className="shop-contaner">
      <div className="product-container">
        {cart.map((product) => (
          <ReviewItem
            key={product.key}
            product={product}
            handleRemove={handleRemove}
          ></ReviewItem>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart}>
          <button onClick={handleShipping} className="regular-btn">
            {" "}
            <span className="icon">
              <FontAwesomeIcon icon={faShippingFast} />
            </span>{" "}
            Proced to shipping
          </button>
        </Cart>
      </div>
    </div>
  );
};

export default OrderReview;
