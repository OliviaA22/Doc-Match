import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import category from "../../data/category.json";
import { getRecentService } from "../../helper/serviceHelper";

class Servicesidebar extends Component {
    render() {
        return (
            <div className="sidebar">
                {/* Category Widget */}
                <div className="widget widget-categories">
                    <h5 className="widget-title">Categories</h5>
                    <ul>
                        {/* Data */}
                        {category.map((item, i) => (
                            <li key={i}>
                                <Link to={"/service/cat/" + item.id}>{item.title} <span>{item.count}</span></Link>
                            </li>
                        ))}
                        {/* Data */}
                    </ul>
                </div>
                {/* Recent services Widget */}
                <div className="widget widget-sigma-recent-posts">
                    <h5 className="widget-title">Recent posts</h5>
                    {/* Data */}
                    {getRecentService().map((item, i) => (
                        <div className="sigma_recent-post" key={i}>
                            <Link to={"/service-details/" + item.id} className="recent-post-image">
                                <img src={process.env.PUBLIC_URL + "/" + item.image} alt={item.title} />
                            </Link>
                            <div className="recent-post-descr">
                                <h6>
                                    <Link to={"/service-details/" + item.id}>{item.title}</Link>
                                </h6>
                                <Link to={"/service-details/" + item.id} className="date">
                                    <i className="far fa-clock mr-2" />
                                    {item.servicedate}
                                </Link>
                            </div>
                        </div>
                    ))}
                    {/* Data */}
                </div>
                {/* Follow Widget */}
                <div className="widget widget-follow">
                    <h5 className="widget-title">Follow Us</h5>
                    <div className="social-buttons">
                        <Link to="#" className="btn-block sigma_btn">
                            <div className="follow-icon d-flex align-items-center">
                                <i className="fab fa-instagram" />
                                <p className="mb-0">
                                    Instagram
                                    <span>225.5k Followers</span>
                                </p>
                            </div>
                            <i className="fal fa-chevron-right" />
                        </Link>
                        <Link to="#" className="btn-block sigma_btn">
                            <div className="follow-icon d-flex align-items-center">
                                <i className="fab fa-twitter" />
                                <p className="mb-0">
                                    Twitter
                                    <span>225.5k Followers</span>
                                </p>
                            </div>
                            <i className="fal fa-chevron-right" />
                        </Link>
                        <Link to="#" className="btn-block sigma_btn">
                            <div className="follow-icon d-flex align-items-center">
                                <i className="fab fa-facebook-f" />
                                <p className="mb-0">
                                    Facebook
                                    <span>225.5k Followers</span>
                                </p>
                            </div>
                            <i className="fal fa-chevron-right" />
                        </Link>
                        <Link to="#" className="btn-block sigma_btn">
                            <div className="follow-icon d-flex align-items-center">
                                <i className="fab fa-youtube" />
                                <p className="mb-0">
                                    Youtube
                                    <span>225.5k Followers</span>
                                </p>
                            </div>
                            <i className="fal fa-chevron-right" />
                        </Link>
                    </div>
                </div>
                <div className="widget widget-blockquote p-0 border-0">
                    <blockquote className="blockquote">
                        <cite>Request a Quote</cite>
                        <p>Cras ultricies ligula sed magna dictum porta. Vivamus suscipit tortor eget felis porttitor volutpat.</p>
                        <Link to="/contact" className="sigma_btn btn-sm">Request Quote</Link>
                    </blockquote>
                </div>
                {/* Subscribe Widget */}
                <div className="widget widget-newsletter">
                    <h5 className="widget-title">Join Newsletter</h5>
                    <form>
                        <input type="email" name="email" placeholder="Enter your email" required />
                        <button type="button" className="btn-block mt-4">Subscribe</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default withRouter(Servicesidebar);