import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import blogpost from '../../../data/blog/blog.json';
import { getFilteredPosts } from '../../../helper/blogHelper';
import { getAuthor, getCategories } from '../../../helper/helper';
import Pagination from "react-js-pagination"; 

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.getPosts(),
            activePage: 1,
            itemPerpage: 6
        }
    }
    getPosts() {
        var cat = this.props.catId ? this.props.catId : '';
        var tag = this.props.tagId ? this.props.tagId : '';
        var author = this.props.authorId ? this.props.authorId : '';
        var searchQuery = this.props.query ? this.props.query : '';
        var filteredItems = getFilteredPosts(blogpost, { cat, tag, author, searchQuery });
        return filteredItems;
    }
    handlePageChange(pageNumber) {
        this.setState({ activePage: pageNumber });
    }
    render() {
        const paginationData = this.state.data.slice((this.state.activePage - 1) * this.state.itemPerpage, this.state.activePage * this.state.itemPerpage).map((item, i) => {
            return <div key={i} className="col-lg-4 col-md-6">
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
        });
        return (
            <div className="sidebar-style-8">
                <div className="section section-padding">
                    <div className="container">
                        <div className="row">
                            {/* Data */}
                            {paginationData}
                            {/* Data */}
                        </div>
                        {/* Pagination */}
                        <Pagination
                            activePage={this.state.activePage}
                            itemsCountPerPage={this.state.itemPerpage}
                            totalItemsCount={this.state.data.length}
                            pageRangeDisplayed={this.state.data.length}
                            onChange={this.handlePageChange.bind(this)}
                            innerClass="pagination"
                            activeClass="active"
                            itemClass="page-item"
                            linkClass="page-link"
                        />
                        {/* Pagination */}
                    </div>
                </div>
            </div>

        );
    }
}

export default Content;