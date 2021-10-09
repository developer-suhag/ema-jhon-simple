import { faGithub, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="login">
      <div>
        <div className="login-form">
          <h3 style={{ marginBottom: "20px", fontSize: 24 }}>Log-In</h3>
          <form onSubmit="">
            <input
              className="input-filed"
              type="text"
              id="name"
              placeholder="Your Name"
            />
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
            <input
              className="input-filed"
              type="password"
              id="password"
              placeholder="Re-enter Password"
            />
            <input type="submit" value="Login" className="regular-btn" />
            <p>
              Already have an account? <Link to="login">Login</Link>
            </p>
          </form>
        </div>
        <div className="social-login">
          <p>Or LogIn using any of this</p>
          <div className="social-icon">
            <span className="social">
              <Link>
                <FontAwesomeIcon icon={faGoogle} />
              </Link>
            </span>
            <span className="social">
              <Link>
                <FontAwesomeIcon icon={faGithub} />
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
