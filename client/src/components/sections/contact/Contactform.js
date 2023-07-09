import React from 'react';
import Contacthelper from '../../../helper/Contacthelper';
import ReCAPTCHA from "react-google-recaptcha";
import { Alert } from 'react-bootstrap';

class Contactform extends Contacthelper {
    render() {
        return (
            <div className="section pt-0">
                <div className="container">
                    <div className="section-title centered">
                        <span className="subtitle">Call to Action</span>
                        <h3 className="title">Make a Request</h3>
                    </div>
                    <div className="sigma_form style-2">
                        <form onSubmit={this.handleSubmit} method="GET">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <input type="text" placeholder="Enter Full Name" name="name" value={this.state.name} onChange={this.onNameChange} required />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <input type="email" placeholder="Email Address" name="email" value={this.state.email} onChange={this.onEmailChange} required />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <input type="number" placeholder="Phone number" name="phone" value={this.state.phone} onChange={this.onPhoneChange} required />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <input type="text" placeholder="Subject" name="subject" value={this.state.subject} onChange={this.onSubjectChange} required />
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-group">
                                        <textarea rows={10} placeholder="Enter Message" name="message" value={this.state.message} onChange={this.onMessageChange} required />
                                    </div>
                                </div>
                                <ReCAPTCHA
                                    sitekey="6LdxUhMaAAAAAIrQt-_6Gz7F_58S4FlPWaxOh5ib"
                                    onChange={this.reCaptchaLoaded.bind(this)}
                                    size="invisible"
                                />
                                <div className="col-12 text-center">
                                    <button type="submit">Submit Request</button>
                                    {/* Form Messages */}
                                    <Alert variant="success" className="d-none mt-3 mb-0" id="server_response_success">
                                        <strong>Success!</strong> Contact form has been successfully submitted.
                                    </Alert>
                                    <Alert variant="danger" className="d-none mt-3 mb-0" id="server_response_danger">
                                        <strong>Oops!</strong> Something bad happened. Please try again later.
                                    </Alert>
                                    {/* Form Messages */}
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contactform;