import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import tags from "../../data/tags.json";
import category from "../../data/category.json";
import { getRecentPost } from "../../helper/blogHelper";
import { getCategories, getAuthor, getNameInitials } from "../../helper/helper";

class Blogsidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchText: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }
    // Search Filter
    onChange(event) {
        this.setState({ searchText: event.target.value })
    }
    handleSubmit(e) {
        e.preventDefault();
        //const { history } = this.props;
        if (this.state.searchText === "") {
            return;
        } else {
            this.props.history.push("/blog/search/" + this.state.searchText);
        }
    }
    render() {
        return (
            <div className="sidebar">
                {/* Search Widget */}
                <div className="widget widget-search">
                    <form onSubmit={this.handleSubmit} method="GET">
                        <div className="input-group">
                            <input type="text" placeholder="Search" name="searchText" value={this.state.searchText} onChange={this.onChange} required />
                            <div className="input-group-append">
                                <button type="submit">
                                    <i className="fal fa-search mr-0" />
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
                {/* Category Widget */}
                <div className="widget widget-categories">
                    <h5 className="widget-title">Categories</h5>
                    <ul>
                        {/* Data */}
                        {category.map((item, i) => (
                            <li key={i}>
                                <Link to={"/blog/cat/" + item.id}>{item.title} <span>{item.count}</span></Link>
                            </li>
                        ))}
                        {/* Data */}
                    </ul>
                </div>
                {/* Recent Posts Widget */}
                <div className="widget widget-sigma-recent-posts">
                    <h5 className="widget-title">Recent Post</h5>
                    {/* Data */}
                    {getRecentPost().map((item, i) => (
                        <div className="sigma_recent-post" key={i}>
                            <Link to={"/blog-details/" + item.id} className="recent-post-image">
                                <img src={process.env.PUBLIC_URL + "/" + item.image[0]} alt={item.title} />
                                <span>{item.reviews.length}</span>
                            </Link>
                            <div className="recent-post-descr">
                                <h6>
                                    <Link to={"/blog-details/" + item.id}>{item.title}</Link>
                                </h6>
                                <Link to={"/blog-details/" + item.id} className="date">
                                    <i className="far fa-clock mr-2" />
                                    {item.postdate}
                                </Link>
                            </div>
                        </div>
                    ))}
                    {/* Data */}
                </div>
                {/* Subscribe Widget */}
                <div className="widget widget-newsletter">
                    <h5 className="widget-title">Join Newsletter</h5>
                    <form>
                        <input type="email" name="email" placeholder="Enter your email" />
                        <button type="button" className="btn-block mt-4">Subscribe</button>
                    </form>
                </div>
                {/* Recent Posts Widget */}
                <div className="widget widget-sigma-recent-posts style-3">
                    <h5 className="widget-title">Recent Post</h5>
                    {/* Data */}
                    {getRecentPost().map((item, i) => (
                        <div className="sigma_recent-post" key={i}>
                            <div className="sigma_post-categories">
                                {getCategories(item.category).slice(0, 2).map((cat, i) => (
                                    <Link to={"/blog/cat/" + cat.id} key={i}>{cat.title}</Link>
                                ))}
                            </div>
                            <div className="recent-post-descr">
                                <h6>
                                    <Link to={"/blog-details/" + item.id}>{item.title}</Link>
                                </h6>
                                {getAuthor(item.author).map((author, i) => (
                                    <div className="author-info d-flex align-items-center" key={i}>
                                        <span>{getNameInitials(author.name)}</span>
                                        <div>
                                            <Link to={"/blog/author/" + author.id} className="author-name">{author.name}</Link>
                                            <Link to={"/blog-details/" + item.id} className="date">{item.postdate}</Link>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                    {/* Data */}
                </div>
                {/* Tags Widget */}
                <div className="widget tagcloud">
                    <h5 className="widget-title">Popular Tags</h5>
                    {/* Data */}
                    {tags.map((item, i) => (
                        <Link to={"/blog/tag/" + item.id} key={i}>{item.title}</Link>
                    ))}
                    {/* Data */}
                </div>
            </div>
        );
    }
}

export default withRouter(Blogsidebar);