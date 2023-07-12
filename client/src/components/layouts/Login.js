import React, { useState, useContext } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import Button from '@mui/material/Button';
import { AuthContext } from '../contexts/authContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();
  const { setUser } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('http://localhost:5000/api/v1/user/login', { email, password });
      localStorage.setItem('token', res.data.token);
      setUser(res.data.user);
      history.push('/');
    } catch (err) {
      console.error(err);
    }
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const inputStyle = {
    marginBottom: '10px',
    padding: '10px',
    borderRadius: '4px',
    width: '100%',
  };

  const buttonStyle = {
    marginTop: '10px',
    padding: '10px',
    backgroundColor: '#007bffa0',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    width: '100%',
  };

  return (
    <form onSubmit={handleSubmit} style={formStyle}>
      <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} style={inputStyle} required />
      <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} style={inputStyle} required />
      <Button type="submit" style={buttonStyle}>Login</Button>
    </form>
  );
};

export default Login;