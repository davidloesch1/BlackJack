import React, { Component } from 'react'
import "./Seat.css"

export class Seat extends Component {
    constructor(props) {
        super(props) 
        this.state={
            card1: this.props.data
        }
    }
    render() {
        console.log(this.props.data)
        return (
            <div className="seat-container">
                <h3>Seat</h3>
            </div>
        )
    }
}

export default Seat
