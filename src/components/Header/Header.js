import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import logo from "../../images/logo.png";
import "./Header.css";

const Header = () => {
  // cart
  const handleCart = (product) => {
    console.log("clicked");
  };

  return (
    <div className="header">
      <img className="logo" src={logo} alt="" />
      <nav className="nav-bar">
        <a href="/shop">Shop</a>
        <a href="/orders">Order Review</a>
        <a href="/inventory">Manage Inventroy Here</a>
      </nav>
      <div className="search-cart">
        <div>
          <input
            type="search"
            placeholder="type here to search"
            id=""
            className="search-field"
          />
        </div>
        <div className="cart">
          <span className="icon">
            <FontAwesomeIcon icon={faShoppingCart} />
          </span>
          <span className="">0</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
