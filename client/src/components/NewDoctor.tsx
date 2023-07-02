import React, { useState } from 'react';
import axios from 'axios';

type IDoctor = {
  _id?: string;
  title: string;
  firstName: string;
  lastName: string;
  address: {
    street: string;
    city: string;
    postcode: number;
    state: string;
    country: string;
  };
  language: string[];
  specialisation: string[];
};

const NewDoctor = () => {
    const [doctor, setDoctor] = useState<IDoctor>({
        title: "",
        firstName: "",
        lastName: "",
        address: {
            street: "",
            city: "",
            postcode: 0,
            state: "",
            country: ""
        },
        language: [],
        specialisation: []
    });
    
    const handleFormSubmit = (event: React.FormEvent) => {
      event.preventDefault();
      axios.post('http://localhost:3000/doctors', doctor)
        .then(() => {
          // Handle success here...
        })
        .catch(error => {
          console.error(`There was an error creating the ${doctor.firstName} ${doctor.lastName}: ${error}`);
        });
    };
  
    return (
      <form onSubmit={handleFormSubmit}>
        {/* Implement form fields here */}
      </form>
    );
  };
  
  export default NewDoctor;