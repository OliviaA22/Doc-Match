import React, { Component, Fragment } from 'react';
import Contacticons from './Contacticons';
import Contactform from './Contactform';

class Content extends Component {
    render() {
        return (
            <Fragment>
                <Contacticons />
                <Contactform />
            </Fragment>
        );
    }
}

export default Content;