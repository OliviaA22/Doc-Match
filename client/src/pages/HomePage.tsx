import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Container, Grid, Typography, Dialog, DialogTitle, DialogContent, TextField, DialogActions } from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import StarIcon from '@material-ui/icons/Star';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';

const useStyles = makeStyles((theme) => ({
  root: {
    background: 'linear-gradient(135deg, #F9A825 0%, #FFFFFF 50%, #2196F3 100%)',
    padding: theme.spacing(3),
    minHeight: '100vh',
  },
  header: {
    backgroundColor: '#282c34',
    padding: theme.spacing(3),
    color: '#fff',
  },
  intro: {
    padding: theme.spacing(6, 3),
    textAlign: 'center',
    color: '#282c34',
  },
  features: {
    padding: theme.spacing(3),
  },
  feature: {
    textAlign: 'center',
    margin: theme.spacing(2),
    border: '1px solid #e0e0e0',
    borderRadius: theme.spacing(1),
    padding: theme.spacing(2),
    transition: 'background-color 0.3s ease',
    '&:hover': {
      backgroundColor: '#f5f5f5',
    },
    backdropFilter: 'blur(5px)',
    background: 'rgba(255, 255, 255, 0.8)',
  },
  featureIcon: {
    width: 80,
    height: 80,
    marginBottom: theme.spacing(2),
    color: theme.palette.primary.main,
  },
  cta: {
    padding: theme.spacing(6, 3),
    textAlign: 'center',
  },
  ctaButton: {
    color: '#fff',
  },
  footer: {
    backgroundColor: '#282c34',
    color: '#fff',
    padding: theme.spacing(2),
    fontSize: 14,
  },
  headerButton: {
    marginLeft: theme.spacing(1),
    color: '#fff',
    borderColor: '#fff',
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
    },
  },
}));

const HomePage: React.FC = () => {
  const classes = useStyles();

  const [openLogin, setOpenLogin] = useState(false);
  const [openRegister, setOpenRegister] = useState(false);

  const [loginForm, setLoginForm] = useState({email: "", password: ""});
  const [registerForm, setRegisterForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    address: {
      street: "",
      city: "",
      postcode: "",
      state: "",
      country: "",
    },
    language: [],
  });

  const handleLoginFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginForm({
      ...loginForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegisterFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    
    // Check if the field is inside the address object
    if (['street', 'city', 'postcode', 'state', 'country'].includes(name)) {
      setRegisterForm(prevState => ({
        ...prevState,
        address: {
          ...prevState.address,
          [name]: value,
        },
      }));
    } else {
      setRegisterForm(prevState => ({
        ...prevState,
        [name]: value,
      }));
    }
  };  

  const handleOpenLogin = () => setOpenLogin(true);
  const handleCloseLogin = () => setOpenLogin(false);

  const handleOpenRegister = () => setOpenRegister(true);
  const handleCloseRegister = () => setOpenRegister(false);

  const handleLoginSubmit = async () => {
    const response = await fetch("/api/v1/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginForm),
    });
    const data = await response.json();
    console.log(data);
    setOpenLogin(false);
  };

  const handleRegisterSubmit = async () => {
    const response = await fetch("/api/v1/user/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(registerForm),
    });
    const data = await response.json();
    console.log(data);
    setOpenRegister(false);
  };

  return (
    <div className={classes.root}>
      <header className={classes.header}>
        <Container maxWidth="lg">
          <Grid container alignItems="center" justifyContent="space-between">
            <Grid item xs>
              <Typography variant="h4" align="left" color="inherit" component="h1">
                Welcome to DocMatch
              </Typography>
            </Grid>
            <Grid item>
              <Button variant="outlined" className={classes.headerButton} onClick={handleOpenLogin}>Login</Button>
              <Button variant="outlined" className={classes.headerButton} onClick={handleOpenRegister}>Register</Button>
            </Grid>
          </Grid>
        </Container>
      </header>
      <main>
        <section className={classes.intro}>
          <Container maxWidth="sm">
            <Typography variant="h6" color="inherit" gutterBottom component="h2">
              User-friendly platform that helps immigrants/tourists find nearby hospitals and doctors
            </Typography>
            <Typography variant="body1" color="inherit" gutterBottom>
              Find healthcare providers based on your preferred language and area of specialization.
            </Typography>
          </Container>
        </section>
        <section className={classes.features}>
          <Container maxWidth="md">
            <Grid container spacing={3} justifyContent="center">
              <Grid item xs={12} sm={6} md={4}>
                <div className={classes.feature}>
                  <LocationOnIcon className={classes.featureIcon} />
                  <Typography variant="h6" color="primary" gutterBottom component="h3">
                    Find Nearby Hospitals/Doctors
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Easily locate hospitals and doctors in your area, based on your preferred language and specialization.
                  </Typography>
                </div>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <div className={classes.feature}>
                  <StarIcon className={classes.featureIcon} />
                  <Typography variant="h6" color="primary" gutterBottom component="h3">
                    Verified Ratings & Reviews
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Read authentic reviews and ratings from other users to make informed decisions.
                  </Typography>
                </div>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <div className={classes.feature}>
                  <EventAvailableIcon className={classes.featureIcon} />
                  <Typography variant="h6" color="primary" gutterBottom component="h3">
                    Easy Appointment Booking
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Book appointments directly through the platform and manage your healthcare schedule effortlessly.
                  </Typography>
                </div>
              </Grid>
            </Grid>
          </Container>
        </section>
        <section className={classes.cta}>
          <Container maxWidth="sm">
            <Typography variant="h6" color="inherit" gutterBottom component="h2">
              Start Your Healthcare Journey
            </Typography>
            <Button variant="contained" color="primary" className={classes.ctaButton}>
              Explore Providers
            </Button>
          </Container>
        </section>
      </main>
      <footer className={classes.footer}>
        <Container maxWidth="sm">
          <Typography variant="body2" align="center" color="inherit">
            &copy; {new Date().getFullYear()} DocMatch. All rights reserved.
          </Typography>
        </Container>
      </footer>
      {/* Login Dialog */}
      <Dialog open={openLogin} onClose={handleCloseLogin}>
        <DialogTitle>Login</DialogTitle>
        <DialogContent>
          <TextField autoFocus margin="dense" id="name" label="Username" type="text" name="email" onChange={handleLoginFormChange} fullWidth  />
          <TextField margin="dense" id="password" label="Password" type="password" name="password" onChange={handleLoginFormChange} fullWidth />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseLogin} color="primary">Cancel</Button>
          <Button onClick={handleLoginSubmit} color="primary">Submit</Button>
        </DialogActions>
      </Dialog>
      {/* Register Dialog */}
      <Dialog open={openRegister} onClose={handleCloseRegister}>
        <DialogTitle>Register</DialogTitle>
        <DialogContent>
          <TextField autoFocus margin="dense" id="firstName" label="First Name" type="text" name="firstName" onChange={handleRegisterFormChange} fullWidth />
          <TextField margin="dense" id="lastName" label="Last Name" type="text" name="lastName" onChange={handleRegisterFormChange} fullWidth />
          <TextField margin="dense" id="email" label="Email" type="email" name="email" onChange={handleRegisterFormChange} fullWidth />
          <TextField margin="dense" id="password" label="Password" type="password" name="password" onChange={handleRegisterFormChange} fullWidth />
          <TextField margin="dense" id="street" label="Street" type="text" name="street" onChange={handleRegisterFormChange} fullWidth />
          <TextField margin="dense" id="city" label="City" type="text" name="city" onChange={handleRegisterFormChange} fullWidth />
          <TextField margin="dense" id="postcode" label="Postcode" type="text" name="postcode" onChange={handleRegisterFormChange} fullWidth />
          <TextField margin="dense" id="state" label="State" type="text" name="state" onChange={handleRegisterFormChange} fullWidth />
          <TextField margin="dense" id="country" label="Country" type="text" name="country" onChange={handleRegisterFormChange} fullWidth />
          {/* Language field not added as it's not clear what type of input you'd like. If you'd like a select field or some other type of input, that will require a different type of component */}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseRegister} color="primary">Cancel</Button>
          <Button onClick={handleRegisterSubmit} color="primary">Submit</Button>
        </DialogActions>
      </Dialog>
    </div>
  );  
}

export default HomePage;
