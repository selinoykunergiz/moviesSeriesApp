import React, { Component } from "react";
import "./home.css";
import MediaType from "../../components/media-type/media-type.js";
import Header from "../../components/header/header.js";
import Footer from "../../components/footer/footer.js";
import Series from "../series/series.js";
import Movies from "../movies/movies.js";

import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Router>
          <div className="homeContainer clearfix">
            <Route
              path="/"
              exact
              render={() => {
                return (
                  <div>
                    <NavLink to="/series">
                      <MediaType title="Populer Series" middle="SERIES"></MediaType>
                    </NavLink>
                    <NavLink to="/movies">
                      <MediaType title="Populer Movies" middle="MOVIES"></MediaType>
                    </NavLink>
                  </div>
                );
              }}
            ></Route>
            <Route path="/series" exact component={Series}></Route>
            <Route path="/movies" exact component={Movies}></Route>
          </div>
        </Router>
        <Footer/>
      </div>
    );
  }
}

export default Home;
