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
        {
          seat: "Seat 1",
          enabled: true,
          hand: [],
          total: 0,
          bet: 0,
          bust: false
        },
        {
          seat: "Seat 2",
          enabled: false,
          hand: [],
          total: 0,
          bet: 0,
          bust: false
        },
        {
          seat: "Seat 3",
          enabled: false,
          hand: [],
          total: 0,
          bet: 0,
          bust: false
        },
        {
          seat: "Seat 4",
          enabled: true,
          hand: [],
          total: 0,
          bet: 0,
          bust: false
        },
        {
          seat: "Seat 5",
          enabled: false,
          hand: [],
          total: 0,
          bet: 0,
          bust: false
        },
        {
          seat: "Seat 6",
          enabled: false,
          hand: [],
          total: 0,
          bet: 0,
          bust: false
        },
        {
          seat: "Seat 7",
          enabled: false,
          hand: [],
          total: 0,
          bet: 0,
          bust: false
        },
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
      deck_id: "3il18jm01pqg",
      cardsInPlay: [],
      deal: [],
      playerNum: 0,
      drawnCard: {},
      remaining: 0,
      shuffled: null
    };
    this.draw = this.draw.bind(this);
    this.deal = this.deal.bind(this);
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

  componentDidUpdate() {
    if (this.state.deal.length > 0) {
      this.deal();
    }
  }
//   componentDidUpdate(prevProps) {
//     if(this.state.table !== prevProps.table){
//         let table = this.state.table.slice(0)

//     } else if (this.state.deal.length > 0) {
//         this.deal();
//     }

//   }

  deal() {
    let deal = this.state.deal.slice(0);
    let table = this.state.table.slice(0);
    while (deal.length > 0) {
      table.forEach(el => {
        if (el.enabled === true) {
          let newDeal = deal.splice(0, 2);
          el.hand = newDeal;
        }
      });
    }
    this.setState({
      deal: deal
    });
  }
  draw() {
    let numCards = this.state.playerNum * 2;
    let url =
      "https://deckofcardsapi.com/api/deck/" +
      this.state.deck_id +
      "/draw/?count=" +
      numCards;
    fetch(url)
      .then(res => res.json())
      .then(res => {
        // console.log(res)
        this.setState(state => {
          let deal = res.cards;
          let remaining = res.remaining;
          let cardsInPlay = state.cardsInPlay.concat(res.cards);
          return {
            deal,
            remaining,
            cardsInPlay
          };
        });
      });
  }
  render() {
    let dealer = this.state.table.slice(0);
    let seats = dealer
    console.log(seats)
    dealer = dealer.pop();
    seats = seats.map(el => {
        if(el.enabled === true) {
            return <Seat seat={el} />
        }
    })
    console.log(seats)

    return (
      <>
        <h1>Table</h1>
        <Dealer dealer={dealer} />
        { seats }
        <button onClick={() => this.draw()}>Deal</button>
      </>
    );
  }
}
// }
// class Table extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       url: "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=6",
//       dealer: {
//         seat: "dealer",
//         enabled: true,
//         hand: [],
//         total: 0,
//         bet: 0,
//         bust: false
//       },
//       seats: {
//         seat: "Seat 1",
//         enabled: true,
//         hand: [],
//         total: 0,
//         bet: 0,
//         bust: false
//       },
//       account: props.account,
//       deck_id: "hdcsdfmmf0o6"
//     };
//   }

//   dealerDraw() {
//     let url =
//       "https://deckofcardsapi.com/api/deck/" +
//       this.state.deck_id +
//       "/draw/?count=2";
//       fetch(url)
//         .then(res => res.json())
//         .then(res => {
//             console.log(res)
//             let dealer = this.state.dealer
//             dealer.hand = res.cards
//             this.setState({
//                 dealer: dealer
//             })
//         })
//   }
//   seatDraw() {
//     let url =
//       "https://deckofcardsapi.com/api/deck/" +
//       this.state.deck_id +
//       "/draw/?count=2";
//       fetch(url)
//         .then(res => res.json())
//         .then(res => {
//             console.log(res)
//             let seat = this.state.seats
//             seat.hand = res.cards
//             this.setState({
//                 seats: seat
//             })
//         })
//   }
//   render() {
//     return (
//         <>
//         <button onClick={() => this.dealerDraw()}>Deal</button>
//         <button onClick={() => this.seatDraw()}>Deal</button>


//         </>

//   )}
// }

export default Table
