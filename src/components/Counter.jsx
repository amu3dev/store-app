import React, { Component } from "react";
class Counter extends Component {
  state = {count : 0};

  render() {
    console.log("props.value", this.props.value);
    return (
      <div>
        <span className={this.formatBagde()}>{this.formatCount()}</span>
        <button
          type="button"
          className="btn btn-primary m-2"
          onClick={this.props.onIncrement}>
          +
        </button>
        <button className="btn btn-danger m-2" onClick={this.props.onDelete}>
          Detele
        </button>
      </div>
    );
  }
  handeleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  formatCount() {
    const value = this.props.counter.value;

    return value > 0 ? value : 0;
  }
  formatBagde() {
    const value = this.props.counter.value;
    return value > 0
      ? `badge text-bg-secondary m-4`
      : `badge text-bg-warning m-4`;
  }
}

export default Counter;
