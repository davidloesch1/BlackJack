import React, { Component } from "react";
import Card from "./Card";
import "./Seat.css";
import "../App.css"

class Seat extends Component {
  constructor(props) {
    super(props);
    // this.winner = this.winner.bind(this)
  }
  // componentDidUpdate(prevProps, prevState){
  //   if(this.props.seat.win !== prevProps.seat.win){
  //     console.log('this seat is a winner')
  //   }
  // }


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
      // this.props.stay()
    }
    let winner = ''
    if(this.props.seat.win === true){
      winner = "Winner!"
    }
    


    return (
      <div className={ this.props.seat.turn ? "turn seat-container" : "seat-container" }> 
        <h1>{this.props.seat.seat}</h1>
        <div className="card-row">
          {cards}          
        </div>
        <button onClick={() => this.props.hit(id)}>HIT</button>
        <button onClick={() => this.props.stay(parseInt(total))}>STAY</button>
        <h2>Total: {total}</h2>
        <h2>{ winner }</h2>
      </div>
    );
  }
}

export default Seat;
