import React, { Component } from "react";
import Table from "./components/Table";
import Account from "./components/Account";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      account: 0.0,
      url: "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=6",
      table: [
        {
          seat: "Seat 1",
          enabled: false,
          hasGone: false,
          turn: false,
          hand: [],
          total: 0,
          bet: 0,
          bust: false,
          win: false
        },
        {
          seat: "Seat 2",
          enabled: false,
          hasGone: false,
          turn: false,
          hand: [],
          total: 0,
          bet: 0,
          bust: false,
          win: false
        },
        {
          seat: "Seat 3",
          enabled: false,
          hasGone: false,
          turn: false,
          hand: [],
          total: 0,
          bet: 0,
          bust: false,
          win: false
        },
        {
          seat: "Seat 4",
          enabled: false,
          hasGone: false,
          turn: false,
          hand: [],
          total: 0,
          bet: 0,
          bust: false,
          win: false
        },
        {
          seat: "Seat 5",
          enabled: false,
          hasGone: false,
          turn: false,
          hand: [],
          total: 0,
          bet: 0,
          bust: false,
          win: false
        },
        {
          seat: "Seat 6",
          enabled: false,
          hasGone: false,
          turn: false,
          hand: [],
          total: 0,
          bet: 0,
          bust: false,
          win: false
        },
        {
          seat: "Seat 7",
          enabled: false,
          hasGone: false,
          turn: false,
          hand: [],
          total: 0,
          bet: 0,
          bust: false,
          win: false
        },
        {
          seat: "dealer",
          enabled: true,
          hasGone: false,
          turn: false,
          hand: [],
          total: 0,
          bet: null,
          bust: false,
          win: false
        }
      ],
      deck_id: "2dluh7kzi445",
      cardsInPlay: [],
      deal: [],
      playerNum: 0,
      drawnCard: {},
      remaining: 0,
      shuffled: null,
      turn: 0
    };
    this.draw = this.draw.bind(this);
    this.deal = this.deal.bind(this);
    this.hit = this.hit.bind(this);
    this.stay = this.stay.bind(this);
    this.changeAceValue = this.changeAceValue.bind(this);
    this.newDeal = this.newDeal.bind(this);
    this.checkWinner = this.checkWinner.bind(this);
    this.seats = this.seats.bind(this);
    this.countplayers = this.countPlayers.bind(this);
    this.resetSeats = this.resetSeats.bind(this);
  }
  countPlayers() {
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

  changeAceValue(seat, ace) {
    let table = this.state.table.slice(0);
    let index = table.findIndex(el => el.seat === seat);
    table[index].hand[ace].value = "1";
    this.setState({
      table: table
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.deal.length > 0) {
      this.deal();
      this.turn();
    }
    if (this.state.table !== prevState.table) {
      this.countPlayers();
    }
  }

  deal() {
    let deal = this.state.deal.slice(0);
    let table = this.state.table.slice(0);
    while (deal.length > 0) {
      table.forEach(el => {
        el.hasGone = false;
        el.turn = false;
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
    let table = this.state.table.slice(0);
    table.forEach(el => {
      el = {
        hasGone: false,
        turn: false,
        hand: [],
        total: 0,
        bet: 0,
        bust: false,
        win: false
      };
    });
    let url =
      "https://deckofcardsapi.com/api/deck/" +
      this.state.deck_id +
      "/draw/?count=" +
      numCards;
    fetch(url)
      .then(res => res.json())
      .then(res => {
        res.cards.forEach(el => {
          if (
            el.value === "JACK" ||
            el.value === "QUEEN" ||
            el.value === "KING"
          ) {
            el.value = "10";
          } else if (el.value === "ACE") {
            el.value = "11";
          }
        });
        return res;
      })
      .then(res => {
        this.setState(state => {
          let turn = 0;
          let deal = res.cards;
          let remaining = res.remaining;
          let cardsInPlay = state.cardsInPlay.concat(res.cards);
          return {
            turn,
            deal,
            remaining,
            cardsInPlay
          };
        });
      });
  }
  resetSeats() {}
  seats(e) {
    let id = e.target.name;
    let table = this.state.table.slice(0);
    let index = table.findIndex(el => el.seat === id);
    table[index].enabled = !table[index].enabled;
    this.setState({
      table: table
    });
  }

  newDeal() {}

  checkWinner() {
    let table = this.state.table.slice(0);
    let dealerTotal = table[7].total;

    table.forEach((el, i, table) => {
      if (i === table.length - 1) {
      }
      if (el.enabled === true && el.bust === false && el.total > dealerTotal) {
        el.win = true;
      }
    });
  }

  //the hit function draws a card from the deck using our deck_id and the API fetch call
  hit(e) {
    let url =
      "https://deckofcardsapi.com/api/deck/" +
      this.state.deck_id +
      "/draw/?count=1";
    let index = this.state.table.findIndex(x => x.seat === e);
    let array = this.state.table.slice(0);
    fetch(url)
      .then(res => res.json())
      .then(res => {
        res.cards.forEach(el => {
          if (
            el.value === "JACK" ||
            el.value === "QUEEN" ||
            el.value === "KING"
          ) {
            el.value = "10";
          } else if (el.value === "ACE") {
            el.value = "11";
          }
        });
        return res;
      })
      .then(res => {
        this.setState(state => {
          let table = array[index].hand.push(res.cards[0]);
          return table;
        });
      });
  }

  turn() {
    let table = this.state.table.slice(0);
    let turn = this.state.turn;
    if (turn >= 8) {
      this.checkWinner();
    } else {
      while (table[turn].enabled === false) {
        turn++;
      }
      table[turn].turn = true;
      this.setState({
        table: table,
        turn: turn
      });
    }
  }

  stay(total) {
    let table = this.state.table.slice(0);
    let turn = this.state.turn;
    if (total > 21) {
      table[turn].bust = true;
    }
    table[turn].hasGone = true;
    table[turn].turn = false;
    table[turn].total = total;
    turn++;
    this.setState(
      {
        table: table,
        turn: turn
      },
      () => this.turn()
    );
  }
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Switch>
            <Route path="/table">
              <Table
                {...this.state}
                draw={this.draw}
                hit={this.hit}
                stay={this.stay}
                change={this.changeAceValue}
              />
            </Route>
            <Route exact path="/">
              <Account
                account={this.state.account}
                seat={this.seats}
                reset={this.resetSeats}
              />
            </Route>
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
