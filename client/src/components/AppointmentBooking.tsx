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

interface AppointmentBookingProps {
  doctorId: string;
}

const useStyles = makeStyles((theme) => ({
  textField: {
    marginBottom: theme.spacing(3),
  },
  button: {
    marginTop: theme.spacing(3),
  },
}));

const AppointmentBooking: React.FC<AppointmentBookingProps> = ({ doctorId }) => {
  const classes = useStyles();
  const [availableTimeSlots, setAvailableTimeSlots] = useState<string[]>([]);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string>('');
  const [patientName, setPatientName] = useState<string>('');
  const [issueDescription, setIssueDescription] = useState<string>('');
  const [formError, setFormError] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAvailableTimeSlots = async () => {
      try {
        const response = await fetch(`/api/doctors/${doctorId}/time-slots`);
        const data = await response.json();
        setAvailableTimeSlots(data.timeSlots);
      } catch (error) {
        console.error('Error fetching available time slots:', error);
      }
    };

    fetchAvailableTimeSlots();
  }, [doctorId]);

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

    if (!selectedTimeSlot || !patientName || !issueDescription) {
      setFormError(true);
      return;
    }

    try {
      const response = await fetch(`/api/doctors/${doctorId}/book-appointment`, {
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
        // Show an error message to the user
      }
    } catch (error) {
      console.error('Error booking appointment:', error);
      // Show an error message to the user
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
