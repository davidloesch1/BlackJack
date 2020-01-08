import React, { Component } from 'react'

export class Card extends Component {
    render() {
        return <img src={this.props.img} style={{width: '100px', height: 'auto'}}/>
    }
}

export default Card
