import React, { Component } from 'react'
import './Account.css'

class Account extends Component {
    componentDidMount(){
        this.props.reset()
    }
    render() {
        return (
            <div className="account-container">
                <h1>Account</h1>
                <div className='form-box'>
                    <form>
                        <label>
                            Seat 1
                        <input type="checkbox" name="Seat 1" value="true" onChange={(e)=>this.props.seat(e)}></input>
                        </label>
                        <label>
                            Seat 2
                        <input type="checkbox" name="Seat 2" value="true" onChange={(e)=>this.props.seat(e)}></input>
                        </label>
                        <label>
                            Seat 3
                        <input type="checkbox" name="Seat 3" value="true" onChange={(e)=>this.props.seat(e)}></input>
                        </label>
                        <label>
                            Seat 4
                        <input type="checkbox" name="Seat 4" value="true" onChange={(e)=>this.props.seat(e)}></input>
                        </label>
                        <label>
                            Seat 5
                        <input type="checkbox" name="Seat 5" value="true" onChange={(e)=>this.props.seat(e)}></input>
                        </label>
                        <label>
                            Seat 6
                        <input type="checkbox" name="Seat 6" value="true" onChange={(e)=>this.props.seat(e)}></input>
                        </label>
                        <label>
                            Seat 7
                        <input type="checkbox" name="Seat 7" value="true" onChange={(e)=>this.props.seat(e)}></input>
                        </label>
                        {/* <input type="submit" onClick={(e)=>this.props.seat(e)}></input> */}
                    </form>
                </div>
            </div>
        )
    }
}

export default Account
