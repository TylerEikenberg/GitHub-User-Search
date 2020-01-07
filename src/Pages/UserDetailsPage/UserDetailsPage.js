import React from "react";
import { useSelector } from "react-redux";
import "./UserDetailsPage.css";
import { Avatar, StatBox } from "../../Components/";

function UserDetailsPage() {
  const { fetchUserReducer: userData } = useSelector(state => state);
  const {
    login,
    avatar_url,
    html_url,
    name,
    bio,
    public_repos,
    followers,
    following,
    created_at
  } = userData.userData;
  const userSince = created_at.slice(0, 4);
  return (
    <div className="UserDetailsPage-container">
      <header className="UserDetailsPage-user-header">
        <div className="UserDetailsPage-avatar-container">
          <Avatar image={avatar_url} />
        </div>

        <div className="UserDetailsPage-top-details">
          <div className="UserDetailsPage-user-name">
            <h3 className="UserDetailsPage-login-h3">{login}</h3>
          </div>
          <div className="UserDetailsPage-stats-container">
            <StatBox number={public_repos} stat={"Repos"}></StatBox>
            <StatBox number={followers} stat={"Followers"}></StatBox>
            <StatBox number={following} stat={"Following"}></StatBox>
          </div>
        </div>
      </header>

      <div className="UserDetailsPage-user-info">
        <ul>
          <li className="list-style udp-name-style">{name}</li>
          <li className="list-style">{bio}</li>
          <li className="list-style">User Since {userSince}</li>
          <li className="list-style">
            <a target="_blank" rel="noopener noreferrer" href={html_url}>
              GitHub
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default UserDetailsPage;
