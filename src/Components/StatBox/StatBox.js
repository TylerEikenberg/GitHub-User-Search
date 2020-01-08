import React from "react";
import "./StatBox.css";

function StatBox({ number = 0, stat = "none" }) {
  return (
    <div className="StatBox-container">
      <h3 className="StatBox-h3 StatBox-top">{number}</h3>
      <h3 className="StatBox-h3 StatBox-bottom">{stat}</h3>
    </div>
  );
}

export default StatBox;
