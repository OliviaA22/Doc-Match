import React, { useState, useEffect, ChangeEvent } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

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

const EditDoctor: React.FC = () => {
    let { id } = useParams<{ id: string }>();
    const [doctor, setDoctor] = useState<IDoctor | null>(null);

    useEffect(() => {
        axios.get(`http://localhost:3000/doctors/${id}`)
            .then(response => {
                setDoctor(response.data);
            })
            .catch(error => {
                console.error(`There was an error retrieving the doctor: ${error}`);
            });
    }, [id]);
  
    const handleFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const fieldName = event.target.name;
        const fieldValue = event.target.value;
      
        setDoctor(prevState => ({
          ...prevState,
          // Special handling for nested fields
          ...(fieldName.startsWith('address.') && {
            address: {
              ...(prevState?.address),
              [fieldName.split('.')[1]]: fieldValue
            }
          }),
          [fieldName]: fieldValue
        }));
      };
  
    const handleFormSubmit = (event: React.FormEvent) => {
      event.preventDefault();
      axios.put(`http://localhost:3000/doctors/${id}`, doctor)
        .then(() => {
          // Handle success here...
        })
        .catch(error => {
          console.error(`There was an error updating the doctor: ${error}`);
        });
    };
  
    return doctor ? (
        <form onSubmit={handleFormSubmit}>
          <TextField 
            label="Title" 
            name="title" 
            value={doctor.title} 
            onChange={handleFormChange}
          />
          <TextField 
            label="First Name" 
            name="firstName" 
            value={doctor.firstName} 
            onChange={handleFormChange}
          />
          <TextField 
            label="Last Name" 
            name="lastName" 
            value={doctor.lastName} 
            onChange={handleFormChange}
          />
          <TextField 
            label="Street" 
            name="address.street" 
            value={doctor.address.street} 
            onChange={handleFormChange}
          />
          <TextField 
            label="City" 
            name="address.city" 
            value={doctor.address.city} 
            onChange={handleFormChange}
          />
          <TextField 
            label="Postcode" 
            name="address.postcode" 
            value={doctor.address.postcode} 
            onChange={handleFormChange}
          />
          <TextField 
            label="State" 
            name="address.state" 
            value={doctor.address.state} 
            onChange={handleFormChange}
          />
          <TextField 
            label="Country" 
            name="address.country" 
            value={doctor.address.country} 
            onChange={handleFormChange}
          />
          <TextField 
            label="Language" 
            name="language" 
            value={doctor.language.join(',')} 
            onChange={handleFormChange}
          />
          <TextField 
            label="Specialisation" 
            name="specialisation" 
            value={doctor.specialisation.join(',')} 
            onChange={handleFormChange}
          />
          <Button type="submit">
            Save
          </Button>
        </form>
      ) : (
        <p>Loading...</p>
      );      
};

export default EditDoctor;
