import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import whyus from "../../../data/whyus.json";

class Whyus extends Component {
    render() {
        return (
            <div className="section section-padding">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="sigma_about style-9 w-100 h-100">
                                <div className="sigma_about-image-1 has-no-content">
                                    <img src={process.env.PUBLIC_URL + "/assets/img/home-2/635x450.jpg"} alt="img" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="sigma_about style-9 mt-5 mt-lg-0">
                                <div className="section-title">
                                    <h3 className="title mb-5">We Provide Essential Service For Your Health</h3>
                                </div>
                                <div className="sigma_about-content">
                                    <div className="row">
                                        {/* Data */}
                                        {whyus.slice(0, 2).map((item, i) => (
                                            <div className="col-md-6" key={i}>
                                                <div className="sigma_info style-15" style={{ marginBottom: 30 + "px" }}>
                                                    <div className="sigma_info-description">
                                                        <h5>
                                                            <Link to="#">{item.title}</Link>
                                                        </h5>
                                                        <p>{item.text}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                        {/* Data */}
                                    </div>
                                    <Link to="/contact" className="sigma_btn">
                                        Get A Quote
                                        <i className="fal fa-arrow-right ml-3" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Whyus;