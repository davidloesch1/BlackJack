import React, { Component } from 'react';
import Table from './components/Table'
import Account from './components/Account';
// import { Router } from 'react-router-dom'
import './App.css';

class App extends Component {
  constructor() {
    super() 
    this.state ={
      account: 0.00
    }
  }

  render() {
    return(
      <>
        <Account account={this.state.account}/>
        <Table account={this.state.account}/>
      </>
    )
  }
}

export default App;
