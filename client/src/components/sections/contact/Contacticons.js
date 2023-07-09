import React, { Component } from 'react';

class Contacticons extends Component {
    render() {
        return (
            <div className="section section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="sigma_info style-24">
                                <div className="sigma_info-title">
                                    <span className="sigma_info-icon bg-primary-1 text-white">
                                        <i className="flaticon-hospital" />
                                    </span>
                                </div>
                                <div className="sigma_info-description">
                                    <h5>Our Address</h5>
                                    <p>84347, Pfarrkirchen Germany</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="sigma_info style-24">
                                <div className="sigma_info-title">
                                    <span className="sigma_info-icon bg-primary-1 text-white">
                                        <i className="flaticon-call" />
                                    </span>
                                </div>
                                <div className="sigma_info-description">
                                    <h5>Our Phone</h5>
                                    <p>Telephone: 4917670339367</p>
                                    <p>Mobile: 000 2324 39493</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="sigma_info style-24">
                                <div className="sigma_info-title">
                                    <span className="sigma_info-icon bg-primary-1 text-white">
                                        <i className="flaticon-envelope" />
                                    </span>
                                </div>
                                <div className="sigma_info-description">
                                    <h5>Our Email</h5>
                                    <p>Main Email: spec@dmatch.com</p>
                                    <p>Inquiries: 40ndgc@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contacticons;