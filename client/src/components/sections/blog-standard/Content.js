import React from 'react';
import { Link } from 'react-router-dom';
import blogpost from '../../../data/blog/blog.json';
import { getAuthor, getNameInitials } from '../../../helper/helper';
import Sidebar from '../../layouts/Blogsidebar';
import Pagination from "react-js-pagination";
import Videohelper from '../../../helper/Videohelper';

class Content extends Videohelper {
    constructor(props) {
        super(props);
        this.state = {
            data: blogpost,
            activePage: 1,
            itemPerpage: 4
        }
    }
    handlePageChange(pageNumber) {
        this.setState({ activePage: pageNumber });
    }
    render() {
        const paginationData = this.state.data.slice((this.state.activePage - 1) * this.state.itemPerpage, this.state.activePage * this.state.itemPerpage).map((item, i) => {
            return <article key={i} className={item.format === 'video' ? 'sigma_post style-7 post-format-video' : 'sigma_post style-7 ' && item.format === 'quote' ? 'sigma_post style-7 post-format-quote' : 'sigma_post style-7 ' && item.format === 'audio' ? 'sigma_post style-7 post-format-audio' : 'sigma_post style-7 ' && item.format === 'link' ? 'sigma_post style-7 post-format-link' : 'sigma_post style-7 '}>
                {/* Standard */}
                {item.format === 'standard' || item.format === 'video' || item.format === '' ?
                    <div className="sigma_post-thumb">
                        <Link to={"/blog-details/" + item.id} className="w-100">
                            <img src={process.env.PUBLIC_URL + "/" + item.image[0]} alt={item.title} />
                        </Link>
                        {/* Video */}
                        {item.format === 'video' && item.video !== '' ?
                            <a rel={"external"} href={item.video} className="sigma_video-btn popup-video">
                                <i className="far fa-play" />
                            </a>
                            : ''
                        }
                        {/* Video */}
                    </div>
                    : ''
                }
                {/* Standard */}
                {/* Quote */}
                {item.format === 'quote' && item.quote !== '' && item.quoteauthor !== '' ?
                    <blockquote>
                        <h5>{item.quote}</h5>
                        <cite>
                            <span>{getNameInitials(item.quoteauthor)}</span>
                            {item.quoteauthor}
                        </cite>
                    </blockquote>
                    : ''
                }
                {/* Quote */}
                {/* Audio */}
                {item.format === 'audio' && item.audio !== '' ?
                    <div className="sigma_post-thumb">
                        <div className="embed-responsive embed-responsive-16by9">
                            <iframe className="embed-responsive-item" title={item.title} src={item.audio}>
                            </iframe>
                        </div>
                    </div>
                    : ''
                }
                {/* Audio */}
                {/* Link */}
                {item.format === 'link' && item.link !== '' ?
                    <div className="sigma_post-body">
                        <div className="sigma_post-content">
                            <h5>{item.title}</h5>
                            <div className="sigma_post-meta">
                                <a rel={"external"} href={item.link}>
                                    <i className="fal fa-link" />
                                    {item.link}
                                </a>
                            </div>
                        </div>
                    </div>
                    : ''
                }
                {/* Link */}
                <div className="sigma_post-body">
                    <div className="sigma_post-content">
                        <h5>
                            <Link to={"/blog-details/" + item.id}>{item.title}</Link>
                        </h5>
                        <p>{item.shorttext}</p>
                        <div className="sigma_post-meta">
                            <ul>
                                {getAuthor(item.author).map((author, i) => (
                                    <li className="author" key={i}>
                                        <i className="fal fa-user-circle" />
                                        <Link to={"/blog/author/" + author.id}>{author.name}</Link>
                                    </li>
                                ))}
                                <li>
                                    <i className="fal fa-calendar-alt" />
                                    on <Link to={"/blog-details/" + item.id} className="ml-2">{item.postdate}</Link>
                                </li>
                                <li>
                                    <i className="fal fa-comment-dots" />
                                    <Link to={"/blog-details/" + item.id}>{item.reviews.length}</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </article>
        });
        return (
            <div className="sidebar-style-8">
                <div className="section section-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 ">
                                {/* style 7 */}
                                {paginationData}
                                {/* style 7 */}
                                {/* Pagination */}
                                <Pagination
                                    activePage={this.state.activePage}
                                    itemsCountPerPage={this.state.itemPerpage}
                                    totalItemsCount={this.state.data.length}
                                    pageRangeDisplayed={this.state.data.length}
                                    onChange={this.handlePageChange.bind(this)}
                                    innerClass="pagination mb-md-80"
                                    activeClass="active"
                                    itemClass="page-item"
                                    linkClass="page-link"
                                />
                            </div>
                            <div className="col-lg-4">
                                <Sidebar />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Content;