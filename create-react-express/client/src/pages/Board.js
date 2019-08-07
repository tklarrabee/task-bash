import React, { Component } from "react";
// TODO: Set Kanban Card Element as Child Element to the Board
import NavbarAll from "../components/NavbarAll";
import Footer from "../components/Footer";



class Board extends Component {
    state = {
        Columm: ""
    };
    render() {
        return (
            <div>
                <NavbarAll />
               
                    <p>this is going to be board page</p>
                    <Footer />
              
            </div>
        );
    }
};
export default Board;
