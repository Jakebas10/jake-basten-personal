import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/index.css';
import Header from './components/Header';
import About from './components/About';

class App extends Component {
    render() {
        return (
            <Fragment>
                <Header />
                <div className="content-container">
                    <About/>
                </div>
            </Fragment>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))