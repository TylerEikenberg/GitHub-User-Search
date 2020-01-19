import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUserDataAsync, fetchReposDataAsync } from "../../Redux/Actions";
import "./UserDetailsPage.css";
import { Avatar, StatBox, RepoBox } from "../../Components/";
import { mdiGithubBox } from "@mdi/js";
import Icon from "@mdi/react";

function UserDetailsPage({ match }) {
  const [username] = useState(match.params.name);
  const dispatch = useDispatch();
  const { fetchUserReducer, fetchReposReducer } = useSelector(state => state);

  useEffect(() => {
    // comment back in to fetch
    dispatch(fetchUserDataAsync(username));
    dispatch(fetchReposDataAsync(username));
  }, [username, dispatch]);

  // const { fetchUserReducer: userData } = useSelector(state => state);
  let {
    login,
    avatar_url,
    html_url,
    name,
    bio,
    public_repos,
    followers,
    following,
    created_at
  } = fetchUserReducer.userData;

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
          <a target="_blank" rel="noopener noreferrer" href={html_url}>
            <div className="UserDetailsPage-github-button">
              <Icon
                className="icon"
                path={mdiGithubBox}
                size={1.5}
                color="#C8CDD4"
              />
            </div>
          </a>
        </div>
      </header>

      <div className="UserDetailsPage-user-info">
        <ul>
          <li className="list-style udp-name-style">{name}</li>
          <li className="list-style">{bio}</li>
          <li className="list-style">
            User Since {created_at ? created_at.slice(0, 4) : null}
          </li>
          <li className="list-style">
            <a
              className="udp-link-style"
              target="_blank"
              rel="noopener noreferrer"
              href={html_url}
            >
              GitHub.com/{username}
            </a>
          </li>
        </ul>
      </div>
      <span className="udp-hr-line"></span>

      {fetchReposReducer.error ? <h3>{fetchReposReducer.error}</h3> : null}

      {fetchReposReducer.loading ? <h3>Loading...</h3> : null}
      <div className="udp-RepoBoxs-wrapper">
        {fetchReposReducer.repos.map(item => {
          return <RepoBox key={item.id} repoData={item} />;
        })}
      </div>
    </div>
  );
}

export default UserDetailsPage;
