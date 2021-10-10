import React from "react";
import "./Login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faGithub } from "@fortawesome/free-brands-svg-icons";
import { Link, useHistory, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useForm } from "react-hook-form";

const Login = () => {
  const { signInUsingGoogle, signInUsingGithub, loggedUser } = useAuth();
  const location = useLocation();
  const history = useHistory();
  const redriect_uri = location.state?.from || "/shop";

  const handleGoogleLogin = () => {
    signInUsingGoogle().then((result) => {
      history.push(redriect_uri);
    });
  };
  const handleGithubLogin = () => {
    signInUsingGithub().then((result) => {
      history.push(redriect_uri);
    });
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const { Email, Password } = data;
    loggedUser(Email, Password);
  };
  return (
    <div className="login">
      <div>
        <div className="login-form">
          <h3 style={{ marginBottom: "20px", fontSize: 24 }}>Log-In</h3>

          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              className="input-filed"
              type="email"
              placeholder="Email"
              {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
            />
            {errors.Email && (
              <span className="error">This field is required</span>
            )}
            <input
              className="input-filed"
              type="password"
              placeholder="Password"
              {...register("Password", {
                required: true,
                pattern:
                  /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8})/i,
              })}
            />
            {errors.Password && (
              <span className="error">
                Password Should have 8 characters. Including 1 lowercase, 1
                uppercase, 1 number, 1 special character.
              </span>
            )}

            <input className="regular-btn" type="submit" value="Login" />
            <p>
              New to Ema-John? <Link to="signup">Create an account</Link>
            </p>
          </form>
        </div>
        <div className="social-login">
          <p>Or LogIn using any of this</p>
          <div className="social-icon">
            <button onClick={handleGoogleLogin} className="social">
              <FontAwesomeIcon icon={faGoogle} />
            </button>

            <button onClick={handleGithubLogin} className="social">
              <FontAwesomeIcon icon={faGithub} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
