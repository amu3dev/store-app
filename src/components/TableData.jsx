import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";

class TableData extends Component {
  state = {
    movies: getMovies(),
    moviesNumbers: getMovies().length,
  };
  render() {
    return (
      <div>
        {this.diplayHearder()}
        <table className="table">
          <thead>{this.formatTitle()}</thead>
          <tbody>{this.formatRow()}</tbody>
        </table>
      </div>
    );
  }

  diplayHearder() {
    return this.state.moviesNumbers > 0 ? (
      <h1>
        <span className="badge bg-secondary m-1">
          Showing {this.state.moviesNumbers} Movie in the Database
        </span>
      </h1>
    ) : (
      <h1>
        <span className="badge bg-secondary m-1">
          No Movies in the Database
        </span>
      </h1>
    );
  }

  formatTitle() {
    return (
      <tr>
        <th scope="col">Titile</th>
        <th scope="col">Genre</th>
        <th scope="col">Stock</th>
        <th scope="col">Rate</th>
        <th scope="col"> </th>
      </tr>
    );
  }

  formatRow() {
    return this.state.movies.map((movie) => (
      <tr key={movie._id}>
        <td>{movie.title}</td>
        <td>{movie.genre.name}</td>
        <td>{movie.numberInStock}</td>
        <td>{movie.dailyRentalRate}</td>
        <td>
          <button
            onClick={() => this.handelDelete(movie)}
            className="btn btn-danger btn-sm">
            Delete
          </button>
        </td>
      </tr>
    ));
  }
  handelDelete = (movie) => {
    this.setState({
      movies: this.state.movies.filter((movieX) => movieX._id !== movie._id),
    });
    this.setState({ moviesNumbers: this.state.moviesNumbers - 1 });
  };
}

export default TableData;
