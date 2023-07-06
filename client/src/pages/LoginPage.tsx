import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography, TextField, Button } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    background: 'linear-gradient(to bottom, #F9A825, #2196F3)',
  },
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(3),
    borderRadius: theme.spacing(2),
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    backdropFilter: 'blur(8px)',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
  },
  title: {
    marginBottom: theme.spacing(3),
    color: '#333333',
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  input: {
    marginBottom: theme.spacing(2),
    width: '100%',
  },
  button: {
    marginTop: theme.spacing(2),
    width: '100%',
  },
}));

const LoginPage: React.FC = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    // Handle register logic here
    
    navigate('/profile');
  };

  const handleLogin = () => {
    // Handle login logic here
    navigate('/profile');
  };

  return (
    <div className={classes.root}>
      <Container maxWidth="sm" className={classes.formContainer}>
        <Typography variant="h5" className={classes.title}>
          Login
        </Typography>
        <TextField
          label="Email"
          variant="outlined"
          className={classes.input}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Password"
          variant="outlined"
          type="password"
          className={classes.input}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={handleLogin}
        >
          Login
        </Button>
        <Button
          variant="outlined"
          color="primary"
          className={classes.button}
          onClick={handleRegister}
        >
          Register
        </Button>
      </Container>
    </div>
  );
};

export default LoginPage;
