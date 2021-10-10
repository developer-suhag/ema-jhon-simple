import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import "./Shipping.css";

const Shipping = () => {
  const { user } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="shipping">
      <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>
        <input
          defaultValue={user.displayName}
          type="text"
          placeholder="Name"
          {...register("Name", { required: true, maxLength: 80 })}
        />
        {errors.Name && <span className="error">This field is required</span>}
        <input
          defaultValue={user.email}
          type="email"
          placeholder="Email"
          {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
        />
        {errors.Email && <span className="error">This field is required</span>}
        <input
          type="text"
          placeholder="Address"
          {...register("address", { required: true })}
        />
        {errors.address && (
          <span className="error">This field is required</span>
        )}
        <input
          type="text"
          placeholder="City"
          {...register("City", { required: true })}
        />
        {errors.City && <span className="error">This field is required</span>}
        <input
          type="tel"
          placeholder="Mobile number"
          {...register("MobileNumber", { required: true, maxLength: 12 })}
        />
        {errors.MobileNumber && (
          <span className="error">This field is required</span>
        )}

        <input className="regular-btn" type="submit" />
      </form>
      {/* <form onSubmit={handleSubmit(onSubmit)}>
        <input defaultValue="test" {...register("example")} />

        <input {...register("exampleRequired", { required: true })} />
        {errors.exampleRequired && <span>This field is required</span>}

        <input type="submit" />
      </form> */}
    </div>
  );
};

export default Shipping;
