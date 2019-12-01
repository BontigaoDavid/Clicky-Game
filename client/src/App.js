import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Jumbotron from "./components/Jumbotron";
import Game from "./pages/game";

class App extends Component {
  render() {
    return (
      <Router>
        <Jumbotron> <h1>Clicky Game</h1> </Jumbotron>
        <Game/>
      </Router>
    );
  }
}

export default App;
