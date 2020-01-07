import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserDataAsync } from "../../Redux/Actions/";
import "./SearchBar.css";

/**
 * figure out how to delay fetch request
 * get authentication for github api
 *
 */
function SearchBar() {
  const [username, setUsername] = useState("Username");
  const dispatch = useDispatch();
  const fetchedData = useSelector(state => ({
    data: state.fetchUserReducer.userData
  }));
  const fetchedDataError = useSelector(state => ({
    error: state.fetchUserReducer.error
  }));

  const onChangeHandle = e => {
    e.preventDefault();
    setUsername(e.target.value);
    dispatch(fetchUserDataAsync(username));
    console.log(fetchedDataError);
    return;
  };

  return (
    <div>
      <form>
        <input
          className="SearchBar-input"
          type="text"
          placeholder="Search"
          onChange={onChangeHandle}
        />
      </form>
      <h2>{fetchedData.data.login ? fetchedData.data.login : null}</h2>
      {fetchedDataError.error ? <h3>Not found</h3> : null}
      <img
        style={{ width: "100px" }}
        src={fetchedData.data.avatar_url}
        alt=""
      />
    </div>
  );
}

export default SearchBar;
