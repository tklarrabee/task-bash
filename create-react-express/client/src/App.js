import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axios from 'axios';
import Welcome from "./pages/Welcome";
import Client from "./pages/Client";
import Board from "./pages/Board";
import Login from "./components/Login";
import Logout from "./pages/Logout";
import CreateAccount from "./pages/CreateAccount";
import Summary from "./pages/Summary";
import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import Wrapper from "./components/Wrapper";
import "./App.css";
import Footer from "./components/Footer";

class App extends Component {
  constructor() {
    super()
    this.state = {
      loggedIn: false,
      username: null
    };
    this.getUser = this.getUser.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)
    this.updateUser = this.updateUser.bind(this)
  }

  componentDidMount() {
    this.getUser()
  }

  updateUser (userObject) {
    this.setState(userObject)
  }

  getUser() {
    axios.get('/user/').then(response => {
      console.log('Get user response: ')
      console.log(response.data)
      if (response.data.user) {
        console.log('Get User: There is a user saved in the server session: ')

        this.setState({
          loggedIn: true,
          username: response.data.user.username
        })
      } else {
        console.log('Get user: no user');
        this.setState({
          loggedIn: false,
          username: null
        })
      }
    })
  }
  // <>
  render() {
    return (
      <div>
        <Router>
          <Navbar updateUser={this.updateUser} loggedIn={this.state.loggedIn}></Navbar>
            <Switch>
              <Route exact path="/" component={Welcome} />
              <Route exact path="/client" component={Client} />
              <Route exact path="/board" component={Board} />
              <Route exact path="/login" 
                render={() => <Login 
                updateUser={this.updateUser} loggedIn={this.state.loggedIn} />} 
                />
              <Route exact path="/create" component={CreateAccount} />
              <Route exact path="/logout" component={Logout} />
              <Route exact path="/summary" component={Summary} />
            </Switch>
          <Footer />
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
