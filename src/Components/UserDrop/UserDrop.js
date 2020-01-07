import React from "react";
import "./UserDrop.css";
import { Link } from "react-router-dom";
/**
 * import navlink, make link to users page
 */
function UserDrop({ name, image }) {
  return (
    <Link to={`/user/${name}`}>
      <div className="UserDrop-wrapper">
        <div className="UserDrop-image-container">
          <img className="UserDrop-image-styles" src={image} alt={name} />
        </div>
        <div className="UserDrop-name-container">{name}</div>
      </div>
    </Link>
  );
}

export default UserDrop;
