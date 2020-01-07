import React from "react";
import { useSelector } from "react-redux";
import "./UserDetailsPage.css";
import { Avatar, StatBox } from "../../Components/";

function UserDetailsPage() {
  const { fetchUserReducer: userData } = useSelector(state => state);
  console.log(userData);
  return (
    <div className="UserDetailsPage-container">
      <header className="UserDetailsPage-user-header">
        <div className="UserDetailsPage-avatar-container">
          <Avatar image={userData.userData.avatar_url} />
        </div>
        <div className="UserDetailsPage-stats-container">
          <StatBox number={142} stat={"Repos"}></StatBox>
          <StatBox number={20} stat={"Followers"}></StatBox>
          <StatBox number={92} stat={"Following"}></StatBox>
        </div>
      </header>
    </div>
  );
}

export default UserDetailsPage;
