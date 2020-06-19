import React from "react";
const styles = {
  RowStyle: {
    width: "100%",
  },
  ColStyle: {
    textAlign: "center",
  },
};
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="row" style={styles.RowStyle}>
        <div className="col" style={styles.ColStyle}>
          Clicky Game
        </div>
        <div className="col" style={styles.ColStyle}>
          Score
        </div>
        <div className="col" style={styles.ColStyle}>
          Top Score
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
