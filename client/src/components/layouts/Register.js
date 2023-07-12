import React, { useContext, useState } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/authContext';

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
  const { setUser } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('http://localhost:5000/api/v1/user', { 
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
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="First Name" value={firstName} onChange={e => setFirstName(e.target.value)} required />
      <input type="text" placeholder="Last Name" value={lastName} onChange={e => setLastName(e.target.value)} required />
      <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
      <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required />
      <input type="text" placeholder="Street" value={street} onChange={e => setStreet(e.target.value)} required />
      <input type="text" placeholder="City" value={city} onChange={e => setCity(e.target.value)} required />
      <input type="number" placeholder="Postcode" value={postcode} onChange={e => setPostcode(e.target.value)} required />
      <input type="text" placeholder="State" value={state} onChange={e => setState(e.target.value)} required />
      <input type="text" placeholder="Country" value={country} onChange={e => setCountry(e.target.value)} required />
      <input type="text" placeholder="Language" value={language} onChange={e => setLanguage(e.target.value.split(','))} required />
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
