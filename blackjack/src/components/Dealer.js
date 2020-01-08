import React, { Component } from 'react'
import Card from './Card'
import './Dealer.css'

function Dealer(props) {
    console.log(props.dealer)
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
        </>
    )
}

export default Dealer
