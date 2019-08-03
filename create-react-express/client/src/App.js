import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Client from "./pages/Client";
import Board from "./pages/Board";

import Navbar1 from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import "./App.css";

class App extends Component {
  state = {
    user: {}
  };

  // <>
  render() {
<<<<<<< HEAD
    return(
      <Router>
        <div>
          <Navbar1 />
          <Wrapper>
          <Route exact path="/" component={Welcome} />
          <Route exact path="/client" component={Client} />
          <Route exact path="/board" component={Board} />
=======
    return (
      <div>
        <Router>
          <Navbar />
          <Wrapper>
            <Switch>
              <Route exact path="/" component={Welcome} />
              <Route exact path="/client" component={Client} />
              <Route exact path="/board" component={Board} />
            </Switch>
            <Footer />
>>>>>>> 9d673ad75a2aecd8c844f457902f958eeb087e0b
          </Wrapper>
        </Router>
      </div>
    );
  }
  // When there is no state you do not need to extend a class
  // function App() {
  //   return (
  //     <div className="App">
  //       <header className="App-header">
  //         <img src={logo} className="App-logo" alt="logo" />
  //         <p>
  //           Edit <code>src/App.js</code> and save to reload.
  //         </p>
  //         <a
  //           className="App-link"
  //           href="https://reactjs.org"
  //           target="_blank"
  //           rel="noopener noreferrer"
  //         >
  //           Learn React
  //         </a>
  //       </header>
  //     </div>
  //   );
  // }
}
export default App;
