import React, { Component, Fragment } from 'react';
import MetaTags from "react-meta-tags";
import Header from '../layouts/Headertwo';
import Breadcrumbs from '../layouts/Breadcrumbs';
import Footer from '../layouts/Footer';
import Content from '../sections/error-page/Content';

const pagelocation = "Error 404";

class Errorpage extends Component {
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
                <Breadcrumbs breadcrumb={{ pagename: pagelocation }} />
                <Content />
                <Footer />
            </Fragment>
        );
    }
}

export default Errorpage;