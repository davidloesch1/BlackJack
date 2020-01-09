import React, { Component } from "react";
import Card from "./Card";
import "./Seat.css";
import "../App.css"

class Seat extends Component {
  constructor(props) {
    super(props);
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
      let acePosition = this.props.seat.hand.findIndex(card => card.value == "11")
      if (acePosition > -1) {
        this.props.change(this.props.seat.seat, acePosition)
      }
      total = total + "-  BUST!";
    }
    // if(this.props.seat.turn === true){

    // }

    return (
      <div className="seat-container">
        <h1>{this.props.seat.seat}</h1>
        <div className="card-row">
          {cards}          
        </div>
        <button onClick={e => this.props.hit(id, e)}>HIT</button>
        {/* <button onClick={(e)=> this.stay(e)}>STAY</button> */}
        <h2>Total: {total}</h2>
      </div>
    );
  }
}

export default Seat;
