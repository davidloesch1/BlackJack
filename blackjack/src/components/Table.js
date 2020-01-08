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
          enabled: true,
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
      deck_id: "qgjl7i4n3sky",
      cardsInPlay: [],
      deal: [],
      playerNum: 0,
      drawnCard: {},
      remaining: 0,
      shuffled: null
    };
    this.draw = this.draw.bind(this)
    this.deal = this.deal.bind(this)
    this.hit = this.hit.bind(this)
    this.changeAceValue = this.changeAceValue.bind(this)
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
          console.log(res)
          res.cards.forEach(el => {
              if(el.value === "JACK") {
                  el.value = "10"
              }else if(el.value === "QUEEN") {
                  el.value = "10"
              }else if(el.value === "KING") {
                el.value = "10"
              }else if(el.value === "ACE") {
                el.value = "11"
              }
          })
          return res
      })
      .then(res => {
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


  hit(e){
    let url =
    "https://deckofcardsapi.com/api/deck/" +
    this.state.deck_id +
    "/draw/?count=1"
    console.log(e)
    let index = this.state.table.findIndex(x => x.seat === e)
    let array = this.state.table.slice(0)
    fetch(url)
    .then(res=> res.json())
    .then(res => {
        console.log(res)
        res.cards.forEach(el => {
            if(el.value === "JACK") {
                el.value = "10"
            }else if(el.value === "QUEEN") {
                el.value = "10"
            }else if(el.value === "KING") {
              el.value = "10"
            }else if(el.value === "ACE") {
              el.value = "11"
            }
        })
        return res
    })
    .then(res=> {
        this.setState(state => {
            let table = array[index].hand.push(res.cards[0])
            return table
        })
        
    })
    
  }

  changeAceValue(e){
    console.log(e)
}
  render() {
    let dealer = this.state.table.slice(0);
    let seats = dealer
    dealer = dealer.pop();
    seats = seats.map(el  => {
        if(el.enabled === true) {
            return <Seat seat={el} hit={this.hit} change={this.changeAceValue}/>
        }
    })

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

export default Table
