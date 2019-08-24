import React, { Component } from "react";
import Wrapper from "../components/Wrapper";
import Projects from "../components/DisplayProjects";
import projectAPI from "../utils/project"
// import Projects from "../../../../../task-bash2/create-react-express/client/src/components/DisplayProjects";
// import userAPI from "../utils/user"

// import DeleteBtn from "../../components/DeleteBtn";
// import { List, ListItem } from "../../components/List";


class Summary extends Component {
    constructor(props) {
        super(props)
        this.state = {
            login: "",
            projects: [],
            userID: ""
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
        console.log('Summary Page' + this.props.userId)
        console.log(user)
        this.setState({userID: user})
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
        // const idNum = { id: this.props.user };
        console.log(this.props.userId + " test");
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
                    <Projects 
                    Projects = {this.props.projects}
                    idNum = {this.props.userId}/>


                </Wrapper>
            </div>


        );
    }
}
export default Summary;
