import React from "react";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import characters from "./characters.json";
function App() {
  return (
    <div>
      <Navbar />
      <Jumbotron />
    </div>
  );
}

export default App;
