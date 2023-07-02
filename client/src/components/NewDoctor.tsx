import React, { useState } from 'react';
import axios from 'axios';
import {
  TextField,
  Button,
  Grid,
  InputLabel,
  Select,
  MenuItem,
  FormControl,
  Card,
  CardContent,
  Typography,
} from '@material-ui/core';
import docImage from '../assets/doc.jpg';
import { makeStyles } from '@material-ui/core/styles';

type IDoctor = {
  _id?: string;
  title: string;
  firstName: string;
  lastName: string;
  address: {
    street: string;
    city: string;
    postcode: number;
    state: string;
    country: string;
  };
  language: string[];
  specialisation: string[];
};

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    padding: theme.spacing(5),
    backgroundImage: `url(${docImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    color: '#444',
  },
  card: {
    maxWidth: 800,  // Increase the max width for a more professional feel
    padding: theme.spacing(5),  // Add padding inside the card
    margin: '0 auto',
    borderRadius: '15px', // Smooth the card edges
    backgroundColor: '#f5f5f5', // Change card color to light grey
    boxShadow: '0 2px 10px 0 rgba(0,0,0,0.16)', // Add shadow to the card for 3D effect
  },
  formControl: {
    minWidth: '100%',
    marginBottom: theme.spacing(2), // Add spacing between form fields
  },
  button: {
    marginTop: theme.spacing(2),
    backgroundColor: '#3f51b5', // Change button color to deep purple
    color: '#fff', // Change button text color to white
    '&:hover': {
      backgroundColor: '#303f9f', // Darken button when hovered over
    },
  },
  formTitle: {
    marginBottom: theme.spacing(4), // Add bottom margin to form title
  },
}));

const NewDoctor = () => {
  const classes = useStyles();

  const languages = ["English", "Spanish", "French", "German", "Chinese"];
  const specialisations = ["Cardiology", "Dermatology", "Neurology", "Pediatrics", "Radiology"];

  const [doctor, setDoctor] = useState<IDoctor>({
    title: "",
    firstName: "",
    lastName: "",
    address: {
      street: "",
      city: "",
      postcode: 0,
      state: "",
      country: ""
    },
    language: [],
    specialisation: []
  });

  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    axios.post('http://localhost:3000/doctors', doctor)
    .then(() => {
      alert('New doctor added successfully.');
    })
    .catch(error => {
      console.error(`There was an error creating the ${doctor.firstName} ${doctor.lastName}: ${error}`);
    });
  
  };

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>, type: string) => {
    if (type === "language") {
      setDoctor({ ...doctor, language: event.target.value as string[] });
    } else if (type === "specialisation") {
      setDoctor({ ...doctor, specialisation: event.target.value as string[] });
    }
  };

  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <CardContent>
          <Typography variant="h5" component="h2" gutterBottom className={classes.formTitle}>
            Add New Doctor
          </Typography>
          <form onSubmit={handleFormSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField label="Title" value={doctor.title} onChange={(e) => setDoctor({ ...doctor, title: e.target.value })} fullWidth required />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField label="First Name" value={doctor.firstName} onChange={(e) => setDoctor({ ...doctor, firstName: e.target.value })} fullWidth required />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField label="Last Name" value={doctor.lastName} onChange={(e) => setDoctor({ ...doctor, lastName: e.target.value })} fullWidth required />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth className={classes.formControl}>
                  <InputLabel>Language</InputLabel>
                  <Select
                    multiple
                    value={doctor.language}
                    onChange={(e) => handleChange(e, 'language')}
                  >
                    {languages.map((language) => (
                      <MenuItem key={language} value={language}>
                        {language}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <TextField label="Street" value={doctor.address.street} onChange={(e) => setDoctor({ ...doctor, address: { ...doctor.address, street: e.target.value } })} fullWidth required />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField label="City" value={doctor.address.city} onChange={(e) => setDoctor({ ...doctor, address: { ...doctor.address, city: e.target.value } })} fullWidth required />
              </Grid>
              <Grid item xs={12} sm={3}>
                <TextField label="State" value={doctor.address.state} onChange={(e) => setDoctor({ ...doctor, address: { ...doctor.address, state: e.target.value } })} fullWidth required />
              </Grid>
              <Grid item xs={12} sm={3}>
                <TextField label="Postcode" value={doctor.address.postcode} onChange={(e) => setDoctor({ ...doctor, address: { ...doctor.address, postcode: parseInt(e.target.value) } })} fullWidth required />
              </Grid>
              <Grid item xs={12}>
                <TextField label="Country" value={doctor.address.country} onChange={(e) => setDoctor({ ...doctor, address: { ...doctor.address, country: e.target.value } })} fullWidth required />
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth className={classes.formControl}>
                  <InputLabel>Specialisation</InputLabel>
                  <Select
                    multiple
                    value={doctor.specialisation}
                    onChange={(e) => handleChange(e, 'specialisation')}
                  >
                    {specialisations.map((specialisation) => (
                      <MenuItem key={specialisation} value={specialisation}>
                        {specialisation}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <Button type="submit" variant="contained" className={classes.button} fullWidth>
                Add Doctor
              </Button>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default NewDoctor;
