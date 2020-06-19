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

  shuffleCharacters = () => {
    let Shuffled = this.state.characters;
    for (let i = Shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * i);
      const temp = Shuffled[i];
      Shuffled[i] = Shuffled[j];
      Shuffled[j] = temp;
    }
    this.setState({ characters: Shuffled });
  };
  render() {
    return (
      <div>
        <Navbar />
        <Jumbotron />
        <Wrapper>
          {this.state.characters.map((character) => (
            <Character
              bg={character.img}
              key={character.id}
              shuffle={this.shuffleCharacters}
            />
          ))}
        </Wrapper>
      </div>
    );
  }
}

export default App;
