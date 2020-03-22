import React, { Fragment } from 'react';
import '../css/header.css';

function Header() {
    return (
        <Fragment>
            <div className="top-bar">
                <img className="header-img col-md-3 col-xs-4 vert-align" src="src/resources/headshot.jpg"/>
            </div>
        </Fragment>
    );
}

export default Header;