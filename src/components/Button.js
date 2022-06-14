import React from "react";
import LanguageContext from "../contexts/LanguageContext";

class Button extends React.Component {
    static contextType = LanguageContext; //this is how hook context to a class component.

    render() {
        console.log(this.context)
        return <button className="ui button primary">Submit</button>;
    }
}

export default Button;
