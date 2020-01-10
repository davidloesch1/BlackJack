import React from 'react'
import './Info.css'

function Info(props){
    return(
        <div className='info-container'>
            <h5>Amount: {props.account}</h5>
            <h5>Cards Remaining: {props.remaining}</h5>
        </div>
    )
}

export default Info