import React, { Component, Fragment } from 'react';
import Testimonials from './Testimonials';
import Galleryslider from '../../layouts/Galleryslider';
import { Link } from 'react-router-dom';
import serviceblock from '../../../data/service/service.json';
import { getFilteredPosts } from '../../../helper/serviceHelper';
import Pagination from "react-js-pagination";

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.getPosts(),
            activePage: 1,
            itemPerpage: 6
        }
    }
    getPosts() {
        var cat = this.props.catId ? this.props.catId : '';
        var filteredItems = getFilteredPosts(serviceblock, { cat });
        return filteredItems;
    }
    handlePageChange(pageNumber) {
        this.setState({ activePage: pageNumber });
    }
    render() {
        const paginationData = this.state.data.slice((this.state.activePage - 1) * this.state.itemPerpage, this.state.activePage * this.state.itemPerpage).map((item, i) => {
            return <div className="col-lg-4 col-md-6" key={i}>
                <div className="sigma_service style-18 has-bg">
                    <div className="sigma_service-thumb">
                        <i className={item.icon} />
                    </div>
                    <div className="sigma_service-body">
                        <h5>
                            <Link to={"/service-details/" + item.id}>{item.title}</Link>
                        </h5>
                        <p>{item.shorttext.slice(0, 70)}</p>
                    </div>
                </div>
            </div>
        });
        return (
            <Fragment>
                <div className="section section-padding">
                    <div className="container">
                        <div className="row">
                            {/* Data */}
                            {paginationData}
                            {/* Data */}
                        </div>
                        {/* Pagination */}
                        <Pagination
                            activePage={this.state.activePage}
                            itemsCountPerPage={this.state.itemPerpage}
                            totalItemsCount={this.state.data.length}
                            pageRangeDisplayed={this.state.data.length}
                            onChange={this.handlePageChange.bind(this)}
                            innerClass="pagination"
                            activeClass="active"
                            itemClass="page-item"
                            linkClass="page-link"
                        />
                        {/* Pagination */}
                    </div>
                </div>
                <div className="section pt-0">
                    <div className="container-fluid p-0">
                        <Galleryslider />
                    </div>
                </div>
                <Testimonials />
            </Fragment>
        );
    }
}

export default Content;