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
import ProjectDisplay from "./components/DisplayProjects";
// import projectAPI from "./utils/project"
// import Wrapper from "./components/Wrapper";
import "./App.css";


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loggedIn: false,
      username: null,
      id: null,
      projects: []
    };
    this.getUser = this.getUser.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)
    this.updateUser = this.updateUser.bind(this)
    this.updateProject = this.updateProject.bind(this)
    // this.loadProjects = this.loadProjects.bind(this)
  }


  componentDidMount() {
    this.getUser()
  }

  updateUser(userObject) {
    this.setState(userObject)
  }

  updateProject(projectObject) {
    this.setState(projectObject)
  }

  getUser() {
    axios.get('/user').then(response => {
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

  //   loadProjects = user => {
  //     const request = {id: user}
  //     console.log(request)
  //     projectAPI.getProjects(request)
  //         .then(
  //             res => 
  //             {
  //                 console.log(res.data)
  //                 return this.setState({projects: res.data})
  //             }
  //         )
  //         .catch(err => console.log(err))
  //         // console.log(this.state.projects)  
  // }

  // <>
  render() {
    const { username, loggedIn, id } = this.state
    return (
      <div>
        <Router>
          <Navbar updateUser={this.updateUser} loggedIn={this.state.loggedIn}></Navbar>
          <Switch>
            <Route exact path="/" component={Welcome}
              updateUser={this.updateUser}
              loggedIn={this.state.loggedIn}
            />
            <Route exact path="/calendar" component={Calendar} />
            <Route exact path="/board/:id" render={(props) => <Board
              {...props}
              updateUser={this.updateUser}
              loggedIn={this.state.loggedIn}
              username={this.state.username}
              updateProject={this.updateProject}
            />}
            />
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
            <Route exact path="/deleteproject/:id"
              component={Summary} />}
          />
              <Route exact path="/logout" component={Logout} />
            <Route exact path="/create" component={CreateAccount} />
            {/* <Route exact path="/summary" 
                render={() => <Summary 
                  loggedIn={this.state.loggedIn}
                  userId={this.state.id}
                  updateProject={this.updateProject}
                  getUser={this.getUser}
                />}
              /> */}
            <Route exact path="/summary">
              {username ? <Summary
                loggedIn={loggedIn}
                userId={id}
                updateProject={this.updateProject}
                getUser={this.getUser}
              /> : null}
            </Route>

          </Switch>
          <Footer />
        </Router>
      </div>
    );
  }

}



export default App;
