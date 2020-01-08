import React, { Component } from "react";
import Card from "./Card";
import "./Seat.css";

class Seat extends Component {
  constructor(props) {
    super(props);
    this.checkValue = this.checkValue.bind(this);
  }

  checkValue(card) {
    return (card.value = "11");
  }
  render() {
    let id = this.props.seat.seat;
    let cards;
    if (this.props.seat.hand.length > 0) {
      cards = this.props.seat.hand;
      cards = cards.map(el => {
        return <Card img={el.image} />;
      });
    }
    let total = 0;
    this.props.seat.hand.forEach(el => {
      total = total + parseInt(el.value);
    });

    if (total > 21) {
      if (this.props.seat.hand.findIndex(this.checkValue) > 0) {
        console.log("there are aces");
      }
      total = total + "-  BUST!";
    }

    return (
      <>
        <h1>{this.props.seat.seat}</h1>
        {cards}
        <button onClick={e => this.props.hit(id, e)}>HIT</button>
        {/* <button onClick={(e)=> this.stay(e)}>STAY</button> */}
        <h2>Total: {total}</h2>
      </>
    );
  }
}

export default Seat;
