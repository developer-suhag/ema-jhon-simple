import { faGithub, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const SignUp = () => {
  const { loginWithEmail } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const { Name, Email, Password } = data;
    console.log(Name, Email);
    loginWithEmail(Name, Email, Password);
  };
  return (
    <div className="login">
      <div>
        <div className="login-form">
          <h3 style={{ marginBottom: "20px", fontSize: 24 }}>Log-In</h3>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              className="input-filed"
              type="text"
              placeholder="Name"
              {...register("Name", { required: true, maxLength: 80 })}
            />
            {errors.Name && (
              <span className="error">This field is required</span>
            )}
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
            <input
              className="input-filed"
              type="password"
              placeholder="Re-Enter Password"
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

            <input className="regular-btn" type="submit" value="Sign Up" />
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
