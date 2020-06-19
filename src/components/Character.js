import React from "react";

function Character(props) {
  return (
    <div className="card">
      <img
        className="card-img-top"
        alt="characterImg"
        src={`${process.env.PUBLIC_URL}${props.bg}`}
      ></img>
    </div>
  );
}

export default Character;
