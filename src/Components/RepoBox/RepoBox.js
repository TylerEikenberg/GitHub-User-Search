import React from "react";
import { StatBox } from "../";
import "./RepoBox.css";

function RepoBox({ repoData }) {
  console.log(repoData);
  return (
    <div className="RepoBox-container">
      <span>
        <a href={repoData.html_url}>{repoData.name}</a>
      </span>
      <span className="RepoBox-stats-container">
        <StatBox number={repoData.stargazers_count} stat={"Stars"} />
        <StatBox number={repoData.forks} stat={"Forks"} />
        <StatBox number={repoData.watchers} stat={"Watchers"} />
      </span>
    </div>
  );
}

export default RepoBox;
