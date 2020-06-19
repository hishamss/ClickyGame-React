import React from "react";
const styles = {
  imgStyle: {
    width: "200px",
    height: "200px",
    padding: "10px",
    background: "lightgrey",
    borderRadius: "10px",
    marginBottom: "15px",
  },
};
function Character(props) {
  return (
    <div className="col-md-3 col-lg-3 col-xm-12 col-sm-6 text-center">
      <img
        style={styles.imgStyle}
        alt="characterImg"
        src={`${process.env.PUBLIC_URL}${props.bg}`}
        onClick={props.shuffle}
      ></img>
    </div>
  );
}

export default Character;
