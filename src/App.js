import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "./pages/Nav";

// Op de homepage voegen we bovenaan een input toe (volledige breedte, beetje margin)
// daaronder een listgroup met links (over de volledige breedte)

class App extends Component {
  render() {
    return (
      <Router>
        <Nav />

        <Switch>
          <Route path="/pokemon" />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    );
  }
}

export default App;
