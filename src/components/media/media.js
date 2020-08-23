import React, { Component } from "react";
import "./media.css";

class Media extends Component {
  render() {
    return (
      <div className="mediaItem">
        <img src={this.props.url} alt="img" />
        <label>{this.props.title}</label>
      </div>
    );
  }
}

export default Media;
