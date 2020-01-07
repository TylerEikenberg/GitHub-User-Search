import React from "react";
import "./UserDrop.css";
/**
 * import navlink, make link to users page
 */
function UserDrop({ name, image }) {
  return (
    <div className="UserDrop-wrapper">
      <div className="UserDrop-image-container">
        <img className="UserDrop-image-styles" src={image} alt={name} />
      </div>
      <div className="UserDrop-name-container">{name}</div>
    </div>
  );
}

export default UserDrop;
