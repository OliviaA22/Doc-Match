import React, { Component } from 'react';

class Cta extends Component {
    render() {
        return (
            <div className="section p-0 margin-negative sm">
                <div className="container">
                    <div className="sigma_cta style-9 bg-cover bg-center bg-secondary-1 shadow-none" style={{ backgroundImage: "url(" + process.env.PUBLIC_URL + "/assets/img/section-tr.png)" }}>
                        <div className="row align-items-center">
                            <div className="col-lg-5">
                                <div className="sigma_cta-content">
                                    <h3 className="mb-0 text-white">Get notified about the event! Subscribe Today</h3>
                                </div>
                            </div>
                            <div className="col-lg-7 mt-lg-0 mt-3">
                                <form>
                                    <div className="input-group">
                                        <input type="email" name="email" placeholder="Email Address" required />
                                        <div className="input-group-append">
                                            <button type="button" className="light">
                                                <i className="fal fa-envelope mr-2" />
                                                Subscribe
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Cta;