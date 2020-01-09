import React, { Component } from 'react'
import "./Card.css"

export class Card extends Component {
    render() {
        return <img className="card" src={this.props.img} />
    }
}

export default Card
