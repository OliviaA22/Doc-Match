import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DoctorRead = ({ match }) => {
    const [doctor, setDoctor] = useState({});

    useEffect(() => {
        axios.get(`https://tame-jersey-clam.cyclic.app/api/v1/doctor/${match.params.id}`)
            .then(response => {
                setDoctor(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, [match.params.id]);

    return (
        <div>
            <h2>{doctor.title} {doctor.firstName} {doctor.lastName}</h2>
            <p>Specialization: {doctor.specialisation.join(', ')}</p>
            <p>Languages: {doctor.language.join(', ')}</p>
            <p>Address: {doctor.address.street}, {doctor.address.city}, {doctor.address.state}, {doctor.address.postcode}, {doctor.address.country}</p>
        </div>
    )
}

export default DoctorRead;
