import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './components/AppContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/index.css';

class App extends Component {
    render(){
        return(
            <AppContainer/>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))