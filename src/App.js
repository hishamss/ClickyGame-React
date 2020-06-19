import React from "react";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import Character from "./components/Character";
import Wrapper from "./components/Wrapper";
import characters from "./characters.json";
function App() {
  return (
    <div>
      <Navbar />
      <Jumbotron />
      <Wrapper>
        <Character />
        <Character />
        <Character />
      </Wrapper>
    </div>
  );
}

export default App;
