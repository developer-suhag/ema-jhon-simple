import React from "react";
import "./Login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faGithub } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Login = () => {
  const { signInUsingGoogle, signInUsingGithub, error } = useAuth();
  return (
    <div className="login">
      <div>
        <div className="login-form">
          <h3 style={{ marginBottom: "20px", fontSize: 24 }}>Log-In</h3>
          <form onSubmit="">
            <input
              className="input-filed"
              type="email"
              id="email"
              placeholder="Your Email"
            />
            <input
              className="input-filed"
              type="password"
              id="password"
              placeholder="Your Password"
            />
            <input type="submit" value="Login" className="regular-btn" />
            <p>
              New to Ema-John? <Link to="signup">Create an account</Link>
            </p>
            <p>{error}</p>
          </form>
        </div>
        <div className="social-login">
          <p>Or LogIn using any of this</p>
          <div className="social-icon">
            <button onClick={signInUsingGoogle} className="social">
              <FontAwesomeIcon icon={faGoogle} />
            </button>

            <button onClick={signInUsingGithub} className="social">
              <FontAwesomeIcon icon={faGithub} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
