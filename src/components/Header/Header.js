import React from "react";
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
    </div>
  );
};

export default Header;
