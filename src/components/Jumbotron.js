import React from "react";
const styles = {
  jumboStyles: {
    backgroundColor: "white",
    backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/jumboBG.jpg)`,
    backgroundPosition: "center",
    backgroundSize: "50%",
    backgroundRepeat: "no-repeat",
    height: "470px",
  },
};
function Jumbotron() {
  return (
    <div className="jumbotron text-center" style={styles.jumboStyles}></div>
  );
}

export default Jumbotron;
