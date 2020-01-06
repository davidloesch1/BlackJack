import React, { Component } from "react";
import Dealer from './Dealer'
import Seat from './Seat'
import "../App.css";

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=6",
      seats: [{
          seat: 1,
          hand: [10],
          total: 10,
          bust: true
      }],
      players: [      
          {
          seat: "dealer",
          hand: [],
          total: 0,
          bust: false
        }
    ],
      account: props.account,
      deck_id: 'ob10h1bdc8ig',
      cardsInPlay: [],
      remaining: 0,
      shuffled: null,
      drawnCard: {}
    };
    this.deal = this.deal.bind(this)
    // this.componentDidMount = this.componentDidMount.bind(this)
  }

//   componentDidMount() {
//     fetch(this.state.url)
//       .then(res => res.json())
//       .then(result => {
//         console.log(result)
//         this.setState({
//           deck_id: result.deck_id,
//           shuffled: result.shuffled,
//           remaining: result.remaining
//         });
//       });
//   }

//   drawCard() {
//     let url =
//       "https://deckofcardsapi.com/api/deck/" +
//       this.state.deck_id +
//       "/draw/?count=1";
//     fetch(url)
//       .then(res => res.json())
//       .then(res => {
//         let newArray = this.state.cards.splice(0);
//         let newCards = res.cards;
//         console.log(newCards);
//         console.log(newArray);
//         newCards.map(el => newArray.push(el));
//         console.log(newArray);
//         this.setState({
//           cards: newArray
//         });
//       });
//   }
    draw() {
      let numPlayers = this.state.seats.slice(0)
      console.log(numPlayers)
    //   numPlayers = numPlayers.push(this.state..splice(0))
        let totalPlayers = this.state.players.splice(0)
        numPlayers.map(el => {
            totalPlayers.unshift(el)
        })
      this.setState({
          players: totalPlayers
      })
      let numOfCards = ((this.state.seats.length + 1) * 2)
      console.log(numOfCards)
      let url = "https://deckofcardsapi.com/api/deck/" + this.state.deck_id + "/draw/?count=" + numOfCards
      fetch(url)
        .then(res => res.json())
        .then(res => {
            console.log(res.cards)
            let drawn = res.cards
            this.setState({
                cardsInPlay: drawn
            })
        })
        totalPlayers.map(el, i => {

            this.setState({
                
            })
        })
  }


  render() {
    return(
        <>
            <h1>Table</h1>
            <Dealer />
            <Seat seat={this.state.seats}/>
            <button onClick={()=> this.draw()}>Deal</button>
        </>
    ) 
  }
}

export default Table;
