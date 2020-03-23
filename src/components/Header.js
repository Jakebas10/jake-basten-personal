import React, { Fragment } from 'react';
import '../css/header.css';

function Header() {
    return (
        <Fragment>
            <div className="header-top-bar">
                <div className="row">
                    <div className="col-md-1"/>
                    <img id="header-img" className="col-md-3 col-xs-4 vert-align" src="src/resources/headshot.jpg"/>
                </div>
            </div>
        </Fragment>
    );
}

export default Header;