import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getRecentService } from "../../../helper/serviceHelper"

class Services extends Component {
    render() {
        return (
            <div className="container">
                <div className="sigma_service-wrapper style-18 margin-negative">
                    <div className="section-title flex-title">
                        <h3 className="title mb-0">Praesent tempor dictum tellus ut molestie</h3>
                        <Link to="/contact" className="sigma_btn mt-3 mt-sm-0">
                            Get a Quote
                            <i className="fal fa-arrow-right ml-3" />
                        </Link>
                    </div>
                    <div className="row">
                        {/* Data */}
                        {getRecentService().map((item, i) => (
                            <div className="col-lg-4 col-md-6" key={i}>
                                <div className="sigma_service style-18">
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
                        ))}
                        {/* Data */}
                    </div>
                </div>
            </div>
        );
    }
}

export default Services;