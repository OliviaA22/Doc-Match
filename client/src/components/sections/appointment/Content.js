import React, { useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../../contexts/authContext';

const Content = () => {
    const { isAuthenticated } = useContext(AuthContext);
  
    const [appointment, setAppointment] = useState({
      doctorId: '',
      patientName: '',
      appointmentDate: '',
    });
  
    const handleChange = (e) => {
      setAppointment({
        ...appointment,
        [e.target.name]: e.target.value,
      });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      if (!isAuthenticated) {
        alert('You need to be logged in to make an appointment.');
        return;
      }
  
      try {
        const response = await axios.post('http://localhost:5000/api/v1/appointment', appointment);
        
        if(response.status === 201) {
          alert('Appointment created successfully!');
          setAppointment({
            doctorId: '',
            patientName: '',
            appointmentDate: '',
          });
        } else {
          alert('Error while creating appointment!');
        }
      } catch (error) {
        console.error('An error occurred while creating the appointment:', error);
        alert('An error occurred. Please try again later.');
      }
    };
  
    const cardStyle = {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '0 auto',
      width: '300px',
      padding: '20px',
      borderRadius: '5px',
      boxShadow: '0px 0px 5px 2px rgba(0,0,0,0.1)',
      marginTop: '50px'
    };
  
    const inputStyle = {
      margin: '10px 0',
      padding: '10px',
      width: '100%'
    };
  
    return (
      <div style={cardStyle}>
        <form onSubmit={handleSubmit}>
          <label>
            Doctor ID:
            <input
              style={inputStyle}
              type="text"
              name="doctorId"
              value={appointment.doctorId}
              onChange={handleChange}
            />
          </label>
          <label>
            Patient Name:
            <input
              style={inputStyle}
              type="text"
              name="patientName"
              value={appointment.patientName}
              onChange={handleChange}
            />
          </label>
          <label>
            Appointment Date:
            <input
              style={inputStyle}
              type="date"
              name="appointmentDate"
              value={appointment.appointmentDate}
              onChange={handleChange}
            />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  };
  
  export default Content;
