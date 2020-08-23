import React, { Component } from "react";
import Media from "../../components/media/media.js";
import "./movies.css";

class Movies extends Component {
  state = {
    movies: [],
    isLoading: true,
    errorMessage: false
  };

  componentDidMount() {
    setTimeout(() => {
        fetch(
            "https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json"
          )
            .then((data) => data.json())
            .then((moviess) => {
              moviess.entries.sort((a, b) => a.title.localeCompare(b.title));
              var newArray = moviess.entries.filter(function (el) {
                return el.programType === "movie" && el.releaseYear >= 2010;
              });
              this.setState({ movies: newArray , isLoading: false });
            })
            .catch( err => {
                this.setState({ errorMessage: true, isLoading: false });
            });
    },1000)
  }

  render() {
    const { isLoading } = this.state;
    const { errorMessage} = this.state;
    return (
      <div>
        <div className="allProject clearfix">
          { isLoading ? 'Loading...' : ''}
          {errorMessage ? "Oops, something went wrong..." : ""}
          {this.state.movies.map((movie) => (
            <div key={movie.title}>
              <Media
                url={movie.images["Poster Art"].url}
                title={movie.title}
              ></Media>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Movies;
