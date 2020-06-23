import React from "react";
import "./style.css";

function Cards(props) {
  return (
    <div className="col-3">
      <div className="card" onClick={props.onClick}>
        <img
          src={props.drink.image}
          className="card-img-top"
          alt={props.drink.name}
          data-drinkid={props.drink.id}
        />
      </div>
    </div>
  );
}

export default Cards;
