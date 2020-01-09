import React, { Component } from "react";
import Card from "./Card";
import "./Dealer.css";

class Dealer extends Component {
  constructor(props) {
    super(props);
    this.reveal = this.reveal.bind(this);
  }

  reveal() {

  }
  render() {
    let backImg = "images/1080a4bd1a33cec92019fab5efb3995d.png";
    let cards;
    if (this.props.dealer.hand.length > 0) {
      cards = this.props.dealer.hand;
      cards = cards.map(el => {
        return <Card img={el.image} />;
      });
    }
    //this code creates a card component that renders the back of a card
    let back = <Card img={backImg} />;    
    if(cards){
        let faceDown = cards.shift()
        cards.unshift(back)
    }
    console.log(this.props.dealer)
    let total = 0
    if(this.props.dealer.hand[1]){
        total = this.props.dealer.hand[1].value
    }
    if (total > 21) {
      let acePosition = this.props.dealer.hand.findIndex(card => card.value == "11")
      if (acePosition > -1) {
        this.props.change(this.props.dealer.seat, acePosition)
      }
      total = total + "-  BUST!";
    }

    return (
      <>
        <h1>{this.props.dealer.seat}</h1>
        <div className="card-row">
            {cards}            
        </div>
        <h2>Total: { total }</h2>

      </>
    );
  }
}

export default Dealer;
