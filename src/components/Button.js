import React from "react";
import LanguageContext from "../contexts/LanguageContext";

class Button extends React.Component {
    static contextType = LanguageContext; //this is how hook context to a class component.

    render() {
        const text = this.context === 'english' ? 'Submit' : 'Voorleggen'; //accessing to context and getting value. this.context
        return <button className="ui button primary">{text}</button>;
    }
}

export default Button;
