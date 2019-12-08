import React from "react";
import "../../../App.css";

export const NumberButton = (props) => {
  return (
    <div className="numbers">
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    <button>{props.number}</button>
    </div>
  );
};
