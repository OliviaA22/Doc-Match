import React, { Component } from 'react';
import doctorblock from "../../../data/doctor/doctor.json";
import { Link } from 'react-router-dom';

class Team extends Component {
    render() {
        return (
            <div className="section section-padding bg-gray">
                <div className="container">
                    <div className="section-title centered">
                        <span className="subtitle">Meet Our Team</span>
                        <h3 className="title mb-0">Our Creative Team</h3>
                    </div>
                    <div className="row">
                        {/* Data */}
                        {doctorblock.slice(0, 4).map((item, i) => (
                            <div className="col-lg-3 col-md-4 col-sm-6" key={i}>
                                <div className="sigma_team style-15">
                                    <div className="sigma_team-thumb">
                                        <img src={process.env.PUBLIC_URL + "/" + item.image} alt={item.title} />
                                    </div>
                                    <div className="sigma_team-body">
                                        <h5>
                                            <Link to={"/doctor-details/" + item.id}>{item.name}</Link>
                                        </h5>
                                        <div className="sigma_team-categories">
                                            <Link to={"/doctor-details/" + item.id} className="sigma_team-category">{item.specialist}</Link>
                                        </div>
                                        <ul className="sigma_social-icons">
                                            {/* Data */}
                                            {item.social.map((social, i) => (
                                                <li key={i}>
                                                    <Link to={social.url}><i className={social.icon} /></Link>
                                                </li>
                                            ))}
                                            {/* Data */}
                                        </ul>
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

export default Team;