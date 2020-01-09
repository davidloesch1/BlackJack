import React, { Component } from "react";
import Card from "./Card";
import "./Dealer.css";

class Dealer extends Component {
  constructor(props) {
    super(props);
    this.reveal = this.reveal.bind(this);
    // this.dealerLogic = this.dealerLogic.bind(this)
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
    let faceDown = {}  
    if(cards){
        faceDown = cards.shift()
        cards.unshift(back)
    } 
    let total = 0   
      if(this.props.dealer.hand[1]){
        total = parseInt(this.props.dealer.hand[1].value)
    }
    
    if(this.props.dealer.turn === true){
        cards.shift()
        cards.unshift(faceDown)
        total = 0
        this.props.dealer.hand.forEach(el => {
          total = total + parseInt(el.value);
        });

    }
    // console.log(this.props.dealer)

  
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
        <div className={ this.props.dealer.turn ? "turn dealer-container" : "dealer-container" }>
            <div className="card-row">
              {cards}                
            </div>
          <h2>Total: {total}</h2>
        </div>

      </>
    );
  }
}

export default Dealer;
