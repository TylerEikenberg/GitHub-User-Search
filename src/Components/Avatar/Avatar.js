import React from "react";
import "./Avatar.css";

function Avatar({ image }) {
  return (
    <img
      data-testid="Avatar"
      className="Avatar-image-styles"
      src={image}
      alt="user"
    />
  );
}

export default Avatar;
