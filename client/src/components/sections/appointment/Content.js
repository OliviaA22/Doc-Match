import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fullname: "",
            email: "",
            dateofbirth: "",
            phoneno: "",
            gender: "",
            hospital: "",
            service: "",
            date: "",
            doctor: "",
            remarks: "",
            cardName: "",
            cardNumber: "",
            expDate: "",
            cardCvv: "",
            condition: "",
        };
        this.fullname = this.fullname.bind(this);
        this.email = this.email.bind(this);
        this.dateofbirth = this.dateofbirth.bind(this);
        this.phoneno = this.phoneno.bind(this);
        this.gender = this.gender.bind(this);
        this.hospital = this.hospital.bind(this);
        this.service = this.service.bind(this);
        this.date = this.date.bind(this);
        this.doctor = this.doctor.bind(this);
        this.remarks = this.remarks.bind(this);
        this.cardName = this.cardName.bind(this);
        this.cardNumber = this.cardNumber.bind(this);
        this.expDate = this.expDate.bind(this);
        this.cardCvv = this.cardCvv.bind(this);
        this.condition = this.condition.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    fullname(event) { this.setState({ fullname: event.target.value }) }
    email(event) { this.setState({ email: event.target.value }) }
    dateofbirth(event) { this.setState({ dateofbirth: event.target.value }) }
    phoneno(event) { this.setState({ phoneno: event.target.value }) }
    gender(event) { this.setState({ gender: event.target.value }) }
    hospital(event) { this.setState({ hospital: event.target.value }) }
    service(event) { this.setState({ service: event.target.value }) }
    date(event) { this.setState({ date: event.target.value }) }
    doctor(event) { this.setState({ doctor: event.target.value }) }
    remarks(event) { this.setState({ remarks: event.target.value }) }
    cardName(event) { this.setState({ cardName: event.target.value }) }
    cardNumber(event) { this.setState({ cardNumber: event.target.value }) }
    expDate(event) { this.setState({ expDate: event.target.value }) }
    cardCvv(event) { this.setState({ cardCvv: event.target.value }) }
    condition(event) { this.setState({ condition: event.target.value }) }
    handleSubmit(e) {
        e.preventDefault();
        this.resetForm();
        console.log(
            this.state.fullname,
            this.state.email,
            this.state.dateofbirth,
            this.state.phoneno,
            this.state.gender,
            this.state.hospital,
            this.state.service,
            this.state.date,
            this.state.doctor,
            this.state.remarks,
            this.state.cardName,
            this.state.cardNumber,
            this.state.expDate,
            this.state.cardCvv,
            this.state.condition,
        );
    }
    resetForm() {
        this.setState({
            fullname: "",
            email: "",
            dateofbirth: "",
            phoneno: "",
            gender: "",
            hospital: "",
            service: "",
            date: "",
            doctor: "",
            remarks: "",
            cardName: "",
            cardNumber: "",
            expDate: "",
            cardCvv: "",
            condition: "",
        })
    }
    render() {
        return (
            <div className="sidebar-style-9">
                <div className="section">
                    <div className="container">
                        <form onSubmit={this.handleSubmit} method="GET">
                            <div className="row">
                                <div className="col-lg-8">
                                    <div className="sigma_form style-7">
                                        <div className="form-block">
                                            <h4>Your Information:</h4>
                                            <div className="row">
                                                <div className="col-lg-6">
                                                    <div className="form-group">
                                                        <i className="fal fa-user" />
                                                        <input type="text" value={this.state.fullname} onChange={this.fullname} placeholder="Patient Name" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="form-group">
                                                        <i className="fal fa-at" />
                                                        <input type="email" value={this.state.email} onChange={this.email} placeholder="Email" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="form-group">
                                                        <i className="fal fa-calendar-alt" />
                                                        <input type="text" value={this.state.dateofbirth} onChange={this.dateofbirth} data-provide="datepicker" placeholder="Date of Birth" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="form-group">
                                                        <i className="fal fa-phone" />
                                                        <input type="text" value={this.state.phoneno} onChange={this.phoneno} placeholder="Phone Number" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-block d-flex">
                                            <h4 className="mb-0 mr-4">Gender:</h4>
                                            <div className="d-flex align-items-center">
                                                <input type="radio" id="radio" value={this.state.gender} onChange={this.gender} />
                                                <label className="mb-0" htmlFor="radio">Male</label>
                                            </div>
                                            <div className="d-flex align-items-center ml-4">
                                                <input type="radio" id="radio2" value={this.state.gender} onChange={this.gender} />
                                                <label className="mb-0" htmlFor="radio2">Female</label>
                                            </div>
                                        </div>
                                        <div className="form-block">
                                            <div className="row">
                                                <div className="col-12">
                                                    <div className="form-group">
                                                        <select value={this.state.hospital} onChange={this.hospital}>
                                                            <option value={1}>Select Hospital</option>
                                                            <option value={2}>Hospital 1</option>
                                                            <option value={3}>Hospital 2</option>
                                                            <option value={4}>Hospital 3</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="form-group">
                                                        <select value={this.state.service} onChange={this.service}>
                                                            <option value={1}>Select Service</option>
                                                            <option value={2}>Service 1</option>
                                                            <option value={3}>Service 2</option>
                                                            <option value={4}>Service 3</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="form-group">
                                                        <i className="fal fa-calendar-alt" />
                                                        <input type="text" value={this.state.date} onChange={this.date} data-provide="datepicker" placeholder="Select Date" />
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="form-group">
                                                        <i className="fal fa-user-md" />
                                                        <input type="text" value={this.state.doctor} onChange={this.doctor} placeholder="Select Doctor" />
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="form-group">
                                                        <textarea value={this.state.remarks} onChange={this.remarks} rows={7} placeholder="Note To The Doctor(Optional)" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-block mb-0">
                                            <h4>Payment Information:</h4>
                                            <div className="row">
                                                <div className="col-12">
                                                    <div className="form-group">
                                                        <label>Name On Card</label>
                                                        <input type="text" value={this.state.cardName} onChange={this.cardName} placeholder="Dorothy Schneider" />
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="form-group">
                                                        <label>Card Number</label>
                                                        <div className="payment-card-wrapper d-block d-sm-flex align-items-center">
                                                            <input type="text" value={this.state.cardNumber} onChange={this.cardNumber} placeholder="xxxx-xxxx-xxxx-xxxx" />
                                                            <div className="card-image">
                                                                <img src={process.env.PUBLIC_URL + "/assets/img/book-apppointment/243x50.png"} alt="img" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="form-group">
                                                        <label>Expiration Date</label>
                                                        <input type="text" value={this.state.expDate} onChange={this.expDate} placeholder="mm/yy" data-provide="datepicker" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="form-group">
                                                        <label>Security Code</label>
                                                        <input type="text" value={this.state.cardCvv} onChange={this.cardCvv} placeholder="CCV" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="d-flex align-items-center mt-2">
                                            <input type="checkbox" id="checkbox" value={this.state.condition} onChange={this.condition} />
                                            <label className="mb-0" htmlFor="checkbox">I accept <Link to="#">Terms</Link> and <Link to="#">conditions</Link> and general policy</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="sidebar style-10 mt-5 mt-lg-0">
                                        {/* Booking Widget */}
                                        <div className="widget widget-booking">
                                            <h5 className="widget-title">Booking Summary</h5>
                                            <ul>
                                                <li className="d-flex align-items-center justify-content-between">
                                                    <span>Date</span>
                                                    <span>07/10/2022</span>
                                                </li>
                                                <li className="d-flex align-items-center justify-content-between">
                                                    <span>Time</span>
                                                    <span>08:30 PM</span>
                                                </li>
                                                <li className="d-flex align-items-center justify-content-between">
                                                    <span>Doctor Name</span>
                                                    <span>Dr. Joseph Doe</span>
                                                </li>
                                            </ul>
                                            <hr />
                                            <ul>
                                                <li className="d-flex align-items-center justify-content-between">
                                                    <span>Lorem ipsum dolor</span>
                                                    <span>$80</span>
                                                </li>
                                                <li className="d-flex align-items-center justify-content-between">
                                                    <span>Lorem ipsum dolor</span>
                                                    <span>$140</span>
                                                </li>
                                            </ul>
                                            <hr />
                                            <ul>
                                                <li className="d-flex align-items-center justify-content-between">
                                                    <span className="secondary-color"><b>Total</b></span>
                                                    <span className="secondary-color"><b>$220</b></span>
                                                </li>
                                                <li className="d-flex align-items-center justify-content-between">
                                                    <button type="submit" className="sigma_btn btn-block btn-sm mt-4">
                                                        Confirm and Pay
                                                        <i className="fal fa-arrow-right ml-3" />
                                                    </button>
                                                </li>
                                            </ul>
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

export default Content;