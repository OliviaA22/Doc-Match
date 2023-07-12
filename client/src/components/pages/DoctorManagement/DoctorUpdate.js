
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DoctorUpdate = ({ match }) => {
    const [doctor, setDoctor] = useState({ name: '', specialization: '' });

    useEffect(() => {
        axios.get(`/api/doctors/${match.params.id}`).then(response => setDoctor(response.data));
    }, [match.params.id]);

    const handleChange = (e) => {
        setDoctor({ ...doctor, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`/api/doctors/${match.params.id}`, doctor).then(response => console.log(response));
    }

    return (
        <form onSubmit={handleSubmit}>
            <input name="name" value={doctor.name} onChange={handleChange} />
            <input name="specialization" value={doctor.specialization} onChange={handleChange} />
            <button type="submit">Update Doctor</button>
        </form>
    )
}

export default DoctorUpdate;
