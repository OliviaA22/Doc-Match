import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import {
  Container,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
  Button,
  Box,
  TextField,
} from '@material-ui/core';

interface IAddress {
  street: string;
  city: string;
  postcode: number;
  state: string;
  country: string;
  location: {
    type: string;
    coordinates: number[];
  }
}

interface IDoctor {
  _id: string;
  title: string;
  firstName: string;
  lastName: string;
  address: IAddress;
  language: string[];
  specialisation: string[];
  createdAt?: Date;
}

const useStyles = makeStyles((theme) => ({
  textField: {
    marginBottom: theme.spacing(3),
  },
  button: {
    marginTop: theme.spacing(3),
  },
}));

const AppointmentBooking: React.FC = () => {
  const classes = useStyles();
  const [availableTimeSlots, setAvailableTimeSlots] = useState<string[]>([]);
  const [doctors, setDoctors] = useState<IDoctor[]>([]); 
  const [selectedDoctor, setSelectedDoctor] = useState<string>(''); 
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string>('');
  const [patientName, setPatientName] = useState<string>('');
  const [issueDescription, setIssueDescription] = useState<string>('');
  const [formError, setFormError] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetchDoctors();
  }, []);

  const fetchDoctors = async () => {
    try {
      const response = await fetch(`/api/doctors`);
      const data = await response.json();
      setDoctors(data.doctors);
    } catch (error) {
      console.error('Error fetching doctors:', error);
    }
  };

  const handleDoctorChange = (event: ChangeEvent<{ value: unknown }>) => {
    const doctorId = event.target.value as string;
    setSelectedDoctor(doctorId);
    fetchAvailableTimeSlots(doctorId);
  };

  const fetchAvailableTimeSlots = async (doctorId: string) => {
    try {
      const response = await fetch(`/api/doctors/${doctorId}/time-slots`);
      const data = await response.json();
      setAvailableTimeSlots(data.timeSlots);
    } catch (error) {
      console.error('Error fetching available time slots:', error);
    }
  };

  const handleTimeSlotChange = (event: ChangeEvent<{ value: unknown }>) => {
    setSelectedTimeSlot(event.target.value as string);
  };

  const handleNameChange = (event: ChangeEvent<{ value: unknown }>) => {
    setPatientName(event.target.value as string);
  };

  const handleIssueChange = (event: ChangeEvent<{ value: unknown }>) => {
    setIssueDescription(event.target.value as string);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!selectedDoctor || !selectedTimeSlot || !patientName || !issueDescription) {
      setFormError(true);
      return;
    }

    try {
      const response = await fetch(`/api/doctors/${selectedDoctor}/book-appointment`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          timeSlot: selectedTimeSlot, 
          patientName: patientName,
          issueDescription: issueDescription
        }),
      });

      if (response.ok) {
        navigate("/confirmation");
      } else {
        console.error('Error booking appointment:', response);
      }
    } catch (error) {
      console.error('Error booking appointment:', error);
    }
  };

  return (
    <Container maxWidth="md">
      <Typography variant="h4" align="center" gutterBottom>
        Book Your Appointment
      </Typography>
      <Typography variant="subtitle1" align="center" color="textSecondary" gutterBottom>
        Please provide your details and select a time slot for your appointment.
      </Typography>
      <Box component="form" onSubmit={handleSubmit}>
        <FormControl
          required
          fullWidth
          variant="filled"
          error={formError && !selectedDoctor}
        >
          <InputLabel id="select-doctor-label">Select a doctor</InputLabel>
          <Select
            labelId="select-doctor-label"
            id="select-doctor"
            value={selectedDoctor}
            onChange={handleDoctorChange}
          >
            {doctors.map((doctor) => (
              <MenuItem key={doctor._id} value={doctor._id}>
                {doctor.title} {doctor.firstName} {doctor.lastName}
              </MenuItem>
            ))}
          </Select>
          {formError && !selectedDoctor && (
            <FormHelperText>Please select a doctor</FormHelperText>
          )}
        </FormControl>
        <TextField
          required
          id="patient-name"
          label="Full Name"
          fullWidth
          variant="filled"
          value={patientName}
          onChange={handleNameChange}
          className={classes.textField}
        />
        <TextField
          required
          id="issue-description"
          label="Describe your issue"
          fullWidth
          variant="filled"
          multiline
          rows={4}
          value={issueDescription}
          onChange={handleIssueChange}
          className={classes.textField}
        />
        <FormControl
          required
          fullWidth
          variant="filled"
          error={formError && !selectedTimeSlot}
        >
          <InputLabel id="select-timeSlot-label">Select a time slot</InputLabel>
          <Select
            labelId="select-timeSlot-label"
            id="select-timeSlot"
            value={selectedTimeSlot}
            onChange={handleTimeSlotChange}
          >
            {availableTimeSlots.map((timeSlot) => (
              <MenuItem key={timeSlot} value={timeSlot}>
                {timeSlot}
              </MenuItem>
            ))}
          </Select>
          {formError && !selectedTimeSlot && (
            <FormHelperText>Please select a time slot</FormHelperText>
          )}
        </FormControl>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          className={classes.button}
        >
          Book Appointment
        </Button>
      </Box>
    </Container>
  );
};

export default AppointmentBooking;