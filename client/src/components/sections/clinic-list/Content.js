import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import clinicpost from '../../../data/clinic/clinic.json';
import { Rating } from '../../../helper/helper';
import Sidebar from '../../layouts/Clinicsidebar';
import Pagination from "react-js-pagination";

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: clinicpost,
            activePage: 1,
            itemPerpage: 3,
            favorite: false
        }
        this.favoriteTrigger = this.favoriteTrigger.bind(this);
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
            return <div className="sigma_team style-17" key={i}>
                <div className="row no-gutters">
                    <div className="col-md-3">
                        <div className="sigma_team-thumb">
                            <img src={process.env.PUBLIC_URL + "/" + item.image} alt={item.name} />
                        </div>
                    </div>
                    <div className="col-md-5 col-sm-6">
                        <div className="sigma_team-body">
                            <h5>
                                <Link to={"/clinic-details/" + item.id}>{item.name}</Link>
                            </h5>
                            <div className="sigma_team-categories">
                                <Link to={"/clinic-details/" + item.id} className="sigma_team-category">{item.specialist}</Link>
                            </div>
                            <p>{item.qualification}</p>
                            <div className="d-flex align-items-center mt-4">
                                <Link to={"/clinic-details/" + item.id} className="sigma_btn">View More</Link>
                                <div className="sigma_team-controls ml-3">
                                    <Link to="#" className={this.state.favorite === item ? 'active' : ''} onClick={(e) => this.favoriteTrigger(item)}>
                                        <i className="fal fa-heart" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <div className="sigma_team-footer">
                            <div className="sigma_team-info">
                                <span>
                                    <i className="fal fa-map-marker-alt" />
                                    {item.location}
                                </span>
                                <span>
                                    <i className="fal fa-award" />
                                    {item.experience} Yrs Experience
                                </span>
                                <span>
                                    <i className="fal fa-calendar" />
                                    {item.available.map((data, i) => (
                                        <b key={i}>{data}, </b>
                                    ))}
                                </span>
                            </div>
                            <div className="sigma_rating">
                                {Rating(item.rating)}
                                <span className="ml-3">({item.reviews.length})</span>
                            </div>
                        </div>
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
                                {/* Data */}
                                {paginationData}
                                {/* Data */}
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