import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Card, CardContent, Button } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(3),
  },
  header: {
    marginBottom: theme.spacing(2),
  },
  card: {
    width: '400px',
    marginBottom: theme.spacing(2),
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    borderRadius: theme.spacing(1),
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  name: {
    fontWeight: 'bold',
    marginBottom: theme.spacing(1),
  },
  editButton: {
    marginTop: theme.spacing(1),
    color: theme.palette.primary.main,
  },
  addButton: {
    marginTop: theme.spacing(2),
  },
}));

const DoctorList = () => {
  const classes = useStyles();
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/doctors')
      .then(response => {
        setDoctors(response.data);
      })
      .catch(error => {
        console.error(`There was an error retrieving the doctors: ${error}`);
      });
  }, []);

  return (
    <div className={classes.root}>
      <Typography variant="h4" component="h2" className={classes.header}>
        All Doctors
      </Typography>
      {doctors.map(doctor => (
        <Card key={doctor._id} className={classes.card}>
          <CardContent className={classes.cardContent}>
            <Typography variant="h5" component="h3" className={classes.name}>
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
      <Button
        component={Link}
        to="/new"
        variant="contained"
        color="primary"
        className={classes.addButton}
      >
        Add New Doctor
      </Button>
    </div>
  );
};

export default DoctorList;
