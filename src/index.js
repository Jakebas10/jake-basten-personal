import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Header from './components/Header';
import About from './components/About';
import Blog from './components/Blog';
import Resume from './components/Resume';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/index.css';

class App extends Component {
    render() {
        const history = createBrowserHistory();
        return (
            <Fragment>
                <Header />
                <div className="content-container">
                    <Router history={history}>
                        <Switch>
                            <Route path="/" exact component={About}/>
                            <Route path="/about" component={About}/>
                            <Route path="/blog" component={Blog}/>
                            <Route path="/resume" component={Resume}/>
                        </Switch>
                    </Router>
                </div>
            </Fragment>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))