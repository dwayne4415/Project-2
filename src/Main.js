import React, { Component } from "react";

import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";
import Driveways from "./Driveways";
import Contact from "./Contact";
import Foundations from "./Foundations";
import Patios from "./Patios";

class Main extends Component {
    render() {
        return ( < HashRouter >
            <
            div class = "header" >
            <
            h1 > New Beginings Contruction < /h1> <
            img src = "https://imagescdn.staticp.com/api/image/display/custom/New%20Beginnings%20Construction/a50x50/ad3f674d-8fc3-48b1-8c30-65a373ec9e51.jpg"
            alt = "" / >
            <
            p > Concrete and more! < /p> < /
            div > <
            div >
            <
            ul className = "header" >
            <
            li > < NavLink exact to = "/" > Driveways < /NavLink></li >
            <
            li > < NavLink to = "/Foundations" > Foundations < /NavLink></li >
            <
            li > < NavLink to = "/Patios" > Patios < /NavLink> </li >
            <
            li > < NavLink to = "/contact" > Contact < /NavLink></li >

            <
            /ul> <
            div className = "content" >
            <
            Route exact path = "/"
            component = { Driveways }
            /> <
            Route path = "/Foundations"
            component = { Foundations }
            /> <
            Route path = "/Patios"
            component = { Patios }
            /> <
            Route path = "/contact"
            component = { Contact }
            />


            <
            /div> < /
            div > <
            /HashRouter>
        );
    }
}

export default Main;