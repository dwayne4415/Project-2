import React, { Component } from "react";

class Contact extends Component {
    render() {
        return ( <
            div >
            <
            h2 > Questions < /h2> <
            ul >
            <
            li > First Name < /li> <input id ="text" type="text" value=""/ > <
            li > Last Name < /li> <input id ="text" type="text" value=""/ > <
            li > Phone < /li> <input id ="text" type="text" value=""/ > <
            li > Email < /li> <input id ="text" type="text" value=""/ > < /
            ul >
            <
            input id = "Submit"
            type = "button"
            value = "Submit" / >
            <
            /div>
        );
    }
}

export default Contact;