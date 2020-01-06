import React from "react";
import "./App.css";
import { BrowserRouter, NavLink, Route } from "react-router-dom";
import { SearchPage } from "../Pages";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="App-body">
          <header className="App-Navbar">
            <ul className="Navbar-links-container">
              <NavLink to="/">
                <li className="NavBar-list">Home</li>
              </NavLink>
              <NavLink to="/search">
                <li className="NavBar-list">Search</li>
              </NavLink>
            </ul>
          </header>
          <Route path="/"></Route>
          <Route path="/search" exact component={SearchPage}></Route>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
