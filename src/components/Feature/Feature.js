import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import "./Feature.css";

const Feature = (props) => {
  const { description, value } = props.feature;
  return (
    <div>
      <li className="feature-item">
        <span className="icon">
          <FontAwesomeIcon icon={faCheck} />
        </span>
        {description} : <b>{value}</b>
      </li>
    </div>
  );
};

export default Feature;
