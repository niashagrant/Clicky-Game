import React, { Component } from "react";
import Jumbotron from "./components/Jumbotron";
import Cards from "./components/Cards";
import drinks from "./drinks.json";

class App extends Component {
  state = {
    drinks: drinks,
    score: 0,
    highScore: 0,
  };

  cardHandler = () => {
    this.setState({
      score: this.state.score + 1,
    });
  };

  render() {
    return (
      <div className="App">
        <Jumbotron score={this.state.score} />
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
