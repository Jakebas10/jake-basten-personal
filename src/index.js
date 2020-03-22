import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/index.css';

class App extends Component {
    render(){
        return(
            <Header/>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))