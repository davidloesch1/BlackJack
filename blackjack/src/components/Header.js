import React from 'react'
import './Header.css'
import {
    NavLink,
  } from "react-router-dom";

function Header() {
    return(
        <div className="header-container">
            <nav className="header-nav">
                <NavLink exact activeClassName='active' to="/">
                    Account
                </NavLink>
                <NavLink activeClassName='active' to="/table">
                    Table
                </NavLink>
            </nav>            
        </div>
    )
}

export default Header