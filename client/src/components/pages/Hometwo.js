import React, { Component, Fragment } from 'react';
import MetaTags from "react-meta-tags";
import Header from '../layouts/Headertwo';
import Footer from '../layouts/Footer';
import Content from '../sections/home-two/Content';

const pagelocation = "Homepage";

class Hometwo extends Component {
    render() {
        return (
            <Fragment>
                <MetaTags>
                    <title>Doc-Match | {pagelocation}</title>
                    <meta
                        name="description"
                        content="#"
                    />
                </MetaTags>
                <Header />
                <Content />
                <Footer />
            </Fragment>
        );
    }
}

export default Hometwo;