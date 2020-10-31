import React from "react";
import "./Tab.css";

function Tab({ id, name, isActive }) {
  console.log(isActive);

  return (
    <button 
      className={`tab ${isActive ? "tab__active" : null}`} 
      id={id}
    >
      {name}
    </button>
  );
}

export default Tab;
