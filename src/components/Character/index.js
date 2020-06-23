import React from "react";
import "./style.css";

function Character(props) {
  return (
    <div className="col-md-3 col-lg-3 col-xm-12 col-sm-6 text-center">
      <img
        alt="characterImg"
        src={`${process.env.PUBLIC_URL}${props.bg}`}
        onClick={() => props.shuffle(props.id)}
      ></img>
    </div>
  );
}

export default Character;
