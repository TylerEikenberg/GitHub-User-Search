import React from "react";
import "./Avatar.css";

function Avatar({ image }) {
  return <img className="Avatar-image-styles" src={image} alt="user" />;
}

export default Avatar;
