import React from "react";
import "./SearchPage.css";
import { SearchBar } from "../../Components/";

function SearchPage() {
  return (
    <div className="SearchPage-container">
      <h2 className="SearchPage-header">Search Users on GitHub</h2>
      <div className="SearchPage-searchbar-wrapper"></div>
      <SearchBar />
    </div>
  );
}

export default SearchPage;
