import React, { Component } from "react";
import Projects from "../components/DisplayProjects";
import projectAPI from "../utils/project"
import "./styles.css"
// import Projects from "../../../../../task-bash2/create-react-express/client/src/components/DisplayProjects";
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
        this.loadProjects = this.loadProjects.bind(this)
    }
    

    loadProjects = user => {
        console.log(user)
        projectAPI.getProjects(user)
            .then(
                res => 
                {
                    // console.log(res.data)
                    this.setState({projects: res.data})
                    console.log("===USER PROJECTS===")
                    console.log(this.state.projects)
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
        await this.loadProjects(this.props.userId)

        
        // this.setState({projects: myProjects})
        // console.log(userId)
        // this.loadProjects(userId)
        // this.loadProjects(user)
        // console.log("State after project mount")
        // console.log(this.state.projects)
    }


    
    render() {
        // const loggedIn = this.props.loggedIn
        // if(loggedIn) this.props.getUser()
        // const userId = {id: this.props.userId}
        
        // if(userId) {
            //     this.loadProjects(userId)
            // }
            
            
            return (
            <div className="body">
                <div className="site-section">
                    <Projects />
                </div>
            </div>


        );
    }
}
export default Summary;
