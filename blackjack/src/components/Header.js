import React, { Component } from 'react'
import './Header.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }        
    }

    render(){
        return(
            <>
            <Router>
                <Link to='/'>Home</Link>
                <Link to='/table'>Table</Link>                
            </Router>
            </>
        )
    }

}

export default Header