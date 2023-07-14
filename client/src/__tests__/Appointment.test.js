import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import { AuthContext } from '../components/contexts/authContext';
import axios from 'axios';
import Content from '../components/sections/appointment/Content';

jest.mock('axios');

test('renders form with inputs and submit button', () => {
  render(<Content />);
  
  expect(screen.getByLabelText('Doctor ID:')).toBeInTheDocument();
  expect(screen.getByLabelText('Patient Name:')).toBeInTheDocument();
  expect(screen.getByLabelText('Appointment Date:')).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /Submit/i })).toBeInTheDocument();
});

test('allows the user to fill the form and submit it', async () => {
  axios.post.mockResolvedValueOnce({
    status: 201,
    data: {},
  });

  render(
    <AuthContext.Provider value={{ isAuthenticated: true }}>
      <Content />
    </AuthContext.Provider>
  );

  fireEvent.change(screen.getByLabelText('Doctor ID:'), {
    target: { value: '123' },
  });
  fireEvent.change(screen.getByLabelText('Patient Name:'), {
    target: { value: 'John Doe' },
  });
  fireEvent.change(screen.getByLabelText('Appointment Date:'), {
    target: { value: '2023-10-20' },
  });

  fireEvent.click(screen.getByRole('button', { name: /Submit/i }));

  await waitFor(() => expect(axios.post).toHaveBeenCalledTimes(1));
  expect(axios.post).toHaveBeenCalledWith('https://tame-jersey-clam.cyclic.app/api/v1/appointment', {
    doctorId: '123',
    patientName: 'John Doe',
    appointmentDate: '2023-10-20',
  });
});

test('shows alert when user is not authenticated', () => {
  const mockAlert = jest.spyOn(window, 'alert').mockImplementation(() => {});

  render(
    <AuthContext.Provider value={{ isAuthenticated: false }}>
      <Content />
    </AuthContext.Provider>
  );

  fireEvent.click(screen.getByRole('button', { name: /Submit/i }));

  expect(mockAlert).toHaveBeenCalledWith('You need to be logged in to make an appointment.');

  mockAlert.mockRestore();
});
