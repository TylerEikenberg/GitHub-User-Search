import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserDataAsync } from "../../Redux/Actions/";
import { UserDrop } from "../index";
import "./SearchBar.css";

/**
 * figure out how to delay fetch request
 * get authentication for github api
 *
 */
function SearchBar() {
  const [username, setUsername] = useState("");
  const dispatch = useDispatch();
  const fetchedData = useSelector(state => ({
    data: state.fetchUserReducer.userData
  }));
  const fetchedDataError = useSelector(state => ({
    error: state.fetchUserReducer.error
  }));

  useEffect(() => {
    setTimeout(() => {
      dispatch(fetchUserDataAsync(username));
    }, 1500);
  }, [username, dispatch]);

  return (
    <div className="SearchBar-container">
      <form>
        <input
          className="SearchBar-input"
          type="text"
          placeholder="Search"
          value={username}
          onChange={e => setUsername(e.target.value)}
          name="username"
        />
      </form>
      {fetchedData.data.login ? (
        <UserDrop
          name={fetchedData.data.login}
          image={fetchedData.data.avatar_url}
        />
      ) : null}
      {fetchedDataError.error ? <h3>Not found</h3> : null}
    </div>
  );
}

export default SearchBar;
