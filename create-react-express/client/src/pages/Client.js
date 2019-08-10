import React, { Component } from "react";

import NavbarAll from "../components/NavbarAll";
import Footer from "../components/Footer";


class Client extends Component {
    state = {
        favoriteBoard: ""
    };
    render() {
        return (
            <div>
                <NavbarAll />

                <p>this is going to be client page</p>
                <Footer />

            </div>
        );
    }
};
export default Client;