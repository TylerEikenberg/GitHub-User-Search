import React from "react";
import "./App.css";
import { BrowserRouter, NavLink, Route } from "react-router-dom";
import { SearchPage, UserDetailsPage } from "../Pages";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="App-body">
          <header className="App-Navbar">
            <ul className="Navbar-links-container">
              <NavLink
                exact
                className="NavBar-list"
                activeClassName="NavBar-list-active"
                to="/"
              >
                <li>Home</li>
              </NavLink>
              <NavLink
                exact
                className="NavBar-list"
                activeClassName="NavBar-list-active"
                to="/search"
              >
                <li>Search</li>
              </NavLink>
            </ul>
          </header>
          <Route path="/"></Route>
          <Route path="/search" exact component={SearchPage}></Route>
          <Route path="/user/:name" component={UserDetailsPage} />
          <footer className="App-footer">
            GitHub User Search by Tyler Eikenberg | 2020
          </footer>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
