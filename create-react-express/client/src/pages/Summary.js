import React, { Component } from "react";
import Wrapper from "../components/Wrapper";
// import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'
// import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
// import Projects from "../components/DisplayProjects";
import projectAPI from "../utils/project"
// import userAPI from "../utils/user"

// import DeleteBtn from "../../components/DeleteBtn";
// import { List, ListItem } from "../../components/List";


class Summary extends Component {
    constructor() {
        super()
        this.state = {
            login: "",
            projects: []
        };
        // this.loadProjects = this.loadProjects.bind(this)
    }
    

    loadProjects = user => {
        console.log(user)
        projectAPI.getProjects(user)
            .then(
                res => 
                {
                    console.log(res.data)
                    return  res.data
                    // return this.setState({projects: res.data})
                }
            )
            .catch(err => console.log(err))
            // console.log(this.state.projects)  
    }
// 
    async componentDidMount() {
        // this.props.getUser()
        const user = {id: this.props.userId}
        console.log('Summary Page props.userId')
        console.log(user)
        let myProjects = await this.loadProjects(this.props.userId)

        this.setState({projects: myProjects})
        console.log(myProjects)
        // console.log(userId)
        // this.loadProjects(userId)
        // this.loadProjects(user)
        // console.log("State after project mount")
        // console.log(this.state.projects)
    }

    componentDidUpdate(prevProps) {
    
        // Typical usage (don't forget to compare props):
        if (this.props.userId !== prevProps.userId) {
          this.loadProjects(this.props.userId)
          console.log(this.state.projects)
        }
      
      
    }
    
    render() {
        // const loggedIn = this.props.loggedIn
        // if(loggedIn) this.props.getUser()
        // const userId = {id: this.props.userId}
        
        // if(userId) {
            //     this.loadProjects(userId)
            // }
            
            
            return (
            <div>
                {/* <NavbarAll /> */}
                <Wrapper>
                    <Container style={{ marginTop: 30 }}>
                        <Wrapper>

                            {/* Nav Sidebar */}
                            <Row>
                                <Col xs={2}>
                                    <Card>
                                        <Card.Header>Links</Card.Header>
                                        <Button variant="primary" >New Project</Button>
                                        <Button variant="primary" >New Project</Button>
                                        <Button variant="primary" >New Project</Button>
                                        <Button variant="primary" >New Project</Button>
                                        <Button variant="primary" >New Project</Button>
                                        <Button variant="primary" >New Project</Button>
                                        <Button variant="primary" >New Project</Button>
                                        <Button variant="primary" >New Project</Button>
                                    </Card>
                                </Col>
                                {/* Top row column */}
                                <Col xs={10}>
                                    <Row>
                                        <Col xs={12}>
                                            <Card>
                                                <Card.Header>Boards!</Card.Header>
                                                <Container>
                                                    <Card.Body>
                                                        <Row>
                                                            <Col xs={6}>
                                                                <Card>
                                                                    <Card.Header>My Boards!</Card.Header>
                                                                    <Container>
                                                                        <Card.Body>
                                                                            <Row>
                                                                                <Col>

                                                                                    <Card.Title>You Currently have X Projects Open!</Card.Title>
                                                                                    {/* <Projects /> */}

                                                            
                                                                                </Col>

                                                                            </Row>





                                                                        </Card.Body>
                                                                    </Container>
                                                                </Card>
                                                            </Col>
                                                            <Col xs={6}>

                                                                <Card>
                                                                    <Card.Header>Shared Boards!</Card.Header>
                                                                    <Container>
                                                                        <Card.Body>
                                                                            <Row>
                                                                                <Col>

                                                                                    <Card.Title>You Currently have X Projects Open!</Card.Title>
                                                                                </Col>

                                                                            </Row>





                                                                        </Card.Body>
                                                                    </Container>
                                                                </Card>
                                                            </Col>


                                                        </Row>





                                                    </Card.Body>
                                                </Container>
                                            </Card>
                                        </Col>

                                    </Row>

                                    <Row>



                                    </Row>

                                    <Row>
                                        <Col xs={12}>
                                            <Card>
                                                <Card.Header>Invites!</Card.Header>
                                                <Container>
                                                    <Card.Body>
                                                        <Row>
                                                            <Col>

                                                                <Card.Title>You Currently have X Projects Open!</Card.Title>
                                                            </Col>

                                                        </Row>





                                                    </Card.Body>
                                                </Container>
                                            </Card>
                                        </Col>


                                    </Row>
                                </Col>



                            </Row>
                            <div>

                            </div>
                        </Wrapper>
                    </Container>

                </Wrapper>
            </div>


        );
    }
}
export default Summary;
