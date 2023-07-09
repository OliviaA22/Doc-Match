import React, { Component } from 'react';
import whyus from "../../../data/whyus.json";

class Whyus extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-lg-5 order-2 order-lg-1">
                    <div className="sigma_about style-21">
                        <div className="section-title">
                            <h3 className="title text-white">Why Choose Docfind Clinic?</h3>
                        </div>
                        <div className="sigma_about-content">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. It is a long established fact that a reader
                                will be Lorem ipsum dolor sit amet consectetur.</p>
                            {/* Data */}
                            {whyus.slice(0, 2).map((item, i) => (
                                <div className="sigma_info style-15" key={i}>
                                    <div className="sigma_info-title">
                                        <i className={"sigma_info-icon " + item.icon} />
                                    </div>
                                    <div className="sigma_info-description">
                                        <h5>{item.title}</h5>
                                        <p>{item.text}</p>
                                    </div>
                                </div>
                            ))}
                            {/* Data */}
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 offset-lg-1 order-1 order-lg-2">
                    <div className="sigma_about style-21 mt-0 w-100 h-100">
                        <div className="sigma_about-image-1">
                            <img src={process.env.PUBLIC_URL + "/assets/img/home-1/400x280.jpg"} alt="img" />
                        </div>
                        <div className="sigma_about-image-2 d-none d-sm-block">
                            <img src={process.env.PUBLIC_URL + "/assets/img/home-1/370x250.jpg"} alt="img" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Whyus;