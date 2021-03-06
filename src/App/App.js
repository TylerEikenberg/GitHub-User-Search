import React from "react";
import "./App.css";
import { BrowserRouter, NavLink, Route, Switch } from "react-router-dom";
import { SearchPage, UserDetailsPage, HomePage } from "../Pages";
import { mdiHome, mdiMagnify } from "@mdi/js";
import Icon from "@mdi/react";

/**
 * use lodash debounce for fetch call
 * change reducer to use async await
 * move action types into constants
 */

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
                to="/home"
              >
                <li>
                  <Icon
                    className="icon"
                    path={mdiHome}
                    size={2}
                    color="#011936"
                  />
                </li>
              </NavLink>
              <NavLink
                exact
                className="NavBar-list"
                activeClassName="NavBar-list-active"
                to="/search"
              >
                <li>
                  <Icon
                    className="icon"
                    path={mdiMagnify}
                    size={2}
                    color="#011936"
                  />
                </li>
              </NavLink>
            </ul>
          </header>

          <Switch>
            <Route path="/home" exact component={HomePage}></Route>
            <Route path="/search" exact component={SearchPage}></Route>
            <Route path="/user/:name" component={UserDetailsPage} />
            <Route path="/" exact component={SearchPage}></Route>
          </Switch>
          <footer className="App-footer">
            GitHub User Search by{" "}
            <a
              className="NavBar-list"
              rel="noopener noreferrer"
              target="_blank"
              href="https://tylereikenberg.dev/"
            >
              Tyler Eikenberg | 2020
            </a>
          </footer>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
