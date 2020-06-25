import React, { Component } from "react";
import Jumbotron from "./components/Jumbotron";
import Cards from "./components/Cards";
import drinks from "./drinks.json";

class App extends Component {
  state = {
    drinks: drinks,
    score: 0,
    highScore: 0,
    clickedDrinks: [],
  };

  cardHandler = (event) => {
    let id = event.target.getAttribute("data-drinkid");
    console.log(id);
    this.arrayShuffler();
    if (this.state.clickedDrinks.includes(id)) {
      console.log("LOSER");
      alert("loser");
      this.setState({
        clickedDrinks: [],
        score: 0,
      });
    } else {
      var arrayCopy = [...this.state.clickedDrinks];
      arrayCopy.push(id);
      if (arrayCopy.length === 12) {
        console.log("winner");
        alert("winner");
      } else {
        this.setState({
          clickedDrinks: arrayCopy,
          score: this.state.score + 1,
        });
      }
    }
    // this.setState({
    //   score: this.state.score + 1,
    //   clickedDrinks: [],
    // });
    // let newscore = this.state.score;
    // if (newscore >= 12) {
    //   console.log("you won");
    //   alert("WINNER");
    //   this.setState({
    //     score: 0,
    //     highScore: this.state.score,
    //   });
    // }
  };

  arrayShuffler = () => {
    var drinkCopyArray = [...this.state.drinks];
    drinkCopyArray.sort(() => Math.random() - 0.5);
    this.setState({
      drinks: drinkCopyArray,
    });

    // console.log(drinks);
  };

  render() {
    return (
      <div className="App">
        <Jumbotron score={this.state.score} highScore={this.state.highScore} />

        <div className="container">
          <div className="row">
            {this.state.drinks.map((drink, index) => {
              return (
                <Cards key={index} drink={drink} onClick={this.cardHandler} />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
