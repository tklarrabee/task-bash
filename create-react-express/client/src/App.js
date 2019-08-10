import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Client from "./pages/Client";
import Board from "./pages/Board";
<<<<<<< HEAD
import Navbar from "./components/Navbar";
=======
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import CreateAccount from "./pages/CreateAccount";
import Summary from "./pages/Summary";
import Navbar from "./components/NavbarAll";
>>>>>>> origin/izzyrouter
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import "./App.css";

class App extends Component {
  state = {
    user: {}
  };

  // <>
  render() {
    return (
      <div>
        <Router>

            <Switch>
              <Route exact path="/" component={Welcome} />
              <Route exact path="/client" component={Client} />
              <Route exact path="/board" component={Board} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/create" component={CreateAccount} />
              <Route exact path="/logout" component={Logout} />
              <Route exact path="/summary" component={Summary} />
            </Switch>
<<<<<<< HEAD
          </Wrapper>
            <Footer />
=======

>>>>>>> origin/izzyrouter
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
