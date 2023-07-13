import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import serviceblock from "../../data/service/service.json";

class Footer extends Component {
    render() {
        return (
            <footer className="sigma_footer style-5 pb-0">
                <div className="container">
                    <div className="sigma_info-wrapper style-26 mb-5">
                        <div className="sigma_info style-26">
                            <div className="sigma_info-title">
                                <span className="sigma_info-icon">
                                    <i className="fal fa-map-marker-alt" />
                                </span>
                            </div>
                            <div className="sigma_info-description">
                                <p>Located</p>
                                <p className="secondary-color"><b>84347, Pfarrkirchen, Germany</b>
                                </p>
                            </div>
                        </div>
                        <div className="sigma_info style-26">
                            <div className="sigma_info-title">
                                <span className="sigma_info-icon">
                                    <i className="fal fa-phone" />
                                </span>
                            </div>
                            <div className="sigma_info-description">
                                <p>Reach out</p>
                                <p className="secondary-color"><b>4917670339367</b>
                                </p>
                            </div>
                        </div>
                        <div className="sigma_info style-26">
                            <div className="sigma_info-title">
                                <span className="sigma_info-icon">
                                    <i className="fal fa-envelope" />
                                </span>
                            </div>
                            <div className="sigma_info-description">
                                <p>Mail</p>
                                <p className="secondary-color"><b>spec@docmatch.com</b>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="sigma_footer-middle">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="sigma_footer-widget">
                                    <div className="sigma_footer-logo mb-4">
                                        <img src={process.env.PUBLIC_URL + "/assets/img/logo.png"} alt="logo" />
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-9">
                                            <p className="mb-0">A widely acknowledged fact is that DocMatch's precise and efficient service greatly benefits patients.</p>
                                        </div>
                                    </div>
                                    <ul className="sigma_social-icons has-border mt-4 justify-content-start">
                                        <li>
                                            <Link to="#"><i className="fab fa-facebook-f" /></Link>
                                        </li>
                                        <li>
                                            <Link to="#"><i className="fab fa-twitter" /></Link>
                                        </li>
                                        <li>
                                            <Link to="#"><i className="fab fa-instagram" /></Link>
                                        </li>
                                        <li>
                                            <Link to="#"><i className="fab fa-linkedin" /></Link>
                                        </li>
                                        <li>
                                            <Link to="#"><i className="fab fa-google" /></Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-3">
                                <div className="sigma_footer-widget">
                                    <h5 className="widget-title">Services</h5>
                                    <ul className="sigma_footer-links">
                                        {/* Data */}
                                        {serviceblock.slice(0, 5).map((item, i) => (
                                            <li key={i}>
                                                <Link to={"/service-details/" + item.id}>{item.title}</Link>
                                            </li>
                                        ))}
                                        {/* Data */}
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-2 col-sm-3">
                                <div className="sigma_footer-widget">
                                    <h5 className="widget-title">Useful Links</h5>
                                    <ul className="sigma_footer-links">
                                        <li>
                                            <Link to="/">Home</Link>
                                        </li>
                                        <li>
                                            <Link to="/about">About Us</Link>
                                        </li>
                                        <li>
                                            <Link to="/doctor-grid">Doctors</Link>
                                        </li>
                                        <li>
                                            <Link to="/contact">Contact Us</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="sigma_footer-widget">
                                    <h5 className="widget-title">Subscribe</h5>
                                    <form>
                                        <input type="email" name="email" placeholder="Email" required />
                                        <button type="button" className="mt-3 btn-block">Subscribe</button>
                                        <p className="mb-0 mt-3">Get The Latest Updates via email. Any time you may unsubscribe</p>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="sigma_footer-bottom d-block d-sm-flex align-items-center justify-content-between">
                        <div className="sigma_footer-copyright mt-0 mb-3 mb-sm-0">
                            <p className="mb-0">© Doc-Match <Link to="#">2023</Link> | All Rights Reserved
                            </p>
                        </div>
                        <ul className="sigma_footer-links">
                            <li>
                                <Link to="#">Privacy</Link>
                            </li>
                            <li>
                                <Link to="#">Terms</Link>
                            </li>
                            <li>
                                <Link to="#">Sitemap</Link>
                            </li>
                            <li>
                                <Link to="#">Help</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;