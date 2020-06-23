import React from "react";
import "./style.css";

function Jumbotron(props) {
  return (
    <div className="jumbotron jumbotron-fluid text-white">
      <div className="container">
        <h1 className="display-4 text-center font-weight-bolder">
          Drink Enthusiast!<i className="fas fa-glass-cheers"></i>
        </h1>
        <p className="lead text-center font-weight-bold">
          How well can you remember the drinks you drank? Choose the same drink
          and you lose!
        </p>

        <div className="row justify-content-between text-center font-weight-bold">
          <div className="col">Score: {props.score}</div>
          <div className="col">High Score: {props.highScore}</div>
        </div>
      </div>
    </div>
  );
}

export default Jumbotron;
