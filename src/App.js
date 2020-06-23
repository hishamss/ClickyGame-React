import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import Character from "./components/Character";
import Wrapper from "./components/Wrapper";
import Winning from "./components/Winning";
import characters from "./characters.json";

class App extends Component {
  state = {
    clickedCharacters: [],
    characters,
    score: 0,
    topScore: 0,
    shake: false,
    win: false,
  };

  shuffleCharacters = (id) => {
    let updatedClicked = this.state.clickedCharacters;
    let newScore = this.state.score;
    let Shuffled = this.state.characters;
    let shakeValue = false;
    let checkIfWin = false;
    for (let i = Shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * i);
      const temp = Shuffled[i];
      Shuffled[i] = Shuffled[j];
      Shuffled[j] = temp;
    }

    if (this.state.score >= 12) {
      newScore = 1;
      updatedClicked = [];
    } else {
      if (!this.state.clickedCharacters.includes(id)) {
        updatedClicked.push(id);
        newScore++;
        if (newScore >= 12) checkIfWin = true;
      } else {
        newScore = 0;
        shakeValue = true;
        updatedClicked = [];
      }
    }
    this.setState(
      {
        clickedCharacters: updatedClicked,
        characters: Shuffled,
        score: newScore,
        topScore:
          newScore > this.state.topScore ? newScore : this.state.topScore,
        shake: shakeValue,
        win: checkIfWin,
      },
      () => console.log(this.state.clickedCharacters)
    );
  };

  render() {
    return (
      <div>
        <Navbar score={this.state.score} topScore={this.state.topScore} />
        <Jumbotron />
        <Wrapper shake={this.state.shake}>
          <Winning show={this.state.win} />
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
