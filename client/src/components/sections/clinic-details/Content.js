import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getClinic } from '../../../helper/clinicHelper';
import { getAuthor, Rating } from '../../../helper/helper';

class Content extends Component {
    render() {
        const detailId = this.props.detailId;
        const item = getClinic(detailId);
        return (
            <div className="section sigma_post-details">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="sigma_post-details-inner">
                                <div className="entry-content">
                                    <div className="sigma_team style-17 mb-0">
                                        <div className="row no-gutters">
                                            <div className="col-md-4">
                                                <div className="sigma_team-thumb">
                                                    <img src={process.env.PUBLIC_URL + "/" + item.image} alt={item.name} />
                                                </div>
                                            </div>
                                            <div className="col-md-8">
                                                <div className="sigma_team-body">
                                                    <h5>
                                                        <Link to={"/clinic-details/" + item.id}>{item.name}</Link>
                                                    </h5>
                                                    <div className="sigma_rating">
                                                        {Rating(item.rating)}
                                                        <span className="ml-3">({item.reviews.length})</span>
                                                    </div>
                                                    <div className="sigma_team-categories">
                                                        <Link to={"/clinic-details/" + item.id} className="sigma_team-category">{item.specialist}</Link>
                                                    </div>
                                                    <div className="sigma_team-info mt-4">
                                                        <span>
                                                            <i className="fal fa-phone" />
                                                            {item.phone}
                                                        </span>
                                                        <span>
                                                            <i className="fal fa-at" />
                                                            {item.email}
                                                        </span>
                                                        <span>
                                                            <i className="fal fa-building" />
                                                            {item.location}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="detail-menu-list">
                                        <div className="row no-gutters">
                                            <div className="col-md-4">
                                                <div className="menu nav-item">
                                                    <Link to="#" className="nav-link active p-0" onClick={() => document.getElementById("overview").scrollIntoView({behavior: 'smooth'})}>Overview</Link>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="menu nav-item">
                                                    <Link to="#" className="nav-link p-0" onClick={() => document.getElementById('contact').scrollIntoView({behavior: 'smooth'})}>Location &amp; Contact</Link>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="menu nav-item border-0">
                                                    <Link to="#" className="nav-link p-0" onClick={() => document.getElementById('reviews').scrollIntoView({behavior: 'smooth'})}>Review</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="overview">
                                        <h4>Overview Of {item.name}</h4>
                                        <div dangerouslySetInnerHTML={{ __html: item.htmltext }} />
                                    </div>
                                    <div className="spacer">
                                    </div>
                                    <div id="contact">
                                        <h4>{item.name} Location &amp; Contact Information</h4>
                                        <div className="sigma_contact-wrapper">
                                            <div className="sigma_contact-map">
                                                <iframe title={item.name} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9914406081493!2d2.292292615201654!3d48.85837360866272!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sEiffel%20Tower!5e0!3m2!1sen!2sin!4v1571115084828!5m2!1sen!2sin" height={600} allowFullScreen>
                                                </iframe>
                                            </div>
                                            <div className="sigma_contact-blocks">
                                                <h5>Hospital Address</h5>
                                                <div className="row">
                                                    <div className="col-md-4">
                                                        <div className="sigma_contact-block style-3">
                                                            <i className="fal fa-map-marker-alt icon" />
                                                            <div className="contact-block-inner">
                                                                <p>{item.location}</p>
                                                                <p className="mb-0">{item.location}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <div className="sigma_contact-block style-3 mt-3 mt-md-0">
                                                            <i className="fal fa-phone icon" />
                                                            <div className="contact-block-inner">
                                                                <p>{item.phone}</p>
                                                                <p className="mb-0">{item.phone}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <div className="sigma_contact-block style-3 mt-3 mt-md-0">
                                                            <i className="fal fa-globe icon" />
                                                            <div className="contact-block-inner">
                                                                <p>{item.email}</p>
                                                                <p className="mb-0">{item.email}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="spacer">
                                    </div>
                                    <div id="reviews">
                                        <h4>Patient Experience</h4>
                                        {/* Data */}
                                        {item.reviews.map((review, i) => (
                                            <div className="sigma_testimonial style-14" key={i}>
                                                {getAuthor(review.user).map((user, i) => (
                                                    <div className="sigma_testimonial-thumb" key={i}>
                                                        <img src={process.env.PUBLIC_URL + "/" + user.image} alt={user.name} />
                                                    </div>
                                                ))}
                                                {getAuthor(review.user).map((user, i) => (
                                                    <div className="sigma_testimonial-body" key={i}>
                                                        <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d-block d-sm-flex align-items-center">
                                                                <div className="sigma_author-block">
                                                                    <h5>
                                                                        {user.name}
                                                                    </h5>
                                                                </div>
                                                                <div className="sigma_rating ml-sm-4 ml-0 mt-2 mt-sm-0">
                                                                    {Rating(review.rating)}
                                                                    <span className="ml-3">({review.rating}/5)</span>
                                                                </div>
                                                            </div>
                                                            <span className="sigma_testimonial-date">{review.commentdate}</span>
                                                        </div>
                                                        <p>"{review.comment}"</p>
                                                    </div>
                                                ))}
                                            </div>
                                        ))}
                                        {/* Data */}
                                        <button type="button" className="sigma_btn">
                                            See More
                                            <i className="fal fa-arrow-right" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Sidebar Start */}
                        <div className="col-lg-4">
                            <div className="sidebar style-10 mt-5 mt-lg-0">
                                {/* form Widget 2 */}
                                <div className="widget">
                                    <h5 className="widget-title">Get in Touch</h5>
                                    <div className="widget-inner">
                                        <form>
                                            <div className="form-group">
                                                <i className="fal fa-user" />
                                                <input type="text" name="fname" placeholder="Name" required />
                                            </div>
                                            <div className="form-group">
                                                <i className="fal fa-envelope" />
                                                <input type="email" name="email" placeholder="Email" required />
                                            </div>
                                            <div className="form-group">
                                                <textarea name="message" rows={5} placeholder="Message" required />
                                            </div>
                                            <button type="button" className="sigma_btn btn-block btn-sm">
                                                Send Message
                                                <i className="fal fa-arrow-right ml-3" />
                                            </button>
                                        </form>
                                    </div>
                                </div>
                                {/* Contact Widget */}
                                <div className="widget">
                                    <h5 className="widget-title">Contact</h5>
                                    <div className="widget-inner">
                                        <div className="sigma_info style-24 p-0 shadow-none">
                                            <div className="sigma_info-title">
                                                <span className="sigma_info-icon bg-primary-1 text-white">
                                                    <i className="fal fa-phone" />
                                                </span>
                                            </div>
                                            <div className="sigma_info-description">
                                                <h5>Our Phone</h5>
                                                <p>Phone No.: {item.phone}</p>
                                            </div>
                                        </div>
                                        <div className="sigma_info style-24 p-0 shadow-none">
                                            <div className="sigma_info-title">
                                                <span className="sigma_info-icon bg-primary-1 text-white">
                                                    <i className="fal fa-envelope-open-text" />
                                                </span>
                                            </div>
                                            <div className="sigma_info-description">
                                                <h5>Our Email</h5>
                                                <p>Inquiries: {item.email}</p>
                                            </div>
                                        </div>
                                        <div className="sigma_info style-24 p-0 shadow-none mb-0">
                                            <div className="sigma_info-title">
                                                <span className="sigma_info-icon bg-primary-1 text-white">
                                                    <i className="fal fa-map-marker-alt" />
                                                </span>
                                            </div>
                                            <div className="sigma_info-description">
                                                <h5>Our Address</h5>
                                                <p>{item.location}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Sidebar End */}
                    </div>
                </div>
            </div>
        );
    }
}

export default Content;