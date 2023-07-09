import React, { Component, Fragment } from 'react';
import Banner from './Banner';
import Services from './Services';
import Counter from './Counter';
import Whyus from './Whyus';
import Team from './Team';
import Servicestwo from './Servicestwo';
import Testimonials from './Testimonials';
import Cta from './Cta';
import Quote from './Quote';
import Blogs from './Blogs';
import Galleryslider from '../../layouts/Galleryslider';

class Content extends Component {
    render() {
        return (
            <Fragment>
                <Banner />
                <div className="section section-padding bg-cover bg-center bg-secondary-1" style={{ backgroundImage: "url(" + process.env.PUBLIC_URL + "/assets/img/pattern-3.png)" }}>
                    <Services />
                    <Counter />
                </div>
                <Whyus />
                <Team />
                <div className="section section-padding bg-cover bg-center bg-secondary-1" style={{ backgroundImage: "url(" + process.env.PUBLIC_URL + "/assets/img/pattern-4.png)" }}>
                    <Servicestwo />
                    <div className="section section-padding p-0 margin-negative">
                        <Galleryslider />
                    </div>
                </div>
                <div className="section section-padding bg-gray" />
                <div className="section section-padding bg-gray">
                    <Testimonials />
                    <Cta />
                </div>
                <div className="section section-padding" />
                <Quote />
                <Blogs />
            </Fragment>
        );
    }
}

export default Content;