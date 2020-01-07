import React from "react";
import { useSelector } from "react-redux";
import "./UserDetailsPage.css";

function UserDetailsPage() {
  const { fetchUserReducer: userData } = useSelector(state => state);
  console.log(userData);
  return (
    <div className="UserDetailsPage-container">
      <h2 className="UserDetailsPage-header">UserDetailsPage</h2>
    </div>
  );
}

export default UserDetailsPage;
