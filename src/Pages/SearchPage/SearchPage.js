import React from "react";
import "./SearchPage.css";
import { SearchBar, RepoBox } from "../../Components/";

function SearchPage() {
  return (
    <div className="SearchPage-container">
      <h2 className="SearchPage-header">Search Users on GitHub</h2>
      <div className="SearchPage-searchbar-wrapper">
        <SearchBar />
      </div>
      <RepoBox />
    </div>
  );
}

export default SearchPage;
