import React from "react";
import { NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import logo from "../../images/logo.png";
import "./Header.css";

const Header = () => {
  const { user, logOut } = useAuth();

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
        {user.email ? (
          <button onClick={logOut} className="navlink">
            Log Out
          </button>
        ) : (
          <NavLink activeClassName="selected" to="/login">
            Login
          </NavLink>
        )}
        {user.photoURL ? (
          <img className="user-profile" src={user.photoURL} alt="" />
        ) : (
          <span style={{ color: "#fff" }}>{user.displayName}</span>
        )}
      </nav>
    </div>
  );
};

export default Header;
