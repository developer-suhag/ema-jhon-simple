import React from "react";
import logo from "../../images/logo.png";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <img className="logo" src={logo} alt="" />
      <nav className="nav-bar">
        <a href="/shop">Shop</a>
        <a href="/orders">Order Review</a>
        <a href="/inventory">Manage Inventroy Here</a>
      </nav>
      <div className="serach-cart">
        <input type="search" name="" id="" placeholder="type here to search" />
        <span></span>
      </div>
    </div>
  );
};

export default Header;
