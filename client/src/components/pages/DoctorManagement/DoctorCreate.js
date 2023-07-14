import React, { useState } from 'react';
import axios from 'axios';

const DoctorCreate = () => {
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

  const handleChange = (e, index = null, field = null) => {
    if (index !== null && field !== null) {
      let newArray = [...doctor[field]];
      newArray[index] = e.target.value;
      setDoctor({ ...doctor, [field]: newArray });
    } else if (field === 'specialisation' || field === 'language') {
      setDoctor({ ...doctor, [field]: [...doctor[field], ''] });
    } else {
      setDoctor({ ...doctor, [e.target.name]: e.target.value });
    }
  };  

  const handleAddressChange = (e) => {
    setDoctor({ ...doctor, address: { ...doctor.address, [e.target.name]: e.target.value } });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('https://tame-jersey-clam.cyclic.app/api/v1/doctor', doctor)
      .then((response) => console.log(response))
      .catch((error) => console.error(error));
  };

  const handleRemoveItem = (index, field) => {
    const newArray = [...doctor[field]];
    newArray.splice(index, 1);
    setDoctor({ ...doctor, [field]: newArray });
  };  

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.inputContainer}>
          <label style={styles.inputLabel}>Title:</label>
          <input type="text" name="title" value={doctor.title} onChange={handleChange} style={styles.input} />
        </div>
        <div style={styles.inputContainer}>
          <label style={styles.inputLabel}>First Name:</label>
          <input type="text" name="firstName" value={doctor.firstName} onChange={handleChange} style={styles.input} />
        </div>
        <div style={styles.inputContainer}>
          <label style={styles.inputLabel}>Last Name:</label>
          <input type="text" name="lastName" value={doctor.lastName} onChange={handleChange} style={styles.input} />
        </div>
        <div style={styles.inputContainer}>
          <label style={styles.inputLabel}>Address:</label>
          <input
            type="text"
            name="street"
            value={doctor.address.street}
            onChange={handleAddressChange}
            placeholder="Street"
            style={styles.input}
          />
          <input
            type="text"
            name="city"
            value={doctor.address.city}
            onChange={handleAddressChange}
            placeholder="City"
            style={styles.input}
          />
          <input
            type="number"
            name="postcode"
            value={doctor.address.postcode}
            onChange={handleAddressChange}
            placeholder="Postcode"
            style={styles.input}
          />
          <input
            type="text"
            name="state"
            value={doctor.address.state}
            onChange={handleAddressChange}
            placeholder="State"
            style={styles.input}
          />
          <input
            type="text"
            name="country"
            value={doctor.address.country}
            onChange={handleAddressChange}
            placeholder="Country"
            style={styles.input}
          />
        </div>
        <div style={styles.inputContainer}>
        <label>
          Specialisation:
          {doctor.specialisation.map((speciality, index) => (
            <div style={styles.inputContainer} key={index}>
              <input
                type="text"
                value={speciality}
                onChange={(e) => handleChange(e, index, 'specialisation')}
                style={styles.input}
              />
              <button type="button" onClick={() => handleRemoveItem(index, 'specialisation')}>
                Remove
              </button>
            </div>
          ))}
          <button type="button" onClick={() => handleChange(null, null, 'specialisation')}>
            Add Specialisation
          </button>
        </label>
        </div>
        <div style={styles.inputContainer}>
        <label>
          Languages:
          {doctor.language.map((language, index) => (
            <div style={styles.inputContainer} key={index}>
              <input
                type="text"
                value={language}
                onChange={(e) => handleChange(e, index, 'language')}
                style={styles.input}
              />
              <button type="button" onClick={() => handleRemoveItem(index, 'language')}>
                Remove
              </button>
            </div>
          ))}
          <button type="button" onClick={() => handleChange(null, null, 'language')}>
            Add Language
          </button>
        </label>
        </div>
        <button type="submit" style={styles.button}>Create Doctor</button>
      </form>
    </div>
  );
};

const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '400px',
      padding: '20px',
      backgroundColor: '#fff',
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
      borderRadius: '8px',
      marginTop: '50px',
    },
    inputContainer: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gridColumnGap: '10px',
      width: '100%',
      marginBottom: '10px',
    },
    inputLabel: {
      fontWeight: 'bold',
      marginBottom: '5px',
    },
    input: {
      width: '100%',
      padding: '10px',
      borderRadius: '4px',
    },
    button: {
      cursor: 'pointer',
      backgroundColor: '#007bffa0',
      color: '#fff',
      width: '100%',
      padding: '10px',
      borderRadius: '4px',
    },
  };  

export default DoctorCreate;
