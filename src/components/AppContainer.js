import React, {Fragment} from 'react';
import Header from './Header';
import About from './About';
import ContentContainer from './ContentContainer';

function AppContainer() {
    return(
        <Fragment>
            <Header/>
            <ContentContainer/>
        </Fragment>
    );
}

export default AppContainer;