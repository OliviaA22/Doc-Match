import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Button, Container,
  Grid, Typography,
  Dialog, DialogTitle,
  DialogContent, TextField,
  DialogActions, Select,
  Menu, MenuItem,
  FormControl, InputLabel,
  ListItem, ListItemText, List,
  Box
} from '@material-ui/core';
import { Fade } from 'react-reveal';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { Link } from '@material-ui/core';
import StarIcon from '@material-ui/icons/Star';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import SearchIcon from '@material-ui/icons/Search';
import bgImage from '../assets/bg.jpg';
import BlogList from '../pages/BlogList';
import { useNavigate } from 'react-router-dom';
import { IconButton } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';
import MenuIcon from '@material-ui/icons/Menu';
import MyCalendar from '../components/MyCalendar';
import MyMap from '../components/MyMap';
import AppointmentBooking from '../components/AppointmentBooking';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import logo from '../assets/logo.jpg';
import aboutImage from '../assets/about.jpg';
import abtImage from '../assets/abt.png';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: `url(${bgImage})`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    padding: theme.spacing(3),
    height: '100%',
  },
  header: {
    background: 'radial-gradient(circle at center, white 0%, #001f3f 40%, #000000 60%)',
    padding: theme.spacing(3),
    color: 'black',
  },
  logo: {
    width: '100px',
    height: 'auto',
    [theme.breakpoints.up('sm')]: {
      maxWidth: '150px',
    },
  },
  intro: {
    padding: theme.spacing(6, 3),
    textAlign: 'center',
    color: 'black',
    background: 'linear-gradient(to bottom, #89CFF0, #CCCCCC)',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
    borderRadius: theme.spacing(1),
    marginTop: theme.spacing(3),
    position: 'relative',
    overflow: 'hidden',
  },
  introText: {
    fontWeight: 'bold',
    fontSize: '2rem',
    textTransform: 'uppercase',
    marginBottom: theme.spacing(2),
    color: 'black',
  },
  introDescription: {
    fontSize: '1.2rem',
    lineHeight: '1.5',
    color: 'black',
  },
  aboutImage: {
    width: '100%',
    height: 'auto',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
  },
  abtImage: {
    width: '20%',
    height: 'auto',
  },
  features: {
    padding: theme.spacing(3),
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: theme.spacing(3),
  },
  feature: {
    textAlign: 'center',
    margin: theme.spacing(2),
    border: '1px solid #e0e0e0',
    borderRadius: theme.spacing(1),
    padding: theme.spacing(2),
    transition: 'all 0.3s ease',
    '&:hover': {
      transform: 'scale(1.05)',
      backgroundColor: '#b3e5fc',
      color: '#fff',
    },
    backdropFilter: 'blur(5px)',
    background: 'rgba(255, 255, 255, 0.8)',
  },
  featureIcon: {
    width: 80,
    height: 80,
    marginBottom: theme.spacing(2),
    color: theme.palette.primary.main,
    transition: 'all 0.3s ease',
    '&:hover': {
      transform: 'rotate(360deg)',
    },
  },
  cta: {
    padding: theme.spacing(6, 3),
    textAlign: 'center',
    backgroundColor: '#abcdef',
    marginTop: theme.spacing(3),
  },
  ctaButton: {
    color: '#fff',
  },
  footer: {
    backgroundColor: '#282c34',
    color: '#fff',
    padding: theme.spacing(2),
    fontSize: 14,
    marginTop: theme.spacing(3),
  },
  headerButton: {
    marginLeft: theme.spacing(1),
    color: '#fff',
    borderColor: '#fff',
    padding: '6px 12px',
    fontSize: '0.75rem',
    [theme.breakpoints.up('sm')]: {
      padding: '8px 16px',
      fontSize: '0.875rem',
    },
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
    },
  },
  loginButton: {
    backgroundColor: '#4caf50',
    color: '#fff',
    padding: '6px 12px',
    fontSize: '0.75rem',
    [theme.breakpoints.up('sm')]: {
      padding: '8px 16px',
      fontSize: '0.875rem',
    },
    '&:hover': {
      backgroundColor: '#388e3c',
    },
  },
  registerButton: {
    backgroundColor: '#f50057',
    color: '#fff',
    '&:hover': {
      backgroundColor: '#c51162',
    },
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  formField: {
    width: '100%',
    marginBottom: theme.spacing(3),
  },
  labelNoDecoration: {
    textDecoration: 'none',
  },
  boldText: {
    fontWeight: 'bold',
  },
  largeFont: {
    fontSize: '1.6rem',
  },
  inputLabel: {
    color: 'white',
  },
  effect: {
    textDecoration: 'underline',
    transition: 'color 0.3s',
  },
  whiteIcon: {
    color: 'white',
  },  
  searchBar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '98%',
    padding: theme.spacing(2),
    color: '#ffffff',
    background: '#406E85',
    backdropFilter: 'blur(25px)',
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(4, 2),
    },
    marginTop: theme.spacing(3),
    borderRadius: theme.spacing(1),
  },
  searchSection: {
    background: 'rgba(255, 255, 255, 0.8)',
    borderRadius: theme.spacing(1),
    padding: theme.spacing(2),
    color: '#ffffff',
    backdropFilter: 'blur(5px)',
    maxWidth: 400,
    margin: '0 auto',
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(3),
    },
  },
  searchInputs: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      flexDirection: 'row',
      justifyContent: 'center',
    },
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 200,
    [theme.breakpoints.up('sm')]: {
      margin: theme.spacing(1, 2),
      minWidth: 220,
    },
  },
  searchButton: {
    margin: theme.spacing(1),
    minWidth: '100px',
    [theme.breakpoints.up('sm')]: {
      margin: theme.spacing(1, 2),
      minWidth: '120px',
    },
  },
  blueButton: {
    color: 'blue',
    borderColor: 'blue',
    '&:hover': {
      backgroundColor: 'rgba(0, 0, 255, 0.1)', 
    },
  },
  blog: {
    padding: theme.spacing(8, 0, 6),
    backgroundColor: theme.palette.background.paper,
  },
  sectionTitle: {
    marginBottom: theme.spacing(3),
    color: theme.palette.primary.main,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  blogContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  blogItem: {
    flex: '0 0 calc(33.333% - 1em)',
    margin: '0.5em',
    [theme.breakpoints.down('sm')]: {
      flex: '0 0 100%',
    },
  },
  socialIcons: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: theme.spacing(2),
  },
  iconButton: {
    color: 'blue',
    margin: theme.spacing(1),
    '&:hover': {
      transform: 'scale(1.2)',
      transition: 'transform 0.3s ease-in-out',
    },
    padding: '6px',
    [theme.breakpoints.up('sm')]: {
      padding: '8px',
    },
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
    minWidth: 120,
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
    borderRadius: 4,
    padding: '10px 26px 10px 12px',
  },
  appointmentsText: {
    fontSize: '0.75rem',
    marginTop: '-6px',
    color: 'white', // Update the color to white
    [theme.breakpoints.up('sm')]: {
      fontSize: '0.875rem',
      marginTop: '-8px',
    },
  },
  link: {
    fontSize: '0.75rem',
    margin: '0 5px',
    color: 'white', // Update the color to white
    [theme.breakpoints.up('sm')]: {
      fontSize: '0.875rem',
      margin: '0 10px',
    },
  },
  contactSection: {
    padding: theme.spacing(4),
    background: '#f0f0f0',
    marginTop: theme.spacing(3),
  },
  contactTitle: {
    marginBottom: theme.spacing(4),
    fontWeight: 'bold',
    textAlign: 'center',
  },
  submitButton: {
    marginTop: theme.spacing(3),
    width: '200px',
    alignSelf: 'center',
  },
  callImage: {
    width: '100%',
    height: 'auto',
    marginBottom: theme.spacing(2),
  },
}));

const HomePage: React.FC = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  const [openLogin, setOpenLogin] = useState(false);
  const [openRegister, setOpenRegister] = useState(false);
  const [selectedSpecialty, setSelectedSpecialty] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);
  const [openSpecialisationDialog, setOpenSpecialisationDialog] = useState(false);
  const [appointmentDialogOpen, setAppointmentDialogOpen] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  const openAppointmentDialog = () => {
    setAppointmentDialogOpen(true);
  };

  const closeAppointmentDialog = () => {
    setAppointmentDialogOpen(false);
  };

  const handleCloseSpecialisationDialog = () => {
    setOpenSpecialisationDialog(false);
  };
  const handleOpenSpecialisationDialog = () => {
    setOpenSpecialisationDialog(true);
  };

  const [loginForm, setLoginForm] = useState({ email: '', password: '', username: '' });
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
    if (isAdmin) {
      if(loginForm.username === 'admin' && loginForm.password === '1234') {
        navigate('/doctor');
      } else {
        alert(`Invalid username or password`);
      }
    } else {
      const response = await fetch('http://localhost:5000/api/v1/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginForm),
      });
      const data = await response.json();
      console.log(data);
      setOpenLogin(false);
    }
  };
  

  const handleRegisterSubmit = async () => {
    try {
      console.log("Submit button clicked");
      console.log("registerForm state: ", registerForm);
      
      const response = await fetch('http://localhost:5000/api/v1/user/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(registerForm),
      });
  
      if (!response.ok) {
        console.log("There was an error with the fetch request", response);
        return;
      }
      
      const data = await response.json();
      console.log("Response data from the server: ", data);
      
      setOpenRegister(false);
    } catch (err) {
      console.log("There was an error in handleRegisterSubmit: ", err);
    }
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
    navigate('/search');
  };

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [language, setLanguage] = useState('English');

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLanguageChange = (language: string) => {
    const fakeEvent = {
      target: {
        value: language,
      },
    } as React.ChangeEvent<{ value: unknown }>;
  
    setLanguage(fakeEvent.target.value as string);
  };  

  const handleContactUsSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle contact us form submission
  };

  const doctorId = 'doctor-id';

  return (
    <div className={classes.root}>
      <header className={classes.header}>
        <Container maxWidth="lg">
          <Grid container alignItems="center" justifyContent="space-between">
            <Grid item xs={8} sm={4}>
              <img src={logo} alt="Your Logo" className={classes.logo} />
            </Grid>
            <Grid item xs={4} sm={8}>
              <Box display="flex" flexDirection="row" alignItems="center" justifyContent="flex-end">
                <IconButton
                  aria-label="menu"
                  onClick={handleClick}
                  className={`${classes.iconButton} ${classes.whiteIcon}`}
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="simple-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleClose}>About</MenuItem>
                  <MenuItem onClick={handleClose}>Contact Us</MenuItem>
                  <MenuItem onClick={handleOpenSpecialisationDialog}>Specialisation</MenuItem>
                  <MenuItem onClick={handleClose}>Help & Support</MenuItem>
                  <MenuItem onClick={handleClose}>Health Blog/News</MenuItem>
                </Menu>
                <Box ml={2}>
                  <Link
                    component="button"
                    variant="body2"
                    onClick={() => handleLanguageChange('English')}
                    className={classes.link}
                  >
                    EN
                  </Link>
                  <Typography variant="body2" style={{ display: 'inline', margin: '0 5px' }}>
                    |
                  </Typography>
                  <Link
                    component="button"
                    variant="body2"
                    onClick={() => handleLanguageChange('German')}
                    className={classes.link}
                  >
                    DE
                  </Link>
                </Box>
                <Box ml={2}>
                  <Button
                    variant="contained"
                    className={`${classes.headerButton} ${classes.loginButton}`}
                    onClick={handleOpenLogin}
                  >
                    Login
                  </Button>
                  <Button
                    variant="contained"
                    className={`${classes.headerButton} ${classes.registerButton}`}
                    onClick={handleOpenRegister}
                  >
                    Register
                  </Button>
                </Box>
              </Box>
              <Typography variant="body2" color="textPrimary" align="right" className={classes.appointmentsText}>
                For Appointments
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </header>
      <main>
      <section className={classes.intro}>
  <Container maxWidth="md">
    <Grid container spacing={3} alignItems="center">
      <Grid item md={6} xs={12}>
        <Fade bottom>
          <img src={aboutImage} alt="About Us" className={classes.aboutImage} />
        </Fade>
      </Grid>
      <Grid item md={6} xs={12}>
        <Fade bottom>
          <Typography variant="h4" color="inherit" component="h2" className={classes.introText}>
            Welcome to Doc-Match
          </Typography>
        </Fade>
        <Fade bottom delay={300}>
          <Typography variant="body1" color="inherit" className={classes.introDescription}>
            We seek to develop an accessible app designed especially for immigrants, tourists, and the LGBTQ+ community individuals, which helps them find medical care that’s compatible with their needs when it comes to language barriers and discrimination. Facilitate access to healthcare services for immigrants/tourists through personalized and language-specific recommendations.
          </Typography>
        </Fade>
      </Grid>
      <Grid item md={6} xs={12}>
        <Fade bottom>
          <img src={abtImage} alt="About Us" className={classes.abtImage} />
        </Fade>
      </Grid>
    </Grid>
  </Container>
</section>

        <section className={classes.searchBar}>
          <Container maxWidth="md">
            <div className={classes.searchInputs}>
              <FormControl className={classes.formControl}>
                <InputLabel className={classes.inputLabel} htmlFor="specialty">Specialty</InputLabel>
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
                <TextField
                  id="location"
                  label="Location"
                  value={selectedLocation}
                  onChange={handleLocationChange}
                />
              </FormControl>
              <FormControl className={classes.formControl}>
                <InputLabel className={classes.inputLabel} htmlFor="language">Language</InputLabel>
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
                <div className={classes.feature} onClick={openAppointmentDialog}>
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
        <section className={classes.blog}>
          <Container maxWidth="lg">
            <Typography variant="h5" color="inherit" gutterBottom component="h2" className={classes.sectionTitle}>
              Latest Blogs
            </Typography>
            <BlogList />
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '16px' }}>
              <Button variant="outlined" color="primary" onClick={() => navigate('/blogs')}>
                View All Blogs
              </Button>
            </div>
          </Container>
        </section>
        <section className={classes.cta}>
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            <Grid item xs={12} sm={4}>
            <MyCalendar />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant="h6" color="inherit" gutterBottom component="h2">
                Start Your Healthcare Journey
              </Typography>
              <Button variant="contained" color="primary" className={classes.ctaButton}>
                Explore Providers
              </Button>
            </Grid>
            <Grid item xs={12} sm={4}>
            <MyMap />
            </Grid>
          </Grid>
        </Container>
      </section>
      <section className={classes.contactSection}>
        <Container maxWidth="lg">
          <Typography variant="h4" component="h2" className={classes.contactTitle}>
            Contact Us
          </Typography>
          <Grid container justifyContent="center">
            <Grid item xs={12} sm={8} md={6}>
              <form className={classes.form} onSubmit={handleContactUsSubmit}>
                <TextField
                  variant="outlined"
                  label="Name"
                  name="name"
                  className={classes.formField}
                />
                <TextField
                  variant="outlined"
                  label="Email"
                  name="email"
                  className={classes.formField}
                />
                <TextField
                  variant="outlined"
                  label="Message"
                  name="message"
                  multiline
                  rows={6}
                  className={classes.formField}
                />
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  className={classes.submitButton}
                >
                  Submit
                </Button>
                <div className={classes.socialIcons}>
                  <IconButton
                    href="http://facebook.com/yourProfile"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={classes.iconButton}
                    color="primary"
                  >
                    <FacebookIcon />
                  </IconButton>
                  <IconButton
                    href="http://twitter.com/yourProfile"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={classes.iconButton}
                    color="primary"
                  >
                    <TwitterIcon />
                  </IconButton>
                  <IconButton
                    href="http://instagram.com/yourProfile"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={classes.iconButton}
                    color="primary"
                  >
                    <InstagramIcon />
                  </IconButton>
                  <IconButton
                    href="http://github.com/yourProfile"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={classes.iconButton}
                    color="primary"
                  >
                    <GitHubIcon />
                  </IconButton>
                  <IconButton
                    href="mailto:yourEmail@example.com"
                    className={classes.iconButton}
                    color="primary"
                  >
                    <EmailIcon />
                  </IconButton>
                </div>
              </form>
            </Grid>
          </Grid>
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
    <TextField autoFocus margin="dense" id="name" label="Username" type="text" name="username" onChange={handleLoginFormChange} fullWidth />
    <TextField margin="dense" id="password" label="Password" type="password" name="password" onChange={handleLoginFormChange} fullWidth />
    <FormControlLabel
      control={
        <Checkbox checked={isAdmin} onChange={(event: React.ChangeEvent<HTMLInputElement>) => setIsAdmin(event.target.checked)} name="adminCheckbox" />
      }
      label="Log in as admin"
    />
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
              required
            />
            </Grid>
            <Grid item xs={6}>
            <TextField
              id="lastName"
              name="lastName"
              label="Last Name"
              onChange={handleRegisterFormChange}
              fullWidth
              required
            />
            </Grid>
            <Grid item xs={12}>
            <TextField
              id="email"
              name="email"
              label="Email"
              onChange={handleRegisterFormChange}
              fullWidth
              required
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
              required
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
              required
            />
            </Grid>
            <Grid item xs={6}>
            <TextField
              id="city"
              name="city"
              label="City"
              onChange={handleRegisterFormChange}
              fullWidth
              required
            />
            </Grid>
            <Grid item xs={6}>
            <TextField
              id="postcode"
              name="postcode"
              label="Postcode"
              onChange={handleRegisterFormChange}
              fullWidth
              required
            />
            </Grid>
            <Grid item xs={6}>
            <TextField
              id="state"
              name="state"
              label="State"
              onChange={handleRegisterFormChange}
              fullWidth
              required
            />
            </Grid>
            <Grid item xs={6}>
            <TextField
              id="country"
              name="country"
              label="Country"
              onChange={handleRegisterFormChange}
              fullWidth
              required
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
      <Dialog
      open={openSpecialisationDialog}
      onClose={handleCloseSpecialisationDialog}
      aria-labelledby="specialisation-dialog-title"
      aria-describedby="specialisation-dialog-description"
    >
      <DialogTitle id="specialisation-dialog-title">{"Medical Specialisations"}</DialogTitle>
      <DialogContent>
        <List>
          <ListItem>
            <ListItemText primary="Cardiology"/>
          </ListItem>
          <ListItem>
            <ListItemText primary="Dermatology"/>
          </ListItem>
          <ListItem>
            <ListItemText primary="Endocrinology"/>
          </ListItem>
          <ListItem>
            <ListItemText primary="Gastroenterology"/>
          </ListItem>
          <ListItem>
            <ListItemText primary="Hematology"/>
          </ListItem>
          <ListItem>
            <ListItemText primary="Infectious Disease"/>
          </ListItem>
          <ListItem>
            <ListItemText primary="Nephrology"/>
          </ListItem>
          <ListItem>
            <ListItemText primary="Oncology"/>
          </ListItem>
          <ListItem>
            <ListItemText primary="Pulmonology"/>
          </ListItem>
          <ListItem>
            <ListItemText primary="Rheumatology"/>
          </ListItem>
          <ListItem>
      <ListItemText primary="Neurology"/>
    </ListItem>
    <ListItem>
      <ListItemText primary="Orthopedics"/>
    </ListItem>
    <ListItem>
      <ListItemText primary="Ophthalmology"/>
    </ListItem>
    <ListItem>
      <ListItemText primary="Pediatrics"/>
    </ListItem>
    <ListItem>
      <ListItemText primary="Psychiatry"/>
    </ListItem>
    <ListItem>
      <ListItemText primary="Radiology"/>
    </ListItem>
    <ListItem>
      <ListItemText primary="Surgery"/>
    </ListItem>
    <ListItem>
      <ListItemText primary="Urology"/>
    </ListItem>
    <ListItem>
      <ListItemText primary="Obstetrics and Gynecology"/>
    </ListItem>
    <ListItem>
      <ListItemText primary="Pathology"/>
    </ListItem>
    <ListItem>
      <ListItemText primary="Physical Medicine and Rehabilitation"/>
    </ListItem>
    <ListItem>
      <ListItemText primary="Preventive Medicine"/>
    </ListItem>
    <ListItem>
      <ListItemText primary="Anesthesiology"/>
    </ListItem>
    <ListItem>
      <ListItemText primary="Allergy and Immunology"/>
    </ListItem>
    <ListItem>
      <ListItemText primary="Otolaryngology"/>
    </ListItem>
    <ListItem>
      <ListItemText primary="Pain Medicine"/>
    </ListItem>
    <ListItem>
      <ListItemText primary="Sports Medicine"/>
    </ListItem>
    <ListItem>
      <ListItemText primary="Geriatrics"/>
    </ListItem>
    <ListItem>
      <ListItemText primary="Nuclear Medicine"/>
    </ListItem>
    <ListItem>
      <ListItemText primary="Sleep Medicine"/>
    </ListItem>
        </List>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCloseSpecialisationDialog} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
    <Dialog open={appointmentDialogOpen} onClose={closeAppointmentDialog}>
        <DialogContent>
          <AppointmentBooking />
        </DialogContent>
      </Dialog>
    </div>
  );  
}

export default HomePage;