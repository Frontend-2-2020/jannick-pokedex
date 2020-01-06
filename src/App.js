import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "./Nav";
import Detail from "./pages/Detail";

// ID achter "detail" plaatsen in de titel

class App extends Component {
  render() {
    return (
      <Router>
        <Nav />

        <Switch>
          <Route path="/pokemon/:pokemonId" component={Detail} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    );
  }
}

export default App;
