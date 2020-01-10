# Project Overview


## Project Description

This is meant to be a simple blackjack game following the rules of casino style play for single and eventually mulitple players at once.  Eventually adding on account features for tracking accounts once we introduce database components.  There is currently a list of bugs that need to be addressed in order for the game to really be fully functional as well as styling components to make the UI/UX more appealing.

## Project Links

- [https://github.com/davidloesch1/BlackJack]()
Working Demo: 
http://venomous-rod.surge.sh/table


## Wireframes

The below are links to my wireframes, which were done on LucidCharts as well as using an app called Wireflow for the layouts.  Originally the layouts were designed for the phone, but the buildout was made for desktop with the idea that it would eventually be made for moble devices once the bugs are worked out.

- [https://www.lucidchart.com/invitations/accept/e50fcce9-f30b-418f-9c9e-bb2a8c29440c]()
- [https://www.lucidchart.com/invitations/accept/9094ff81-a184-42a0-8845-836188525bb0]()

App will house all other components, there will be a table component for the actual game board, as well as an account component that will house all information related to the account, such as balance and win stats.  Each will also house a number of other smaller compoenents like "Card" and "Dealer"

### MVP/PostMVP - 5min

MVP -  of this project will be to have 1 deck, 1 player, and a dealer that you will be able to play a single hand of blackjack per turn and go throught the entire deck, then be able to reshuffle the deck and continue play.

Post MVP - will be a full casinon style play for single player (multiplayer eventually).  using typical casino house rules, a player will be able to play up to 7 seats on their own, with each seat producing a seperate hand and betting amount.  The player will have some setting options such as "apply bet to all seats" or "change betting amout each deal"

My focus for this project will be UI/UX and functionality.  I want this game to be fun to play without any extra features that may hinder gameplay.

#### MVP EXAMPLE

- Find and use external api - deckofcardsapi.com 
- https://deckofcardsapi.com/api/deck/bilfs0xe2sxh/draw/?count=1
- Proof of API rendering: 
http://comfortable-stem.surge.sh/

The api I'm using only deals with decks of cards, the ability to shuffle, and keeping track of any cards drawn.  Using this, I'll use state to manipulate the data and create game logic to offer players.

#### PostMVP EXAMPLE

- This will be updated when bugs are worked out and the account feature is introduced.

## Components
##### Writing out your components and its descriptions isn't a required part of the proposal but can be helpful.
| Component | Description | 
| --- | :---: |  
| App | This will make initial data pull and be the core source of data | 
| Account | This will hold account information | 
| Table | This will house all components related to gameplay | 

## Time Frames

| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Adding Form | H | 6hrs| 2hrs | - |
| Working with API | H | 6hrs| 3hrs | - |
| Building components | H | 20hrs | 18hrs | - |
| CSS | M | 6hrs | 1hr | - |
| Game Logic | H | 8hrs | 8hrs | - |
| Testing | H | 8hrs | 5hrs | - |
| Total | H | 54hrs| 37hrs | - |

## Code Snippet


```
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
```

## Issues and Resolutions

There are a number of issues, here are some known bugs so far:
- dealer logic only works under certain conditions,  I believe its a timing issue
- seat containers don't house the cards if there are more that 3-4, css and html issue
- if a player busts, it doesn't move to the next player automatically
- trouble reseting the table when a turn is over
- account feature is not set up
- betting feature is not set up
- doubling feature is not set up
- splitting feature is not set up
- many many many more!!!
