import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import serviceblock from "../../../data/service/service.json"

class Servicestwo extends Component {
    render() {
        return (
            <div className="container">
                <div className="section-title centered">
                    <span className="subtitle text-white">What We Do</span>
                    <h3 className="title text-white">Services for You</h3>
                </div>
                <div className="row">
                    {/* Data */}
                    {serviceblock.slice(0, 6).map((item, i) => (
                        <div className="col-lg-4 col-md-6" key={i}>
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
                    ))}
                    {/* Data */}
                </div>
            </div>
        );
    }
}

export default Servicestwo;