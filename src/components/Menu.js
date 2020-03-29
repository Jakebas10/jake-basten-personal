import React, { Component, Fragment } from 'react'
import '../css/menu.css';

class Menu extends Component {

    constructor(props) {
        super(props);

        let menuItems = [
            { name: 'About Me', active: 'active' },
            { name: 'Blog', active: '' },
            { name: 'Resume', active: '' }
        ]

        this.state = {
            menuItems: menuItems
        };
    }

    changeActive(name) {
        let newItems = this.state.menuItems;
        newItems.forEach(item =>
            item.active = (name === item.name) ? 'active' : ''
        );
        this.setState({ menuItems: newItems });
    }

    render() {
        return (
            <Fragment>
                <div className="menu-container">
                    <ul className="nav nav-tabs nav-fill">
                        {this.state.menuItems.map(item =>
                            <li className="nav-item">
                                <div className={"nav-link menu-item " + item.active} onClick={this.changeActive.bind(this, item.name)}>
                                    {item.name}
                                </div>
                            </li>
                        )}
                    </ul>
                </div>
            </Fragment>
        );
    }
}

export default Menu;