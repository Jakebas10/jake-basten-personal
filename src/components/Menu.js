import React, { Component } from 'react';
import History from './History';
import '../css/menu.css';

class Menu extends Component {

    constructor(props) {
        super(props);

        let menuItems = [
            { name: 'About', active: '' },
            { name: 'Blog', active: '' },
            { name: 'Resume', active: '' }
        ];

        const currentRoute = window.location.pathname.replace('/', '');
        let hasActiveRount = false;
        menuItems.map(item => {
            if (item.name.toLowerCase() === currentRoute.toLowerCase()) {
                item.active = 'active';
                hasActiveRount = true;
                return;
            }
        });
        if (!hasActiveRount) {
            const firstItem = menuItems[0];
            firstItem.active = 'active';
            History.push('/' + firstItem.name.toLowerCase());
        }

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
        History.push('/' + name.toLowerCase());
    }

    render() {
        return (
            <div className="menu-container">
                <ul className="nav nav-tabs nav-fill">
                    {this.state.menuItems.map(item =>
                        <li key={item.name} className="nav-item">
                            <div className={"nav-link menu-item " + item.active} onClick={this.changeActive.bind(this, item.name)}>
                                {item.name}
                            </div>
                        </li>
                    )}
                </ul>
            </div>
        );
    }
}

export default Menu;