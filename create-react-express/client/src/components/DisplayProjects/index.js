import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import DeleteBtn from "../DeleteBtn";
import API from "../../utils/API";
import { Col, Row, Container } from "../Grid";
import { List, ListItem } from "../List";
import { Input, TextArea, FormBtn } from "../Form";

class Projects extends Component {
  // Setting our component's initial state
  state = {
    projects: [],
    name: "",
    owner: "",
    description: ""
  };

  // When the component mounts, load all Projects and save them to this.state.Projects
  componentDidMount() {
    this.loadProjects();
  }

  // Loads all Projects  and sets them to this.state.Projects
  loadProjects = () => {
    API.getProjects()
      .then(res =>
        this.setState({ projects: res.data, name: "", owner: "", description: "" })
      )
      .catch(err => console.log(err));
  };

  // Deletes a book from the database with a given id, then reloads Projects from the db
  deleteProject = id => {
    API.deleteProject(id)
      .then(res => this.loadProjects())
      .catch(err => console.log(err));
  };

  // Handles updating component state when the user types into the input field
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, use the API.saveProject method to save the book data
  // Then reload Projects from the database
  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.name && this.state.owner) {
      API.saveProject({
        name: this.state.name,
        owner: this.state.owner,
        description: this.state.description
      })
        .then(res => this.loadProjects())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>What Projects Should I Read?</h1>
            </Jumbotron>
            <form>
              <Input
                value={this.state.name}
                onChange={this.handleInputChange}
                name="name"
                placeholder="project name (required)"
              />
              <Input
                value={this.state.owner}
                onChange={this.handleInputChange}
                name="owner"
                placeholder="owner (required)"
              />
              <TextArea
                value={this.state.description}
                onChange={this.handleInputChange}
                name="description"
                placeholder="description (Optional)"
              />
              <FormBtn
                disabled={!(this.state.owner && this.state.name)}
                onClick={this.handleFormSubmit}
              >
                Submit Project
              </FormBtn>
            </form>
          </Col>
          <Col size="md-12 sm-12">
            <Jumbotron>
              <h1>Projects On My List</h1>
            </Jumbotron>
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
        </Row>
      </Container>
    );
  }
}

export default Projects;
