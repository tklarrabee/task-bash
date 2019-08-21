import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axios from 'axios';
import Welcome from "./pages/Welcome";
import Calendar from "./pages/Calendar";
import Board from "./pages/Board";
import Login from "./components/Login";
import Logout from "./pages/Logout";
import CreateAccount from "./pages/CreateAccount";
import Summary from "./pages/Summary";
import Navbar from "./components/Navbar";
import Register from "./components/Register";
import Footer from "./components/Footer";
import ProjectDisplay from "./components/DisplayProjects"
// import Wrapper from "./components/Wrapper";
import "./App.css";

class App extends Component {
  constructor() {
    super()
    this.state = {
      loggedIn: false,
      username: null,
      id: null
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
          username: response.data.user.username,
          id: response.data.user._id
        })
        console.log(this.state.id)
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
              <Route exact path="/board" component={Board} />
              <Route exact path="/calendar" component={Calendar} />
              <Route exact path="/login" 
                render={() => <Login 
                  updateUser={this.updateUser} 
                  loggedIn={this.state.loggedIn} 
                  />} 
                />
              <Route exact path="/register" 
                render={() => <Register 
                  loggedIn={this.state.loggedIn}
                />} 
              />
              <Route exact path="/projects" 
                render={() => <ProjectDisplay 
                  loggedIn={this.state.loggedIn}
                  userId={this.state.id}
                />} 
              />
              <Route exact path="/logout" component={Logout} />
              <Route exact path="/create" component={CreateAccount} />
              <Route exact path="/summary" component={Summary} />
              
            </Switch>
          <Footer />
        </Router>
      </div>
    );
  }

}
export default App;
