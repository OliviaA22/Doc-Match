import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getBlog } from '../../../helper/blogHelper';
import { getAuthor, socialShare } from '../../../helper/helper';
import Sidebar from '../../layouts/Blogsidebar';

class Content extends Component {
    constructor(props) {
        super(props);
        this.openSocialPopup = this.openSocialPopup.bind(this);
    }
    // Open window
    openSocialPopup(social) {
        window.open(social.link, "MsgWindow", "width=600,height=600")
        // alert(social.title)
    }
    render() {
        const detailId = this.props.detailId;
        const item = getBlog(detailId);
        return (
            <div className="sidebar-style-8">
                <div className="section pb-0 sigma_post-details style-6">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="sigma_post-details-inner">
                                    <div className="entry-content">
                                        <img src={process.env.PUBLIC_URL + "/" + item.image[0]} alt={item.title} className="w-100" />
                                        <div className="sigma_post-details-meta">
                                            {getAuthor(item.author).map((author, i) => (
                                                <span key={i}> <i className="far fa-user" /> By
                                                    {author.name}</span>
                                            ))}
                                            <span> <i className="far fa-calendar-alt" /> {item.postdate}</span>
                                        </div>
                                        <h2 className="entry-title">{item.title}</h2>
                                        <div dangerouslySetInnerHTML={{ __html: item.htmltext }} />
                                    </div>
                                    <hr />
                                    {/* Post Meta Start */}
                                    <div className="sigma_post-details-meta">
                                        <div className="sigma_post-details-meta-item sigma_post-share">
                                            <h5 className="mb-0">Share:</h5>
                                            <ul className="sigma_sm ml-4">
                                                {/* Data */}
                                                {socialShare(item.title).map((social, i) => (
                                                    <li key={i}>
                                                        <Link to="#" onClick={(e) => this.openSocialPopup(social, i)}>
                                                            <i className={social.iconClass} />
                                                        </Link>
                                                    </li>
                                                ))}
                                                {/* Data */}
                                            </ul>
                                        </div>
                                    </div>
                                    {/* Post Meta End */}
                                    {/* Comments Start */}
                                    <div className="section pb-0">
                                        <h3>Comments</h3>
                                        <div className="comments-list">
                                            {item.reviews.map((review, i) => (
                                                <ul key={i}>
                                                    {/* Data */}
                                                    <li className="comment-item">
                                                        {getAuthor(review.user).map((user, i) => (
                                                            <img key={i} src={process.env.PUBLIC_URL + "/" + user.image} alt={user.name} />
                                                        ))}
                                                        {getAuthor(review.user).map((user, i) => (
                                                            <div className="comment-body" key={i}>
                                                                <h5>{user.name}</h5>
                                                                <span className="date"> {review.commentdate}</span>
                                                                <p>{review.comment}</p>
                                                                <Link to="#" className="btn-link"> Reply </Link>
                                                            </div>
                                                        ))}
                                                    </li>
                                                    {/* Data */}

                                                    {review.replies.map((review, i) => (
                                                        <li className="comment-item" key={i}>
                                                            {getAuthor(review.user).map((user, i) => (
                                                                <img key={i} src={process.env.PUBLIC_URL + "/" + user.image} alt={user.name} />
                                                            ))}
                                                            {getAuthor(review.user).map((user, i) => (
                                                                <div className="comment-body" key={i}>
                                                                    <h5>{user.name}</h5>
                                                                    <span className="date"> {review.commentdate}</span>
                                                                    <p>{review.comment}</p>
                                                                    <Link to="#" className="btn-link"> Reply </Link>
                                                                </div>
                                                            ))}
                                                        </li>
                                                    ))}
                                                    {/* Data */}
                                                </ul>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="section">
                                        <h3>Leave a Reply</h3>
                                        <div className="comment-form">
                                            <form>
                                                <div className="row">
                                                    <div className="col-lg-6">
                                                        <div className="form-group">
                                                            <input type="text" placeholder="Your Name" className="form-control" name="fname" required />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <div className="form-group">
                                                            <input type="email" placeholder="Your E-mail" className="form-control" name="email" required />
                                                        </div>
                                                    </div>
                                                    <div className="col-12">
                                                        <div className="form-group">
                                                            <textarea className="form-control" placeholder="Enter Comment here" name="comment" rows={7} required />
                                                        </div>
                                                        <button type="submit" className="sigma_btn-custom" name="button">Post
                                                            Comment</button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    {/* Comments End */}
                                </div>
                            </div>
                            {/* Sidebar Start */}
                            <div className="col-lg-4">
                                <Sidebar />
                            </div>
                            {/* Sidebar End */}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Content;