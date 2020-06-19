import React from "react";
const styles = {
  jumboStyles: {
    backgroundColor: "#f9c741",
    backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/jumboBG1.jpg)`,
    backgroundPosition: "center",
    backgroundSize: "50%",
    backgroundRepeat: "no-repeat",
    height: "400px",
    marginBottom: 0,
  },
};
function Jumbotron() {
  return (
    <div className="jumbotron text-center" style={styles.jumboStyles}></div>
  );
}

export default Jumbotron;
