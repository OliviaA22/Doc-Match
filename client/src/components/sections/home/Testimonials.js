import React, { Component } from 'react';
import testimonials from "../../../data/testimonials.json";
import { getAuthor } from "../../../helper/helper"

class Testimonials extends Component {
    render() {
        return (
            <div className="section section-padding">
                <div className="container">
                    <div className="section-title centered">
                        <span className="subtitle">Testimonials</span>
                        <h3 className="title">What Our Clients Say</h3>
                    </div>
                    <div className="row">
                        {/* Data */}
                        {testimonials.slice(0, 3).map((item, i) => (
                            <div className="col-lg-4 col-md-6" key={i}>
                                {getAuthor(item.author).map((author, i) => (
                                    <div className="sigma_testimonial bg-gray style-13" key={i}>
                                        <div className="sigma_testimonial-thumb">
                                            <img src={process.env.PUBLIC_URL + "/" + author.image} alt={author.name} />
                                            <span className="fas fa-quote-left sigma_testimonial-icon" />
                                        </div>
                                        <div className="sigma_testimonial-body">
                                            <p>"{item.comment.slice(0, 124)}"</p>
                                            <div className="sigma_author-block">
                                                <h5>{author.name}</h5>
                                                <span className="sigma_testimonial-category">{author.specialist}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ))}
                        {/* Data */}
                    </div>
                </div>
            </div>
        );
    }
}

export default Testimonials;