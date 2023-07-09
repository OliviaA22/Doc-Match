import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import category from "../../data/category.json";

class Clinicsidebar extends Component {
    render() {
        return (
            <div className="sidebar mb-5">
                {/* Category Widget */}
                <div className="widget widget-categories">
                    <h5 className="widget-title">Specialty</h5>
                    <ul>
                        {/* Data */}
                        {category.map((item, i) => (
                            <li key={i}>
                                <Link to={"/clinic/cat/" + item.id}>
                                    {item.title}
                                </Link>
                            </li>
                        ))}
                        {/* Data */}
                    </ul>
                </div>
                <div className="widget p-0 border-0">
                    <div className="sigma_contact-map">
                        <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9914406081493!2d2.292292615201654!3d48.85837360866272!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sEiffel%20Tower!5e0!3m2!1sen!2sin!4v1571115084828!5m2!1sen!2sin" height={300} allowFullScreen>
                        </iframe>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(Clinicsidebar);