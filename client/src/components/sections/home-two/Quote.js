import React from 'react';
import Contacthelper from '../../../helper/Contacthelper';
import ReCAPTCHA from "react-google-recaptcha";
import { Alert } from 'react-bootstrap';

class Quote extends Contacthelper {
    render() {
        return (
            <div className="section">
                <div className="container">
                    <div className="row justify-content-end position-relative">
                        <div className="sigma_contact-image style-6 d-none d-lg-block">
                            <img src={process.env.PUBLIC_URL + "/assets/img/home-2/480x590.jpg"} alt="img" />
                        </div>
                        <div className="col-lg-8">
                            <div className="sigma_form style-6">
                                <div className="section-title">
                                    <h3 className="title mb-1 text-white">Get in Touch</h3>
                                    <p className="text-white">We Will Be Happy To Assist You</p>
                                </div>
                                <form onSubmit={this.handleSubmit} method="Get">
                                    <div className="form-group">
                                        <i className="fal fa-user" />
                                        <input type="text" placeholder="Name" name="name" value={this.state.name} onChange={this.onNameChange} required />
                                    </div>
                                    <div className="form-group">
                                        <i className="fal fa-envelope" />
                                        <input type="email" placeholder="Email" name="email" value={this.state.email} onChange={this.onEmailChange} required />
                                    </div>
                                    <div className="form-group">
                                        <textarea rows={5} placeholder="Message" name="message" value={this.state.message} onChange={this.onMessageChange} required />
                                    </div>
                                    <ReCAPTCHA
                                        sitekey="6LdxUhMaAAAAAIrQt-_6Gz7F_58S4FlPWaxOh5ib"
                                        onChange={this.reCaptchaLoaded.bind(this)}
                                        size="invisible"
                                    />
                                    <button type="submit" className="btn-block secondary">Send</button>
                                    {/* Form Messages */}
                                    <Alert variant="success" className="d-none mt-3 mb-0" id="server_response_success">
                                        <strong>Success!</strong> Contact form has been successfully submitted.
                                    </Alert>
                                    <Alert variant="danger" className="d-none mt-3 mb-0" id="server_response_danger">
                                        <strong>Oops!</strong> Something bad happened. Please try again later.
                                    </Alert>
                                    {/* Form Messages */}
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Quote;