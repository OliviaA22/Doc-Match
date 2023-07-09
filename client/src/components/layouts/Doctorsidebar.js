import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import category from "../../data/category.json";

class Doctorsidebar extends Component {
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
                                <Link to={"/doctor/cat/" + item.id}>
                                    {item.title}
                                </Link>
                            </li>
                        ))}
                        {/* Data */}
                    </ul>
                </div>
                <div className="widget">
                    <h5 className="widget-title">Apppointment availability</h5>
                    <input type="checkbox" name="free" id="availabilityDoctors" />
                    <label htmlFor="availabilityDoctors">Free doctors only</label>
                    <input type="checkbox" name="unavailable" id="unavailableDoctors" />
                    <label className="mb-0" htmlFor="unavailableDoctors">Unavailable doctors only</label>
                </div>
                <div className="widget">
                    <h5 className="widget-title">Gender</h5>
                    <input type="radio" name="gendorDoctor" defaultValue="nopreference" id="genderDoctor" />
                    <label htmlFor="genderDoctor">No Preference</label>
                    <input type="radio" name="gendorDoctor" defaultValue="female" id="genderDoctor1" />
                    <label htmlFor="genderDoctor1">Female</label>
                    <input type="radio" name="gendorDoctor" defaultValue="male" id="genderDoctor2" />
                    <label className="mb-0" htmlFor="genderDoctor2">Male</label>
                </div>
            </div>
        );
    }
}

export default withRouter(Doctorsidebar);