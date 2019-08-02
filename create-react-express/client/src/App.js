import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Client from "./pages/Client";
import Board from "./pages/Board";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route exact path="/client" component={Client} />
          <Route exact path="/board" component={Board} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
