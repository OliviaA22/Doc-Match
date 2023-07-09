import React, { Component, Fragment } from 'react';
import Counter from './Counter';
import Team from './Team';
import Whyus from './Whyus';
import Workprocess from './Workprocess';
import Galleryslider from '../../layouts/Galleryslider';

class Content extends Component {
    render() {
        return (
            <Fragment>
                <Workprocess />
                <div className="section bg-secondary-1" style={{ backgroundImage: "url(" + process.env.PUBLIC_URL + "/assets/img/pattern.png)" }}>
                    <div className="container">
                        <Whyus />
                        <Counter />
                    </div>
                </div>
                <div className="section pb-0 bg-gray" />
                <Team />
                <div className="section section-padding p-0">
                    <div className="container-fluid p-0">
                        <Galleryslider />
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Content;