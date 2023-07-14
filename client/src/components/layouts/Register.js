import React, { useContext, useState } from 'react';
import axios from 'axios';
import { AuthContext } from '../contexts/authContext';

const Register = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [postcode, setPostcode] = useState('');
  const [state, setState] = useState('');
  const [country, setCountry] = useState('');
  const [language, setLanguage] = useState([]);
  const [status, setStatus] = useState('');
  const { setUser } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('https://tame-jersey-clam.cyclic.app/api/v1/user/register', { 
        firstName, 
        lastName, 
        email, 
        password, 
        address: {
          street,
          city,
          postcode,
          state,
          country
        }, 
        language
      });

      localStorage.setItem('token', res.data.token);
      setUser(res.data.user);

      setStatus('Success');
      resetForm()
    } catch (err) {
      console.error(err);
      setStatus('Not successful');
    }
  };

  const resetForm = () => {
    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword('');
    setStreet('');
    setCity('');
    setPostcode('');
    setState('');
    setCountry('');
    setLanguage('');
  };

  const cardStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: '400px',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: '#fff',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
    marginTop: '50px',
  };

  const inputContainerStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridColumnGap: '10px',
    width: '100%',
    marginBottom: '10px',
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    borderRadius: '4px',
  };

  const buttonStyle = {
    cursor: 'pointer',
    backgroundColor: '#007bffa0',
    color: '#fff',
    width: '100%',
    padding: '10px',
    borderRadius: '4px',
  };

  return (
    <form onSubmit={handleSubmit} style={cardStyle}>
      <div style={inputContainerStyle}>
        <input style={inputStyle} type="text" placeholder="First Name" value={firstName} onChange={e => setFirstName(e.target.value)} required />
        <input style={inputStyle} type="text" placeholder="Last Name" value={lastName} onChange={e => setLastName(e.target.value)} required />
      </div>
      <div style={inputContainerStyle}>
        <input style={inputStyle} type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
        <input style={inputStyle} type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required />
      </div>
      <div style={inputContainerStyle}>
        <input style={inputStyle} type="text" placeholder="Street" value={street} onChange={e => setStreet(e.target.value)} required />
        <input style={inputStyle} type="text" placeholder="City" value={city} onChange={e => setCity(e.target.value)} required />
      </div>
      <div style={inputContainerStyle}>
        <input style={inputStyle} type="number" placeholder="Postcode" value={postcode} onChange={e => setPostcode(parseInt(e.target.value, 10))} required />
        <input style={inputStyle} type="text" placeholder="State" value={state} onChange={e => setState(e.target.value)} required />
      </div>
      <div style={inputContainerStyle}>
        <input style={inputStyle} type="text" placeholder="Country" value={country} onChange={e => setCountry(e.target.value)} required />
        <input style={inputStyle} type="text" placeholder="Language" value={language} onChange={e => setLanguage(e.target.value.split(','))} required />
      </div>
      {status && <div>{status}</div>}
      <button style={buttonStyle} type="submit">Register</button>
    </form>
  );
};

export default Register;
