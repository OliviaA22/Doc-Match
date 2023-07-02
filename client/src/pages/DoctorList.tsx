import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { IDoctor } from '../components/EditDoctor';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Card, CardContent, Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(6),
    background: '#cdebf9',
    minHeight: '100vh',
    margin: '50px',
    border: '1px solid #E0E6EF',
  },
  headingContainer: {
    marginBottom: theme.spacing(4),
    textAlign: 'center',
  },
  heading: {
    fontSize: '32px',
    color: '#394D6F',
    fontWeight: 'bold',
    marginBottom: theme.spacing(2),
  },
  subheading: {
    fontSize: '18px',
    color: '#637381',
  },
  cardContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: theme.spacing(4),
    marginBottom: theme.spacing(4),
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: theme.spacing(2),
    boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)',
    border: '1px solid #E0E6EF', // Added border style
    transition: 'box-shadow 0.3s ease',
  
    '&:hover': {
      boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.15)',
    },
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(4),
  },
  name: {
    fontWeight: 'bold',
    fontSize: '24px',
    color: '#394D6F',
    marginBottom: theme.spacing(2),
    textAlign: 'center',
  },
  editButton: {
    marginTop: theme.spacing(2),
    color: theme.palette.primary.main,
    backgroundColor: '#FFFFFF',
    border: '2px solid #394D6F',
    borderRadius: theme.spacing(2),
    fontWeight: 'bold',
    textTransform: 'none',
    transition: 'color 0.3s ease, background-color 0.3s ease',

    '&:hover': {
      backgroundColor: '#394D6F',
      color: '#FFFFFF',
    },
  },
  addButton: {
    marginTop: theme.spacing(4),
    width: '200px',
    backgroundColor: '#394D6F',
    color: '#FFFFFF',
    borderRadius: theme.spacing(2),
    fontWeight: 'bold',
    textTransform: 'none',
    transition: 'background-color 0.3s ease',

    '&:hover': {
      backgroundColor: '#284166',
    },
  },
  addButtonIcon: {
    marginRight: theme.spacing(1),
  },
}));

const DoctorList = () => {
  const classes = useStyles();
  const [doctors, setDoctors] = useState<IDoctor[]>([]);

  useEffect(() => {
    axios
      .get('http://localhost:3000/doctors')
      .then(response => {
        setDoctors(response.data);
      })
      .catch(error => {
        console.error(`There was an error retrieving the doctors: ${error}`);
      });
  }, []);

  return (
    <div className={classes.root}>
      <div className={classes.headingContainer}>
        <Typography variant="h2" component="h1" className={classes.heading}>
          All Doctors
        </Typography>
        <Typography variant="subtitle1" className={classes.subheading}>
          Explore and manage all the doctors in the system
        </Typography>
      </div>
      <div className={classes.cardContainer}>
        {doctors.map(doctor => (
          <Card key={doctor._id} className={classes.card}>
            <CardContent className={classes.cardContent}>
              <Typography variant="h3" component="h2" className={classes.name}>
                {doctor.firstName} {doctor.lastName}
              </Typography>
              <Button
                component={Link}
                to={`/edit/${doctor._id}`}
                variant="outlined"
                className={classes.editButton}
              >
                Edit
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
      <Button
        component={Link}
        to="/new"
        variant="contained"
        color="primary"
        className={classes.addButton}
      >
        <AddIcon className={classes.addButtonIcon} />
        Add New Doctor
      </Button>
    </div>
  );
};

export default DoctorList;
