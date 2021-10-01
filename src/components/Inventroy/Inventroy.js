import React from "react";
import "./Inventory.css";
import sleeping from "../../images/sleeping.jpg";
const Inventroy = () => {
  return (
    <div className="inventory">
      <h3 className="sleeping">Developer is sleeping</h3>
      <img src={sleeping} alt="" />
    </div>
  );
};

export default Inventroy;
