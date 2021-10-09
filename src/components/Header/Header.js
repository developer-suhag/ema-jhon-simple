import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../images/logo.png";
import "./Header.css";

const Header = () => {
  // cart
  // const handleCart = (product) => {
  //   console.log("clicked");
  // };

  return (
    <div className="header">
      <img className="logo" src={logo} alt="" />
      <nav className="nav-bar">
        <NavLink activeClassName="selected" to="/shop">
          Shop
        </NavLink>
        <NavLink activeClassName="selected" to="/review">
          Order Review
        </NavLink>
        <NavLink activeClassName="selected" to="/inventory">
          Manage Inventroy Here
        </NavLink>
        <NavLink activeClassName="selected" to="/login">
          Login
        </NavLink>
      </nav>
    </div>
  );
};

export default Header;
