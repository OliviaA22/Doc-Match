import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DoctorUpdate = ({ match }) => {
    const [doctor, setDoctor] = useState({
        title: '',
        firstName: '',
        lastName: '',
        specialisation: [],
        address: {
            street: '',
            city: '',
            postcode: '',
            state: '',
            country: '',
            location: {
                type: 'Point',
                coordinates: [0, 0],
            },
        },
        language: [],
    });

    useEffect(() => {
        axios.get(`https://tame-jersey-clam.cyclic.app/api/v1/doctor/${match.params.id}`)
            .then(response => setDoctor(response.data))
            .catch(error => console.error(error));
    }, [match.params.id]);

    const handleChange = (e, index = null, field = null) => {
        if (index !== null && field !== null) {
            let newArray = [...doctor[field]];
            newArray[index] = e.target.value;
            setDoctor({ ...doctor, [field]: newArray });
        } else {
            setDoctor({ ...doctor, [e.target.name]: e.target.value });
        }
    }

    const handleAddressChange = (e) => {
        setDoctor({ ...doctor, address: { ...doctor.address, [e.target.name]: e.target.value } });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`https://tame-jersey-clam.cyclic.app/v1/doctor/${match.params.id}`, doctor).then(response => console.log(response));
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Title:
                <input type="text" name="title" value={doctor.title} onChange={handleChange} />
            </label>
            <label>
                First Name:
                <input type="text" name="firstName" value={doctor.firstName} onChange={handleChange} />
            </label>
            <label>
                Last Name:
                <input type="text" name="lastName" value={doctor.lastName} onChange={handleChange} />
            </label>
            <label>
                Address:
                <input type="text" name="street" value={doctor.address.street} onChange={handleAddressChange} placeholder="Street" />
                <input type="text" name="city" value={doctor.address.city} onChange={handleAddressChange} placeholder="City" />
                <input type="number" name="postcode" value={doctor.address.postcode} onChange={handleAddressChange} placeholder="Postcode" />
                <input type="text" name="state" value={doctor.address.state} onChange={handleAddressChange} placeholder="State" />
                <input type="text" name="country" value={doctor.address.country} onChange={handleAddressChange} placeholder="Country" />
            </label>
            <label>
                Specialisation:
                {doctor.specialisation.map((speciality, index) => (
                    <input key={index} type="text" value={speciality} onChange={(e) => handleChange(e, index, 'specialisation')} />
                ))}
            </label>
            <label>
                Languages:
                {doctor.language.map((language, index) => (
                    <input key={index} type="text" value={language} onChange={(e) => handleChange(e, index, 'language')} />
                ))}
            </label>
            <button type="submit">Update Doctor</button>
        </form>
    )
}

export default DoctorUpdate;