import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import Character from "./components/Character";
import Wrapper from "./components/Wrapper";
import characters from "./characters.json";

class App extends Component {
  state = {
    characters,
  };
  render() {
    return (
      <div>
        <Navbar />
        <Jumbotron />
        <Wrapper>
          {this.state.characters.map((character) => (
            <Character bg={character.img} key={character.id} />
          ))}
        </Wrapper>
      </div>
    );
  }
}

export default App;
