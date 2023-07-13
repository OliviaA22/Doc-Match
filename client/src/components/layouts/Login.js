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
    gridTemplateColumns: '1fr',
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
        <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} style={inputStyle} required />
      </div>
      <div style={inputContainerStyle}>
        <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} style={inputStyle} required />
      </div>
      <Button type="submit" style={buttonStyle}>Login</Button>
    </form>
  );
};

export default Login;
