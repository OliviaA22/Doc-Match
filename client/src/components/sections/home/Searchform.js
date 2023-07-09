import React, { Component } from 'react';

class Searchform extends Component {
    constructor(props) {
        super(props);
        this.state = {
            topic: '',
            location: '',
            language: ''
        }
        this.onTopicChange = this.onTopicChange.bind(this);
        this.onLocationChange = this.onLocationChange.bind(this);
        this.onLanguageChange = this.onLanguageChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    onTopicChange(event) {
        this.setState({ topic: event.target.value })
    }
    onLocationChange(event) {
        this.setState({ location: event.target.value })
    }
    onLanguageChange(event) {
        this.setState({ language: event.target.value })
    }
    handleSubmit(e) {
        e.preventDefault();
        this.resetForm();
        console.log(this.state.topic, this.state.location, this.state.language);
    }
    resetForm() {
        this.setState({
            topic: "",
            location: "",
            language: ""
        })
    }
    render() {
        return (
            <div className="sigma_banner-info style-2">
                <div className="container">
                    <div className="sigma_cta style-13">
                        <form onSubmit={this.handleSubmit}>
                            <div className="row no-gutters">
                                <div className="col-lg-4">
                                    <div className="form-group">
                                        <label>Search Topic</label>
                                        <input type="text" className="topic-field" placeholder="Search doctors, clinic, Hospitals etc." value={this.state.topic} onChange={this.onTopicChange} required />
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="form-group">
                                        <label>Location</label>
                                        <div className="input-group">
                                            <i className="fal fa-map-marker-alt d-none d-sm-block" />
                                            <input type="text" className="location-field" placeholder="Location" value={this.state.location} onChange={this.onLocationChange} required />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="form-group">
                                        <label>Language</label>
                                        <div className="input-group">
                                            <i className="fal fa-language d-none d-sm-block" />
                                            <input type="text" className="language-field" placeholder="Language" value={this.state.language} onChange={this.onLanguageChange} required />
                                            <div className="input-group-append">
                                                <button type="submit"> <i className="fal fa-search mr-1" /> Find Now</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Searchform;
