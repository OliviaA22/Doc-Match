import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import mockAxios from 'axios-mock-adapter';
import axios from 'axios';
import Content from '../components/sections/doctor-grid/Content';

var mock = new mockAxios(axios);

afterEach(() => {
  mock.reset();
});

const mockData = [
  {
    title: 'Dr',
    firstName: 'John',
    lastName: 'Doe',
    specialisation: ['Cardiology'],
    address: {
      street: '123 Main St',
      city: 'Anytown',
      postcode: '12345',
      state: 'CA',
      country: 'USA',
    },
    language: ['English', 'Spanish'],
  },
];

test('renders content with data from API', async () => {
  mock.onGet('https://tame-jersey-clam.cyclic.app/api/v1/doctor').reply(200, mockData);

  render(<Content />);

  const nameElement = await screen.findByText('Dr John Doe');
  const specElement = await screen.findByText('Cardiology');
  const addrElement = await screen.findByText('123 Main St, Anytown, 12345, CA, USA');
  const langElement = await screen.findByText('Languages: English, Spanish');

  expect(nameElement).toBeInTheDocument();
  expect(specElement).toBeInTheDocument();
  expect(addrElement).toBeInTheDocument();
  expect(langElement).toBeInTheDocument();
});

test('handles error from API', async () => {
  mock.onGet('https://tame-jersey-clam.cyclic.app/api/v1/doctor').reply(500);

  render(<Content />);

  const errorElement = await screen.findByText(/An error occurred:/i);

  expect(errorElement).toBeInTheDocument();
});

test('handles pagination correctly', async () => {
  mock.onGet('https://tame-jersey-clam.cyclic.app/api/v1/doctor').reply(200, mockData);

  render(<Content />);

  const firstPageElement = await screen.findByText('Dr John Doe');

  userEvent.click(screen.getByText(/next page/i));

  await waitFor(() => expect(screen.queryByText('Dr John Doe')).not.toBeInTheDocument());
  expect(firstPageElement).not.toBeInTheDocument();

});
