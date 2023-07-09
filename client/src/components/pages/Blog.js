import React, { Component, Fragment } from 'react';
import MetaTags from "react-meta-tags";
import Header from '../layouts/Headertwo';
import Breadcrumbs from '../layouts/Breadcrumbs';
import Footer from '../layouts/Footer';
import Content from '../sections/blog/Content';

const pagelocation = "Blog Grid";

class Blog extends Component {
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
                    catId={this.props.match.params.catId}
                    tagId={this.props.match.params.tagId}
                    authorId={this.props.match.params.authorId}
                    query={this.props.match.params.query}
                />
                <Footer />
            </Fragment>
        );
    }
}

export default Blog;