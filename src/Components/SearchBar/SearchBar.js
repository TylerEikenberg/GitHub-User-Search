import React from "react";
import "./SearchBar.css";

function SearchBar() {
  return (
    <div>
      <form onSubmit>
        <label>Search</label>
        <input type="text" placeholder="User Name" />
      </form>
    </div>
  );
}

export default SearchBar;
