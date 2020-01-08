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
        <StatBox />
        <StatBox />
        <StatBox />
      </span>
    </div>
  );
}

export default RepoBox;
