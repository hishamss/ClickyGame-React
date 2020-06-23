import React from "react";
import "./style.css";

function Winning({ show }) {
  return <h1 className={show ? "winning" : "hide"}>You Won!!!</h1>;
}

export default Winning;
