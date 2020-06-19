import React from "react";

function Wrapper(props) {
  return (
    <div className="container">
      <div className="row justify-content-center" {...props}></div>
    </div>
  );
}

export default Wrapper;
