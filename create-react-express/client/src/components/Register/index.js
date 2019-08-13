import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import Error from '../Error'
import API from '../../utils/user'
import Wrapper from "../Wrapper";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import { PASSWORD_MATCH } from '../../MessageBundle'

class Register extends Component {
	constructor() {
		super()
		this.state = {
			username: '',
			password: '',
			name: '',
			confirmPassword: '',
			error: false,
			redirectTo: null

		}
		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleChange = this.handleChange.bind(this)
		this.handlePasswordConfirm = this.handlePasswordConfirm.bind(this)
	}
	handlePasswordConfirm(event) {
		if (this.state.password !== event.target.value) {
			this.setState({
				error: true,
				confirmPassword: event.target.value
			})
		} else {
			this.setState({
				error: false,
				confirmPassword: event.target.value
			})
		}
	}

	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		})
	}
	handleSubmit(event) {
		console.log('sign-up handleSubmit, username: ')
		console.log(this.state.username)
		event.preventDefault()
		const user = {
			username: this.state.username,
			password: this.state.password,
			first_name: this.state.password,
			last_name: this.state.password,
			error: false,
			redirectTo: null
		}
		//request to server to add a new username/password
		API.register(user)
			.then(response => {
				console.log(response)
				if (!response.data.errmsg) {
					console.log('successful signup')
					this.setState({ //redirect to login page
						redirectTo: '/login'
					})
				} else {
					console.log('username already taken')
				}
			}).catch(error => {
				console.log('signup error: ')
				console.log(error)

			})
	}


	render() {
		const { error } = this.state
		const loggedIn = this.props.loggedIn
		if (this.state.redirectTo) {
			return (<Redirect to={{ pathname: this.state.redirectTo }} />)
		} else if (loggedIn) {
			return (<Redirect to='/board' />)
		} else {
			return (
				<Wrapper>
					<Container>
						<Card>
							<Card.Header>Create Account</Card.Header>
							<Card.Text>
								<Form>
									<Form.Row>
										<Form.Group as={Col} controlId="formGridEmail">
											<Form.Label>Email</Form.Label>
											<Form.Control
												type='text'
												placeholder='Enter Email'
											/>
											<Form.Label>Password</Form.Label>
											<Form.Control
												type="password"
												placeholder="Password"
												name="password"
												value={this.state.password}
												onChange={this.handleChange}
											/>
											<Form.Label>Confirm Password</Form.Label>
											<Form.Control
												type="password"
												placeholder="Confirm Password"
												name="confirmPassword"
												value={this.state.confirmPassword}
												onChange={this.handlePasswordConfirm}
											/>
											<Form.Label>Name</Form.Label>
											<Form.Control
												type="text"
												placeholder="Name"
												name="name"
												value={this.state.name}
												onChange={this.handleChange}
											/>
											<Button variant="primary" type="submit" onClick={this.handleSubmit}> Submit </Button>
										</Form.Group>
									</Form.Row>
								</Form>
							</Card.Text>
							{error && <Error message={PASSWORD_MATCH} />}
						</Card>
					</Container>
				</Wrapper>
			)

		}

	}
}

export default Register
