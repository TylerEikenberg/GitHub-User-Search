import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserDataAsync } from "../../Redux/Actions/";
import "./SearchBar.css";

function SearchBar() {
  const [username, setUsername] = useState("Username");
  const dispatch = useDispatch();
  const fetchedData = useSelector(state => ({
    data: state.userData
  }));
  const fetchedDataError = useSelector(state => ({
    error: state.error
  }));
  return (
    <div>
      <form onSubmit>
        <input className="SearchBar-input" type="text" placeholder="Search" />
      </form>
    </div>
  );
}

export default SearchBar;
