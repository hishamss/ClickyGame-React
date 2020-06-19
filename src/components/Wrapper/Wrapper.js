import React from "react";
import "./style.css";
function Wrapper(props) {
  console.log("shake", props.shake);
  return (
    <div className={`container ${props.shake ? "shake" : ""}`}>
      <div className="row justify-content-center">{props.children}</div>
    </div>
  );
}

export default Wrapper;
