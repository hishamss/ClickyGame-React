import React from "react";
const styles = {
  navbarStyle: {
    background: "#0099d8",
    opacity: 0.78,
    color: "white",
  },
  RowStyle: {
    width: "100%",
  },
  ColStyle: {
    textAlign: "center",
  },
};
function Navbar(props) {
  return (
    <nav
      className="navbar navbar-expand-lg fixed-top shadow-lg"
      style={styles.navbarStyle}
    >
      <div className="row" style={styles.RowStyle}>
        <div className="col" style={styles.ColStyle}>
          <h1>Clicky Game</h1>
        </div>
        <div className="col" style={styles.ColStyle}>
          <h1>Click an Image to begin!!</h1>
        </div>
        <div className="col" style={styles.ColStyle}>
          <h1>
            Score: {props.score} | Top Score: {props.topScore}
          </h1>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
