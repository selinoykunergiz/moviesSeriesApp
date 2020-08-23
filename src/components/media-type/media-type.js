import React, { Component } from "react";
import "./media-type.css";
import logo from "../../assets/placeholder.png";

class MediaType extends Component {
  render() {
    return (
      <div className="mediaItem">
        <img src={logo} alt="img" />
        <span>{this.props.middle}</span>
        <label>{this.props.title}</label>
      </div>
    );
  }
}

export default MediaType;
