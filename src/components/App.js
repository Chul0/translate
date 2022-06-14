import React from "react";

class App extends React.Component {
    state = { language: "english" };

    onLanguageChange = language => {
        this.setState({ language }) //same as {{ language:language }}
    }

    render() {
        return (
            <div className="ui container">
                <div>
                    Select a language:
                    <i className="flag us" onClick={() => this.onLanguageChange('english')} /> 
                    {/* every time user clicks this, callback onLanguageChange function and pass English */}
                    <i className="flag nl" onClick={() => this.onLanguageChange('dutch')} />
                </div>
                {this.state.language}
            </div>
        );
    }
}

export default App;
