
import React from 'react';
import axios from 'axios';

const DoctorDelete = ({ match }) => {
    const handleDelete = () => {
        axios.delete(`https://tame-jersey-clam.cyclic.app/api/doctors/${match.params.id}`).then(response => console.log(response));
    }

    return (
        <button onClick={handleDelete}>Delete Doctor</button>
    )
}

export default DoctorDelete;
