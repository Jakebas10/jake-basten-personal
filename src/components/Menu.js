import React, {Component, Fragment} from 'react'
import '../css/menu.css';

class Menu extends Component {

    render() {
        
        const menuItems = ['About Me', 'Blog', 'Resume'];
        return(
            <Fragment>
                <ul>
                    {menuItems.map(item => (
                        <li>{item}</li>
                    ))}
                </ul>
            </Fragment>
        );
    }
}

export default Menu;