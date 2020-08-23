import React from "react";
import "./header.css";

const Header = () => (
  <div className="header">
    <div className="headerContent">
      <div className="headerContentDemo clearfix">
      <p className="headerParag">DEMO Streaming</p>
        <ul className="list clearfix">
          <li className="listElementHeader">
            <a href="#" className="headerLogIn">Log in</a>
          </li>
          <li className="listElementHeader">
            <a href="#" className="headerFree">Start your free trial</a>
          </li>
        </ul>
      </div>
    </div>

    <div className="headerContentSecond">
      <div className="headerContentDemoSecond clearfix">
        <p className="headerParag">Popular Titles</p>
      </div>
    </div>
  </div>
);

export default Header;
