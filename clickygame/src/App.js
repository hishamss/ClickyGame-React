import React from "react";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import Character from "./components/Character";
import characters from "./characters.json";
function App() {
  return (
    <div>
      <Navbar />
      <Jumbotron />
      <div className="container">
        <div className="row">
          <Character />
        </div>
      </div>
    </div>
  );
}

export default App;
