import React from "react";
import "./SearchBar.css";

function SearchBar() {
  return (
    <div>
      <form onSubmit>
        <input className="SearchBar-input" type="text" placeholder="Search" />
      </form>
    </div>
  );
}

export default SearchBar;
