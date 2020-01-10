import React, { Component } from "react";
import Dealer from "./Dealer";
import Seat from "./Seat";
import Info from "./Info";
import "./Table.css";

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let dealer = this.props.table.slice(0);
    let seats = dealer;
    dealer = dealer.pop();
    seats = seats.map((el, i) => {
      if (el.enabled === true) {
        return (
          <Seat
            key={i}
            seat={el}
            hit={this.props.hit}
            stay={this.props.stay}
            change={this.props.change}
          />
        );
      }
    });

    return (
      <div className="table">
        <h1>Table</h1>
        <Info {...this.props} />
        <Dealer
          dealer={dealer}
          hit={this.props.hit}
          change={this.props.change}
          stay={this.props.stay}
          check={this.props.check}
        />
        <div className="seat-row">{seats}</div>

        <button onClick={() => this.props.draw()}>Deal</button>
      </div>
    );
  }
}

export default Table;
