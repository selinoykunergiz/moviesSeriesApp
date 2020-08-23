import React, { Component } from "react";
import Media from "../../components/media/media.js";
import "./series.css";

class Series extends Component {
  state = {
    series: [],
    isLoading: true,
    errorMessage: false
  };

  componentDidMount() {
    setTimeout(() => {
      fetch(
        "https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json"
      )
        .then((data) => data.json())
        .then((series) => {
          if(series.entries.length > 0){
            series.entries.sort((a, b) => a.title.localeCompare(b.title));
            var filteredData = series.entries.filter(function (el) {
              return el.programType === "series" && el.releaseYear >= 2010;
            });
            this.setState({ series: filteredData, isLoading: false });
          }
        })
        .catch( err => {
            this.setState({ errorMessage: true, isLoading: false });
        });
    }, 1000);
  }

  render() {
    const { isLoading } = this.state;
    const { errorMessage} = this.state;
        return (
            <div>
              <div className="allProject clearfix">
                {isLoading ? "Loading..." : ""}
                {errorMessage ? "Oops, something went wrong..." : ""}
                {this.state.series.map((serie) => (
                  <div key={serie.title}>
                    <Media
                      url={serie.images["Poster Art"].url}
                      title={serie.title}
                    ></Media>
                  </div>
                ))}
              </div>
            </div>
          );
  }
}

export default Series;
