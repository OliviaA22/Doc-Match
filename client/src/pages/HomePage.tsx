import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Button,
  Container,
  Grid,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import StarIcon from '@material-ui/icons/Star';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import SearchIcon from '@material-ui/icons/Search';
import bgImage from '../assets/bg.jpg';

const useStyles = makeStyles((theme) => ({
  root: {
    background: `url(${bgImage}) center center/cover no-repeat`,
    padding: theme.spacing(3),
    height: '100%',
  }, 
  header: {
    backgroundColor: '#282c34',
    padding: theme.spacing(3),
    color: '#fff',
  },
  intro: {
    padding: theme.spacing(6, 3),
    textAlign: 'center',
    color: '#ffffff',
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
  formField: {
    marginBottom: theme.spacing(2),
  },
  labelNoDecoration: {
    textDecoration: 'none',
  },
  searchBar: {
    display: 'flex', // Make it a flex container
    flexDirection: 'column', // Align children in a column
    justifyContent: 'center', // Center children vertically
    alignItems: 'center', // Center children horizontally
    width: '90%', // Extend to the full width of the parent container
    padding: theme.spacing(4, 2),
    color: '#ffffff',
    background: 'rgba(255, 255, 255, 0.3)', // You can adjust the alpha value here.
    backdropFilter: 'blur(20px)', // You can adjust the blur value here.
  },
  searchSection: {
    background: 'rgba(255, 255, 255, 0.8)',
    borderRadius: theme.spacing(1),
    padding: theme.spacing(2),
    color: '#ffffff',
    backdropFilter: 'blur(5px)',
    maxWidth: 400,
    margin: '0 auto',
  },
  searchInputs: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: theme.spacing(2),
  },
  formControl: {
    marginRight: theme.spacing(2),
    minWidth: 200,
  },
  searchButton: {
    marginLeft: theme.spacing(2),
    minWidth: '100px',
  },
}));

const HomePage: React.FC = () => {
  const classes = useStyles();

  const [openLogin, setOpenLogin] = useState(false);
  const [openRegister, setOpenRegister] = useState(false);
  const [selectedSpecialty, setSelectedSpecialty] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);

  const [loginForm, setLoginForm] = useState({ email: '', password: '' });
  const [registerForm, setRegisterForm] = useState<{
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    address: {
      street: string;
      city: string;
      postcode: string;
      state: string;
      country: string;
    };
    language: string[];
  }>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    address: {
      street: '',
      city: '',
      postcode: '',
      state: '',
      country: '',
    },
    language: [],
  });

  const handleLoginFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginForm({
      ...loginForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegisterFormChange = (
    e: React.ChangeEvent<
      HTMLInputElement | { name?: string; value: unknown }
    >
  ) => {
    const { name, value } = e.target;

    if (name === 'language') {
      const selectedLanguages = Array.isArray(value)
        ? (value as string[])
        : [value as string];
      setRegisterForm((prevState) => ({
        ...prevState,
        language: selectedLanguages,
      }));
    } else if (['street', 'city', 'postcode', 'state', 'country'].includes(name as string)) {
      setRegisterForm((prevState) => ({
        ...prevState,
        address: {
          ...prevState.address,
          [name as string]: value,
        },
      }));
    } else {
      setRegisterForm((prevState) => ({
        ...prevState,
        [name as string]: value,
      }));
    }
  };

  const handleOpenLogin = () => setOpenLogin(true);
  const handleCloseLogin = () => setOpenLogin(false);

  const handleOpenRegister = () => setOpenRegister(true);
  const handleCloseRegister = () => setOpenRegister(false);

  const handleLoginSubmit = async () => {
    const response = await fetch('/api/v1/user/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(loginForm),
    });
    const data = await response.json();
    console.log(data);
    setOpenLogin(false);
  };

  const handleRegisterSubmit = async () => {
    const response = await fetch('/api/v1/user/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(registerForm),
    });
    const data = await response.json();
    console.log(data);
    setOpenRegister(false);
  };

  const handleSpecialtyChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setSelectedSpecialty(event.target.value as string);
  };
  
  const handleLocationChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedLocation(event.target.value);
  };
  
  const handleLanguagesChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setSelectedLanguages(event.target.value as string[]);
  };

  const handleSearch = () => {
    // Perform search based on selectedSpecialty, selectedLocation, and selectedLanguages
    // Update your search results accordingly
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
        <section className={classes.searchBar}>
          <Container maxWidth="md">
            <div className={classes.searchInputs}>
              <FormControl className={classes.formControl}>
                <InputLabel htmlFor="specialty">Specialty</InputLabel>
                <Select
                  id="specialty"
                  value={selectedSpecialty}
                  onChange={handleSpecialtyChange}
                >
                  <MenuItem value="Cardiology">Cardiology</MenuItem>
                  <MenuItem value="Dentistry">Dentistry</MenuItem>
                  <MenuItem value="Orthopedics">Orthopedics</MenuItem>
                  {/* Add more specialties as needed */}
                </Select>
              </FormControl>
              <FormControl className={classes.formControl}>
                <InputLabel htmlFor="location">Location</InputLabel>
                <TextField
                  id="location"
                  value={selectedLocation}
                  onChange={handleLocationChange}
                />
              </FormControl>
              <FormControl className={classes.formControl}>
                <InputLabel htmlFor="language">Language</InputLabel>
                <Select
                  id="language"
                  multiple
                  value={selectedLanguages}
                  onChange={handleLanguagesChange}
                >
                  <MenuItem value="English">English</MenuItem>
                  <MenuItem value="Spanish">Spanish</MenuItem>
                  <MenuItem value="French">French</MenuItem>
                  {/* Add more languages as needed */}
                </Select>
              </FormControl>
              <Button
                variant="contained"
                color="primary"
                className={classes.searchButton}
                startIcon={<SearchIcon />}
                onClick={handleSearch}
              >
                Search
              </Button>
            </div>
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
          <Button onClick={handleCloseLogin} color="primary" variant="outlined">
            Cancel
          </Button>
          <Button onClick={handleLoginSubmit} color="primary" variant="contained">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
      {/* Register Dialog */}
      <Dialog open={openRegister} onClose={handleCloseRegister}>
        <DialogTitle>Register</DialogTitle>
        <DialogContent>
          <Grid container spacing={2}>
            <Grid item xs={6}>
            <TextField
              id="firstName"
              name="firstName"
              label="First Name"
              onChange={handleRegisterFormChange}
              fullWidth
            />
            </Grid>
            <Grid item xs={6}>
            <TextField
              id="lastName"
              name="lastName"
              label="Last Name"
              onChange={handleRegisterFormChange}
              fullWidth
            />
            </Grid>
            <Grid item xs={12}>
            <TextField
              id="email"
              name="email"
              label="Email"
              onChange={handleRegisterFormChange}
              fullWidth
            />
          </Grid>
            <Grid item xs={12}>
            <TextField
              id="password"
              name="password"
              label="Password"
              type="password"
              onChange={handleRegisterFormChange}
              fullWidth
            />
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel htmlFor="language">Language</InputLabel>
                <Select
                  multiple
                  value={registerForm.language}
                  onChange={handleRegisterFormChange}
                  inputProps={{
                    name: 'language',
                    id: 'language',
                  }}
                >
                  <MenuItem value="English">English</MenuItem>
                  <MenuItem value="Spanish">Spanish</MenuItem>
                  <MenuItem value="French">French</MenuItem>
                  {/* Add more languages as needed */}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
            <TextField
              id="street"
              name="street"
              label="Street"
              onChange={handleRegisterFormChange}
              fullWidth
            />
            </Grid>
            <Grid item xs={6}>
            <TextField
              id="city"
              name="city"
              label="City"
              onChange={handleRegisterFormChange}
              fullWidth
            />
            </Grid>
            <Grid item xs={6}>
            <TextField
              id="postcode"
              name="postcode"
              label="Postcode"
              onChange={handleRegisterFormChange}
              fullWidth
            />
            </Grid>
            <Grid item xs={6}>
            <TextField
              id="state"
              name="state"
              label="State"
              onChange={handleRegisterFormChange}
              fullWidth
            />
            </Grid>
            <Grid item xs={6}>
            <TextField
              id="country"
              name="country"
              label="Country"
              onChange={handleRegisterFormChange}
              fullWidth
            />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseRegister} color="primary" variant="outlined">
            Cancel
          </Button>
          <Button onClick={handleRegisterSubmit} color="primary" variant="contained">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );  
}

export default HomePage;
