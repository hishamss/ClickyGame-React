import React from "react";

function Wrapper(props) {
  return (
    <div className="container">
      <div className="row" {...props}></div>
    </div>
  );
}

export default Wrapper;
