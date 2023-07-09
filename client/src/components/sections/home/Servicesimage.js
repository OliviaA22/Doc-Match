import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getRecentService } from "../../../helper/serviceHelper"

class Servicesimage extends Component {
    render() {
        return (
            <div className="row">
                {/* Data */}
                {getRecentService().map((item, i) => (
                    <div className="col-lg-4 col-md-6" key={i}>
                        <div className="sigma_service style-17">
                            <div className="sigma_service-thumb">
                                <img src={process.env.PUBLIC_URL + "/" + item.image} alt={item.title} />
                            </div>
                            <div className="sigma_service-body">
                                <h5>
                                    <Link to={"/service-details/" + item.id}>{item.title}</Link>
                                </h5>
                                <p>{item.shorttext.slice(0, 95)}</p>
                                <Link to={"/service-details/" + item.id} className="btn-link primary-color">
                                    Read More
                                    <i className="fal fa-arrow-right" />
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
                {/* Data */}
            </div>
        );
    }
}

export default Servicesimage;