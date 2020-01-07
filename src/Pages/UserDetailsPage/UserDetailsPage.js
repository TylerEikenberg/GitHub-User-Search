import React from "react";
import { useSelector } from "react-redux";
import "./UserDetailsPage.css";
import { Avatar } from "../../Components/";

function UserDetailsPage() {
  const { fetchUserReducer: userData } = useSelector(state => state);
  console.log(userData);
  return (
    <div className="UserDetailsPage-container">
      <Avatar image={userData.userData.avatar_url} />
    </div>
  );
}

export default UserDetailsPage;
