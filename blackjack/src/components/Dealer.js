import React, { Component } from 'react'
import Card from './Card'
import './Dealer.css'

function Dealer(props) {
    let back = "images/1080a4bd1a33cec92019fab5efb3995d.png"
    let cards
    if(props.dealer.hand.length > 0){
        cards = props.dealer.hand
        cards = cards.map(el => {
        return <Card img={el.image} />
        }) 
    }

    
    return(
        <>
            <h1>{props.dealer.seat}</h1>
            { cards }
            <img src={back} style={{width: '100px', height: 'auto'}}/>
        </>
    )
}

export default Dealer
