import React, { Component } from "react";
import DeleteBtn from "../DeleteBtn";
import Project from "../../utils/project"
import { List, ListItem } from "../List";
import { Input, TextArea, FormBtn } from "../Form";
import Wrapper from "../../components/Wrapper";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

class Projects extends Component {
  constructor(props) {
    super(props)
  this.state = {
    projects: [],
    name: "",
    owner: "",
    description: ""
  };
  this.loadProjects = this.loadProjects.bind(this)
}



  // When the component mounts, load all Projects and save them to this.state.Projects
  componentDidMount() {
    const user = { id: this.props.idNum };
    const idNum = user.id;
    console.log("COMPONENT MOUNT", this.props.idNum);

    this.setState({ owner: idNum })
    console.log(idNum)
    // this.loadProjects(this.state.user)
  }

  // Loads all Projects  and sets them to this.state.Projects
  loadProjects = (user) => {
    Project.getProjects(user)
      .then(res =>
        console.log("TYLER'S ERROR", res, user)
        // this.setState({ projects: res.data, name: "", owner: "", description: "" })
      )
      .catch(err => console.log(err));
  };

  // Deletes a book from the database with a given id, then reloads Projects from the db
  deleteProject = id => {
    Project.deleteProject(id)
      .then(res => this.loadProjects(this.props.user.id))
      .catch(err => console.log(err));
  };

  // Handles updating component state when the user types into the input field
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value })
   }

  // When the form is submitted, use the API.saveProject method to save the book data
  // Then reload Projects from the database
  handleFormSubmit = event => {
    event.preventDefault();

    if (this.state.name) {
      const user = { id: this.props.idNum };
      const idNum = user.id;
      console.log("current user being logged under: " + idNum)
      Project.newProject({
        name: this.state.name,
        owner: idNum,
        description: this.state.description
      })
        .then(res => this.loadProjects(this.props.idNum))
        .catch(err => console.log(err));
    }
  };

  render(props) {
  
    const user = { id: this.props.idNum }
    console.log("USER FROM 67 of DISPLAY PROJ COMP", user)
    // this.setState({owner: user});
    Project.getProjects(user).then(res => console.log("GETPROJEEEEE", res))
    // this.setState({user: this.props.userId}) 

    console.log(this.props.idNum)
    return (
      <Container style={{ marginTop: 30 }}>
        <Wrapper>

          {/* Nav Sidebar */}
          <Row>
            <Col xs={4}>
              <Card>
                <Card.Header>New Project:</Card.Header>
                <form>
                  <Input
                    value={this.state.name}
                    onChange={this.handleInputChange}
                    name="name"
                    placeholder="project name (required)"
                  />
                  {/* <Input
                    value={this.state.owner}
                    onChange={this.handleInputChange}
                    name="owner"
                    placeholder="owner (required)"
                  /> */}
                  <TextArea
                    value={this.state.description}
                    onChange={this.handleInputChange}
                    name="description"
                    placeholder="description (Optional)"
                  />
                  <FormBtn
                    disabled={!(this.state.name)}
                    onClick={this.handleFormSubmit}
                  >
                    Submit Project
              </FormBtn>
                </form>
              </Card>
            </Col>
            {/* Top row column */}
            <Col xs={8}>
              <Row>
                <Col xs={12}>
                  <Card>
                    <Card.Header>My Boards!</Card.Header>
                    <Container>
                      <Card.Body>
                        <Col size="md-12 sm-12">

                          {this.state.projects.length ? (
                            <List>
                              {this.state.projects.map(project => {
                                return (
                                  <ListItem key={project._id}>
                                    <a href={"/projects/" + project._id}>
                                      <strong>
                                        {project.name} by {project.owner}
                                      </strong>
                                    </a>
                                    <DeleteBtn onClick={() => this.deleteProject(project._id)} />
                                  </ListItem>
                                );
                              })}
                            </List>
                          ) : (
                              <h3>No Projects</h3>
                            )}
                        </Col>






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
    );
  }
}

export default Projects;
