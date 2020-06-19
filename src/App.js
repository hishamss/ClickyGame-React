import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import Character from "./components/Character/Character";
import Wrapper from "./components/Wrapper/Wrapper";
import characters from "./characters.json";

class App extends Component {
  state = {
    clickedCharacter: "",
    characters,
    score: 0,
    topScore: 0,
    shake: false,
  };

  shuffleCharacters = (id) => {
    let newScore = this.state.score;
    let Shuffled = this.state.characters;
    let shakeValue = false;
    for (let i = Shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * i);
      const temp = Shuffled[i];
      Shuffled[i] = Shuffled[j];
      Shuffled[j] = temp;
    }

    if (this.state.clickedCharacter) {
      if (id !== this.state.clickedCharacter) {
        newScore++;
      } else {
        newScore = 0;
        shakeValue = true;
      }
    }
    this.setState(
      {
        clickedCharacter: id,
        characters: Shuffled,
        score: newScore,
        topScore:
          newScore > this.state.topScore ? newScore : this.state.topScore,
        shake: shakeValue,
      },
      () => console.log(this.state.score)
    );
  };

  render() {
    return (
      <div>
        <Navbar score={this.state.score} topScore={this.state.topScore} />
        <Jumbotron />
        <Wrapper shake={this.state.shake}>
          {this.state.characters.map((character) => (
            <Character
              bg={character.img}
              key={character.id}
              id={character.id}
              shuffle={this.shuffleCharacters}
            />
          ))}
        </Wrapper>
      </div>
    );
  }
}

export default App;
