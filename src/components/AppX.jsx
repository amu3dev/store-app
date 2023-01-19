import React, { Component } from "react";
import NavBar from "./NavBar";
import Counters from "./Counters";
class AppX extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 1 },
      { id: 4, value: 0 },
    ],
  };
  render() {
    return (
      <div>
        <NavBar />
        <Counters
          counters={this.state.counters}
          onDelete={() => this.handleDelete(this.props.counter.id)}
          onIncrement={() => this.handleIncrement(this.props.counter)}
          onReset={this.handleReset}
        />
      </div>
    );
  }

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counters[index] };
    console.log("counters[index]", counters[index]);
    counters[index].value++;
    this.setState({ counters });
  };
  handleDelete = (counterId) => {
    this.setState({
      counters: this.state.counters.filter((c) => c.id !== counterId),
    });
  };

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };
}

export default AppX;
