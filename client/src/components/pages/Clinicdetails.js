import React, { Component, Fragment } from 'react';
import MetaTags from "react-meta-tags";
import Header from '../layouts/Headertwo';
import Breadcrumbs from '../layouts/Breadcrumbs';
import Footer from '../layouts/Footer';
import Content from '../sections/clinic-details/Content';

const pagelocation = "Clinic Details";

class Clinicdetails extends Component {
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
                <Content
                    detailId={this.props.match.params.id}
                />
                <Footer />
            </Fragment>
        );
    }
}

export default Clinicdetails;