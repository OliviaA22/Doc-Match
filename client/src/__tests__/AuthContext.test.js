import { render, screen } from '@testing-library/react';
import { AuthProvider, AuthContext } from '../components/contexts/authContext';
import axios from 'axios';
import { act } from 'react-dom/test-utils';
import mockAxios from 'axios-mock-adapter';

var mock = new mockAxios(axios);

afterEach(() => {
  mock.reset();
});

test('AuthProvider provides correct user data', async () => {
  const fakeUser = { name: 'Test User' };

  mock.onGet('/api/verify').reply(200, { user: fakeUser });

  const TestComponent = () => {
    const { user } = React.useContext(AuthContext);
    return <div>{user ? user.name : 'No user'}</div>;
  };

  await act(async () => {
    render(
      <AuthProvider>
        <TestComponent />
      </AuthProvider>
    );
  });

  expect(screen.getByText('Test User')).toBeInTheDocument();
});

test('AuthProvider shows loading state', () => {
  const TestComponent = () => {
    const { user } = React.useContext(AuthContext);
    return <div>{user ? user.name : 'No user'}</div>;
  };

  render(
    <AuthProvider>
      <TestComponent />
    </AuthProvider>
  );

  expect(screen.getByText('Loading...')).toBeInTheDocument();
});
