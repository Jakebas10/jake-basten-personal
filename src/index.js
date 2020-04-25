import React, {Component, Fragment} from 'react';
import ReactDOM from 'react-dom';
import {Switch, Route, Router} from 'react-router-dom';
import History from './components/History';
import Header from './components/Header';
import About from './components/About';
import Blog from './components/Blog';
import Resume from './components/Resume';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/index.css';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Router history={History}>
          <Header/>
          <div className="content-container">
            <Switch>
              <Route path="/" exact component={About}/>
              <Route path="/about" component={About}/>
              <Route path="/blog" component={Blog}/>
              <Route path="/resume" component={Resume}/>
            </Switch>
          </div>
        </Router>
      </Fragment>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('app'))