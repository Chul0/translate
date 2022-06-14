import React from "react";
import UserCreate from "./UserCreate";
import LanguageContext from "../contexts/LanguageContext";

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
                <LanguageContext.Provider value={this.state.language}> 
                    <UserCreate />
                </LanguageContext.Provider>
                {/* 
                1) You have to wrap the cmp with Context.Provider so you can update value. 
                2)To update, to pass new value you should use pass value={} */}
            </div>
        );
    }
}

export default App;
