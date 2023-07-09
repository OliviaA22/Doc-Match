import React, { Component, Fragment } from 'react';
import Contacticons from './Contacticons';
import Contactform from './Contactform';
import Contactmap from './Contactmap';

class Content extends Component {
    render() {
        return (
            <Fragment>
                <Contacticons />
                <Contactform />
                <Contactmap />
            </Fragment>
        );
    }
}

export default Content;