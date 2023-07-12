
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DoctorRead = () => {
    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        axios.get('/api/doctors').then(response => setDoctors(response.data));
    }, []);

    return (
        <ul>
            {doctors.map(doctor => <li key={doctor.id}>{doctor.name}</li>)}
        </ul>
    )
}

export default DoctorRead;
