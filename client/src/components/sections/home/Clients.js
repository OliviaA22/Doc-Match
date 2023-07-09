import React, { Component } from 'react';
import clients from "../../../data/clients.json";

class Clients extends Component {
    render() {
        return (
            <div className="sigma_clients-wrapper style-3">
                <div className="row">
                    {/* Data */}
                    {clients.slice(0, 4).map((item, i) => (
                        <div className="col-lg-6 col-md-6" key={i}>
                            <div className="sigma_clients style-3">
                                <img src={process.env.PUBLIC_URL + "/" + item.image} alt="clients" />
                            </div>
                        </div>
                    ))}
                    {/* Data */}
                </div>
            </div>
        );
    }
}

export default Clients;