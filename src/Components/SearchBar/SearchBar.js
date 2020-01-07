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

  // const onChangeHandle = e => {
  //   setUsername(e.target.value);
  //   console.log(username);
  //   // dispatch(fetchUserDataAsync(username));
  //   return;
  // };

  useEffect(() => {
    dispatch(fetchUserDataAsync(username));
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
      <UserDrop />
      {/* <h2>{fetchedData.data.login ? fetchedData.data.login : null}</h2>
      {fetchedDataError.error ? <h3>Not found</h3> : null}

      <img
        style={{ width: "100px" }}
        src={fetchedData.data.avatar_url}
        alt=""
      /> */}
    </div>
  );
}

export default SearchBar;
