
import React from 'react';
import axios from 'axios';

const DoctorDelete = ({ match }) => {
    const handleDelete = () => {
        axios.delete(`http://localhost:5000/api/doctors/${match.params.id}`).then(response => console.log(response));
    }

    return (
        <button onClick={handleDelete}>Delete Doctor</button>
    )
}

export default DoctorDelete;