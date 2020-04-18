import React, { Fragment } from 'react';
import Menu from './menu';
import '../css/header.css';

function Header() {
    return (
        <Fragment>
            <div className="header-top-bar">
                <div className="row">
                    <div className="col-md-3 col-xs-4">
                        <img id="header-img" className="col-md-8 col-xs-4" src="src/resources/headshot.jpg" />
                    </div>
                    <div id="header-info-outer-container" className="col-md-3 col-xs-4 float-left">
                        <h1 className="full-name">Jake Basten</h1>
                        <div>
                            <h3 className="header-title text-muted">Software Engineer</h3>
                            <h4 className="text-muted">📍Chicago, IL</h4>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <Menu/>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default Header;