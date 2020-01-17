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
  const { userData, error } = useSelector(state => state.fetchUserReducer);

  useEffect(() => {
    setTimeout(() => {
      dispatch(fetchUserDataAsync(username));
    }, 500);
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
      {userData.login ? (
        <UserDrop name={userData.login} image={userData.avatar_url} />
      ) : null}
      {error ? <h3>Not found</h3> : null}
    </div>
  );
}

export default SearchBar;
