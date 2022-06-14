import React from "react";
import LanguageContext from "../contexts/LanguageContext";

class Button extends React.Component {
    renderSubmit(value) { //helper function 
        return value === "english" ? "Submit" : "Voorleggen"
    }
    render() {
        return (
            <button className="ui button primary">
                <LanguageContext.Consumer>
                    {(value) => this.renderSubmit(value)}
                </LanguageContext.Consumer>
            </button>
        );
        // With Consumer, you can access to the Context data
        // Whenever you user Consumer, you always provide one child(is always going to be a function)
    }
}

export default Button;
