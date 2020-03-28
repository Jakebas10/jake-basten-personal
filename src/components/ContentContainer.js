import React, {Fragment} from 'react';
import About from './About';
import '../css/content-container.css'; 

function ContentContainer() {
    return(
        <Fragment>
            <div className="content-container-outer">
                <About/>
            </div>
        </Fragment>
    );
}

export default ContentContainer;