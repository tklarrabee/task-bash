import React, {Component} from "react";
import "./style.css";
import Navigate from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Redirect } from 'react-router-dom'
import axios from 'axios'

class Navbar extends Component {
    constructor() {
        super()
        this.logout = this.logout.bind(this)
    }

    logout(event) {
        event.preventDefault()
        console.log('loggin out')
        axios.post('/user/logout').then(res => {
            console.log(res.data)
            if (res.status === 200) {
                this.props.updateUser({
                    loggedIn: false,
                    username: null
                })
            }
        }).catch(error => {
            console.log('logout error');
            console.log(error);
        })
    }

    render() {
        const loggedIn = this.props.loggedIn;
        console.log('navbar props')
        console.log(this.props);

        
            
                return (
                    <div>
                        <Navigate bg="dark" variant="dark">
                            <Navigate.Brand href="/">Task-Bash</Navigate.Brand>
                            
                                {loggedIn ? (
                                    <Nav className="mr-auto">
                                        <Nav.Link href="/summary">Summary</Nav.Link>
                                        <Nav.Link href="/client">Client</Nav.Link>
                                        <Nav.Link href="/board">Board</Nav.Link>
                                        <Nav.Link to="#" onClick={this.logout}>Logout</Nav.Link>
                                    </Nav>

                                ) : (
                                    <Nav className="mr-auto">
                                        <Nav.Link href="/login">Login</Nav.Link>
                                        <Nav.Link href="/create">Create Account</Nav.Link>
                                    </Nav>
                                    )}
                            
                        </Navigate>
                    </div>
                )

    }
}

export default Navbar
