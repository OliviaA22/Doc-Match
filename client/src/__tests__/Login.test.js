import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import Login from '../components/layouts/Login';
import { AuthContext } from '../components/contexts/authContext';
import axios from 'axios';
import { MemoryRouter, Route } from 'react-router-dom';

jest.mock('axios');

describe('Login', () => {
  const setUser = jest.fn();
  const token = 'fake_token';
  const user = { email: 'test@example.com' };

  axios.post.mockResolvedValue({ data: { token, user } });

  const renderComponent = () =>
    render(
      <MemoryRouter initialEntries={['/login']}>
        <Route path="/login">
          <AuthContext.Provider value={{ setUser }}>
            <Login />
          </AuthContext.Provider>
        </Route>
      </MemoryRouter>
    );

  it('renders correctly', () => {
    const { getByPlaceholderText } = renderComponent();

    expect(getByPlaceholderText('Email')).toBeInTheDocument();
    expect(getByPlaceholderText('Password')).toBeInTheDocument();
  });

  it('handles form submission', async () => {
    const { getByPlaceholderText, getByText } = renderComponent();

    fireEvent.change(getByPlaceholderText('Email'), {
      target: { value: 'test@example.com' },
    });

    fireEvent.change(getByPlaceholderText('Password'), {
      target: { value: 'password' },
    });

    fireEvent.click(getByText('Login'));

    await waitFor(() => {
      expect(axios.post).toHaveBeenCalledWith('https://tame-jersey-clam.cyclic.app/api/v1/user/login', {
        email: 'test@example.com',
        password: 'password',
      });
      expect(setUser).toHaveBeenCalledWith(user);
    });
  });
});
