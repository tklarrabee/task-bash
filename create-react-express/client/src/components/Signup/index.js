import React, { Component } from 'react';
import axios from 'axios';

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            password: ''
        };
        // binds methods the constructor so that they can handle state changes
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({ value: event.target.value });
    }
    handleSubmit(event) {
        event.preventDefault();
        console.log(this.state.username)
        axios.post('/signup', {
            username: this.state.username, 
            password: this.state.password
        })
            .then(response => {
                console.log(response);
                if(response.data) {
                    console.log('successful signup')
                    this.setState({
                        redirectTo: '/login'
                    })
                }
            })

    }

    render()
 {
     return(
         <form onSubmit={this.handleSubmit}>
             <label>
                 Username:
                 <input type='text'/>
             </label>
             <label>
                 Password:
                 <input type='password'/>
             </label>
             <input type='submit' value='Log In' />
         </form>
     )
 }

}

export default Signup;
