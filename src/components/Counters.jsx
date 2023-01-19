import React, { Component } from "react";
import Counter from "./Counter";
class Counters extends Component {
  render() {
    return (
      <div>
        <button className="btn btn-dark btn-sm m-2" onClick={this.handleReset}>
          Reset
        </button>
        {this.props.counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={() => this.props.handleDelete(counter.id)}
            onIncrement={() => this.props.handleIncrement(counter)}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
