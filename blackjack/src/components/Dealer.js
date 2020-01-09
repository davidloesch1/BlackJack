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
    //this creates a variable for the back of a card image and also creates the Card components
    //for the dealer
    let backImg = "images/1080a4bd1a33cec92019fab5efb3995d.png";
    let cards;
    if (this.props.dealer.hand.length > 0) {
      cards = this.props.dealer.hand;
      cards = cards.map(el => {
        return <Card img={el.image} />;
      });
    }

    //this code creates a card component that renders the back of a card and replaces the first 
    //dealer card with a back image.
    let back = <Card img={backImg} />;  
    let faceDown = {}  
    if(cards){
        faceDown = cards.shift()
        cards.unshift(back)
    } 

    // this sets the total to equal the one face up card
    let total = 0   
      if(this.props.dealer.hand[1]){
        total = parseInt(this.props.dealer.hand[1].value)
    }
    
    //this updates the total to include the flipped card
    if(this.props.dealer.turn === true || this.props.dealer.hasGone === true){
        cards.shift()
        cards.unshift(faceDown)
        total = 0
        this.props.dealer.hand.forEach(el => {
          total = total + parseInt(el.value);
        });

    }

    let id = this.props.dealer.seat
    if(this.props.dealer.turn === true && total < 17){
      this.props.hit(id)
    }
    if(this.props.dealer.turn === true && total >= 17 && total <= 21){
      this.props.stay(total)
    }
    //this logic changes the value of the Ace card, if there is one, to equal 1 instead of 11.  
    //if there is more than one Ace, then it only changes the necessary amount of Aces to make the 
    //score less than 21.
    if(total === 21){
      console.log("dealer wins")
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
