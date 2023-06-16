import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerUser, loginUser } from '../api/user';

type UserCredentials = {
  email: string;
  password: string;
};

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async () => {
    const userData: UserCredentials = { email, password };
    try {
      const user = await registerUser(userData);
      console.log(user);
      navigate('/profile');
    } catch (error: any) { // here
      console.log(error);
      if (error.message === "User already exists") {
        navigate('/login');
      }
    }
  };
  
  const handleLogin = async () => {
    const loginData: UserCredentials = { email, password };
    try {
      const user = await loginUser(loginData);
      console.log(user);
      navigate('/profile');
    } catch (error: any) { // and here
      console.log(error);
      if (error.message === "Invalid credentials") {
        navigate('/register');
      }
    }
  };  

  return (
    <div>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleRegister}>Register</button>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginPage;
