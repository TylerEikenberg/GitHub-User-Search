import React from "react";
import "./HomePage.css";

function HomePage() {
  return (
    <div>
      <div className="HomePage-container">
        <h1 className="HomePage-title">GitHub User Search</h1>
      </div>
      <div className="HomePage-container">
        <h2 className="HomePage-title">
          Search for any GitHub user and get their stats, including number of
          repos and followers.
        </h2>
      </div>
    </div>
  );
}

export default HomePage;
