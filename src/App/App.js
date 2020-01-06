import React from "react";
import "./App.css";
import { NavBar } from "../Components/";

function App() {
  return (
    <div className="App">
      <div className="App-body">
        <header className="App-NavBar-wrapper">
          <NavBar></NavBar>
        </header>
      </div>
    </div>
  );
}

export default App;
