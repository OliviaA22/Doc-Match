import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Banner extends Component {
    render() {
        return (
            <div className="sigma_banner light-bg style-10 bg-cover">
                <img src={process.env.PUBLIC_URL + "/assets/img/tr.png"} className="tr" alt="img" />
                <img src={process.env.PUBLIC_URL + "/assets/img/br.png"} className="br" alt="img" />
                <img src={process.env.PUBLIC_URL + "/assets/img/bl.png"} className="bl" alt="img" />
                <div className="banner-slider-inner">
                    <div className="sigma_banner-text">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <h5 className="primary-color">Markets &amp; Resources</h5>
                                    <h1 className="title">
                                        Find The Best Doctor near By You
                                    </h1>
                                    <div className="banner-links d-flex align-items-center">
                                        <Link to="/contact" className="sigma_btn">Get a Quote</Link>
                                        <Link to="/about" className="sigma_btn light ml-4">Read more</Link>
                                    </div>
                                </div>
                                <div className="col-lg-6 d-none d-lg-block">
                                    <div className="sigma_banner-image mt-5 mt-lg-0">
                                        <img src={process.env.PUBLIC_URL + "/assets/img/home-2/540x540.jpg"} alt="img" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Banner;