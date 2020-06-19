import React from "react";
const styles = {
  RowStyle: {
    width: "100%",
  },
  ColStyle: {
    textAlign: "center",
  },
};
function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div className="row" style={styles.RowStyle}>
        <div className="col" style={styles.ColStyle}>
          Clicky Game
        </div>
        <div className="col" style={styles.ColStyle}>
          Score: {props.score}
        </div>
        <div className="col" style={styles.ColStyle}>
          Top Score: {props.topScore}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
