import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import clinicpost from '../../../data/clinic/clinic.json';
import { getFilteredPosts } from '../../../helper/clinicHelper';
import { Rating } from '../../../helper/helper';
import Sidebar from '../../layouts/Clinicsidebar';
import Pagination from "react-js-pagination";

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.getPosts(),
            activePage: 1,
            itemPerpage: 4,
            favorite: false
        }
        this.favoriteTrigger = this.favoriteTrigger.bind(this);
    }
    getPosts() {
        var cat = this.props.catId ? this.props.catId : '';
        var filteredItems = getFilteredPosts(clinicpost, { cat });
        return filteredItems;
    }
    handlePageChange(pageNumber) {
        this.setState({ activePage: pageNumber });
    }
    favoriteTrigger(item) {
        this.setState({ favorite: item });
        if (this.state.favorite === item) {
            this.setState({ favorite: null })
        }
    }
    render() {
        const paginationData = this.state.data.slice((this.state.activePage - 1) * this.state.itemPerpage, this.state.activePage * this.state.itemPerpage).map((item, i) => {
            return <div className="col-lg-6 col-md-6" key={i}>
                <div className="sigma_team style-16">
                    <div className="sigma_team-thumb">
                        <img src={process.env.PUBLIC_URL + "/" + item.image} alt={item.name} />
                        <div className="sigma_team-controls">
                            <Link to="#" className={this.state.favorite === item ? 'active' : ''} onClick={(e) => this.favoriteTrigger(item)}>
                                <i className="fal fa-heart" />
                            </Link>
                        </div>
                    </div>
                    <div className="sigma_team-body">
                        <h5>
                            <Link to={"/clinic-details/" + item.id}>{item.name}</Link>
                        </h5>
                        <div className="sigma_rating">
                            {Rating(item.rating)}
                            <span className="ml-3">({item.reviews.length})</span>
                        </div>
                        <div className="sigma_team-categories">
                            <Link to={"/clinic-details/" + item.id} className="sigma_team-category">{item.specialist}</Link>
                        </div>
                        <div className="sigma_team-info">
                            <span>
                                <i className="fal fa-map-marker-alt" />
                                {item.location}
                            </span>
                        </div>
                        <Link to={"/clinic-details/" + item.id} className="sigma_btn btn-block btn-sm">View
                            More</Link>
                    </div>
                </div>
            </div>
        });
        return (
            <div className="sidebar-style-9">
                <div className="section section-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4">
                                <Sidebar />
                            </div>
                            <div className="col-lg-8">
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
                    </div>
                </div>
            </div>
        );
    }
}

export default Content;