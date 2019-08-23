import React, { Component } from "react";
import Loading from "../components/Loading";
// import NavbarAll from "../components/NavbarAll";
// import Footer from "../components/Footer";


class Client extends Component {
    state = {
        favoriteBoard: ""
    };
    render() {
        return (
            <div>
                <Loading text="loading Meow">
                    <div>this is going to be a calandar page</div>
                    </Loading>
            </div>
        );
    }
};
export default Client;