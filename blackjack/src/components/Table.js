import React, { Component } from "react";
import Dealer from "./Dealer";
import Seat from "./Seat";
import "../App.css";

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=6",
      table: [
        { seat: 1, enabled: true, hand: [], total: 0, bet: 0, bust: false },
        { seat: 2, enabled: false, hand: [], total: 0, bet: 0, bust: false },
        { seat: 3, enabled: false, hand: [], total: 0, bet: 0, bust: false },
        { seat: 4, enabled: true, hand: [], total: 0, bet: 0, bust: false },
        { seat: 5, enabled: false, hand: [], total: 0, bet: 0, bust: false },
        { seat: 6, enabled: false, hand: [], total: 0, bet: 0, bust: false },
        { seat: 7, enabled: false, hand: [], total: 0, bet: 0, bust: false },
        {
          seat: "dealer",
          enabled: true,
          hand: [],
          total: 0,
          bet: null,
          bust: false
        }
      ],
      account: props.account,
      deck_id: "iubvpk54vb1x",
      cardsInPlay: [],
      deal: [],
      playerNum: 0,
      drawnCard: {},
      remaining: 0,
      shuffled: null
    };
    this.draw = this.draw.bind(this);
    this.deal = this.deal.bind(this);
    // this.componentDidMount = this.componentDidMount.bind(this);
  }
  componentDidMount() {
    let i = 0;
    this.state.table.forEach(el => {
      if (el.enabled === true) {
        i++;
      }
    });
    this.setState({
      playerNum: i
    });
  }
//   deal() {
//     let newDeal = this.state.deal.slice(0)
//     let newTable = this.state.table.slice(0)
//       let i = 0
//       let mod = i % 8
//       while (newDeal.length > 0) {
//         if (newTable[mod].enabled === true) {
//           newTable[mod].hand.push(newDeal.shift());
//           // newTable[mod].hand.push(newDeal.shift());
//         }
//         console.log(mod)
//         i++;
//       }
//   }
//   draw() {
//     //this api draws the amount of cards needed to deal the hand.
//     let url =
//       "https://deckofcardsapi.com/api/deck/" +
//       this.state.deck_id +
//       "/draw/?count=" +
//       this.state.playerNum;
//     fetch(url)
//       .then(res => res.json())
//       .then(res => {
//         let newDeal = res.cards
//         this.setState(
//           {
//             deal: newDeal,
//           }
//         );
//       });
//   }

  deal() {

  }
  draw() {
      let numCards = this.state.playerNum * 2
      let url = "https://deckofcardsapi.com/api/deck/" + this.state.deck_id + "/draw/?count=" + numCards
      fetch(url)
        .then(res => res.json())
        .then(res => {
            this.setState((state) => {
                let deal = res.cards
                let remaining = res.remaining
                console.log(state.cardsInPlay)
                let cardsInPlay = state.cardsInPlay.concat(res.cards)
                return {
                    deal,
                    remaining,
                    cardsInPlay
                }
                // cardsInPlay: newCardsInPlay,
                // deal: res.cards,
                // remaining: res.remaining
            })
        })
  }
  render() {
    return (
      <>
        <h1>Table</h1>
        <Dealer />
        <Seat seat={this.state.seats} />
        <button onClick={() => this.draw()}>Deal</button>
      </>
    );
  }
}

export default Table;
