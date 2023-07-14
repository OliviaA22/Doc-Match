import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const verifyUser = async () => {
      try {
        const token = localStorage.getItem('token');
        if (token) {
          const res = await axios.get('/api/verify', { headers: { 'Authorization': `Bearer ${token}` } });
          setUser(res.data.user);
        }
      } catch (err) {
        console.error(err);
        localStorage.removeItem('token');
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    verifyUser();
  }, []);

  const logout = () => {
    setUser(null);
    localStorage.removeItem('token');
  };

  const value = { user, setUser, logout };

  return loading ? <div>Loading...</div> : <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
