import React, { Component, Fragment } from 'react'
import '../css/menu.css';

class Menu extends Component {

    render() {

        const menuItems = ['About Me', 'Blog', 'Resume'];
        return (
            <Fragment>
                <div className="menu-container">
                    <ul className="nav nav-tabs nav-fill">
                        {menuItems.map(item => (
                            <li className="nav-item">
                                <a className="nav-link menu-item" href="#">{item}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </Fragment>
        );
    }
}

export default Menu;