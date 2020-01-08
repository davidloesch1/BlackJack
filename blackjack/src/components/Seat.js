import React, { Component } from 'react'
import Card from './Card'
import "./Seat.css"

function Seat(props) {
    console.log(props.seat)
    let cards
    if(props.seat.hand.length > 0){
        cards = props.seat.hand
        cards = cards.map(el => {
        return <Card img={el.image} />
        }) 
    }

    
    return(
        <>
            <h1>{props.seat.seat}</h1>
            { cards }
        </>
    )
}


export default Seat
