import React from "react";
import error from "../../images/404.jpg";

const PageNotFound = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <img style={{ width: "40%" }} src={error} alt="" />
    </div>
  );
};

export default PageNotFound;
