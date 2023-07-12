import React, { Component } from 'react';
import axios from 'axios';
import Sidebar from '../../layouts/Doctorsidebar';
import Pagination from "react-js-pagination";

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            activePage: 1,
            itemPerpage: 4,
            favorite: false
        }
        this.favoriteTrigger = this.favoriteTrigger.bind(this);
    }
    
    componentDidMount() {
        axios.get('http://localhost:5000/api/v1/doctor')
            .then(response => {
                if (response.status === 200) {
                    this.setState({ data: response.data });
                    console.log("Data has been received!!");
                } else {
                    console.log('Data not received, status code:', response.status);
                }
            })
            .catch(error => {
                console.log('An error occurred:', error.message);
                this.setState({ error: error.message });
            });
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
                    <div className="sigma_team-body">
                        <h5>
                            {item.title} {item.firstName} {item.lastName}
                        </h5>
                        <div className="sigma_team-categories">
                            {item.specialisation.join(', ')}
                        </div>
                        <div className="sigma_team-info">
                            <span>
                                <i className="fal fa-map-marker-alt" />
                                {`${item.address.street}, ${item.address.city}, ${item.address.postcode}, ${item.address.state}, ${item.address.country}`}
                            </span>
                        </div>
                        <div className="sigma_team-info">
                            <span>Languages: {item.language.join(', ')}</span>
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
