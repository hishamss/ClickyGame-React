import React from "react";
const styles = {
  jumb: {
    backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/img1.jpg)`,
  },
};
function Jumbotron() {
  return (
    <div className="jumbotron text-center" style={styles.jumb}>
      <h1 className="display-2">Click an image to begin!</h1>
    </div>
  );
}

export default Jumbotron;
