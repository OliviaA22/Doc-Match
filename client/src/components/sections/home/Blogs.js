import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getRecentPost } from '../../../helper/blogHelper';
import { getAuthor, getCategories } from '../../../helper/helper';

class Blogs extends Component {
    render() {
        return (
            <div className="section section-padding bg-gray pt-0">
                <div className="container">
                    <div className="section-title centered">
                        <span className="subtitle">Latest News</span>
                        <h3 className="title">Our Insights &amp; Articles</h3>
                    </div>
                    <div className="row">
                        {/* Data */}
                        {getRecentPost().map((item, i) => (
                            <div className="col-lg-4 col-md-6" key={i}>
                                <article className="sigma_post style-15">
                                    <div className="sigma_post-thumb">
                                        <Link to={"/blog-details/" + item.id}>
                                            <img src={process.env.PUBLIC_URL + "/" + item.image[0]} alt={item.title} />
                                        </Link>
                                    </div>
                                    <div className="sigma_post-body">
                                        <div className="sigma_post-content">
                                            <div className="sigma_post-meta is-absolute">
                                                <Link to={"/blog-details/" + item.id} className="sigma_post-date">
                                                    {item.postdate}
                                                </Link>
                                            </div>
                                            <div className="sigma_post-meta">
                                                <ul>
                                                    {/* Data */}
                                                    {getAuthor(item.author).map((author, i) => (
                                                        <li key={i}>
                                                            <Link to={"/blog/author/" + author.id}>
                                                                <i className="fal fa-user" />
                                                                By {author.name}
                                                            </Link>
                                                        </li>
                                                    ))}
                                                    {/* Data */}
                                                    {getCategories(item.category).slice(0, 1).map((cat, i) => (
                                                        <li key={i}>
                                                            <Link to={"/blog/cat/" + cat.id}>
                                                                <i className="fal fa-folder-open" />
                                                                {cat.title}
                                                            </Link>
                                                        </li>
                                                    ))}
                                                    {/* Data */}
                                                </ul>
                                            </div>
                                            <h5>
                                                <Link to={"/blog-details/" + item.id}>{item.title}</Link>
                                            </h5>
                                        </div>
                                        <Link to={"/blog-details/" + item.id} className="btn-link">
                                            Read more
                                        </Link>
                                    </div>
                                </article>
                            </div>
                        ))}
                        {/* Data */}
                    </div>
                </div>
            </div>
        );
    }
}

export default Blogs;