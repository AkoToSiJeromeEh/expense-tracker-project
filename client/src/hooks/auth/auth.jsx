import React, { useState, createContext, useContext, useEffect, useMemo } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('accessToken'));
  const [username, setUsername] = useState(localStorage.getItem('username'));

  useEffect(() => {
    if (token) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
   
  
    } else {
      delete axios.defaults.headers.common['Authorization'];
      localStorage.removeItem('accessToken');
      localStorage.removeItem('username');
    }
  }, [token]);

  const login = (token, username) => {
    setToken(token);
    setUsername(username);
    localStorage.setItem('username', username);
    localStorage.setItem('accessToken', token);
  };

  const logout = () => {
    setToken(null);
    setUsername(null);
  };

  const contextValue = useMemo(
    () => ({
      username,
      token,
      login,
      logout,
    }),
    [token]
  );

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
