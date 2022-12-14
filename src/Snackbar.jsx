import React from "react";
import "./snackbar.css";

const Snackbar = ({ validExpression }) => {
  return (
    <div id="snackbar" className={!validExpression ? "show" : ""}>
      Invalid expression!!
    </div>
  );
};

export default Snackbar;
