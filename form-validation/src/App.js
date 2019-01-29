import React from 'react';
import logo from './images/logo.svg';
import './App.css';
import Form from './Form.js';

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>React Form Validation Demo</h2>
                </div>
                <Form />
            </div>
        )
    }
}

export default App;