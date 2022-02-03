import React from "react";
import "./divider.styles.scss";

function Divider({ text }) {
  return (
    <div className="parent-divider">
      <div className="divider-underline"></div>
      <span className="divider-text">{text}</span>
    </div>
  );
}

export default Divider;
