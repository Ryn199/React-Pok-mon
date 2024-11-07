// LoginContext.js
import React, { createContext, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

const emailVerify = "admin@gmail.com";
const passwordVerify = "admin";

// Create the context
const LoginContext = createContext();

// Provider component
export const LoginProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false);
  const [email, setEmail] = useState(null); // Menyimpan email pengguna
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const login = ({ email, password }) => {
    // Ganti dengan logika validasi login yang sesungguhnya
    if (email === emailVerify && password === passwordVerify) {
      setIsLogin(true);
      setEmail(email); // Menyimpan email pengguna
      setError(null);
      navigate("/pokemon"); // Redirect setelah login sukses
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <LoginContext.Provider value={{ isLogin, email, error, login }}>
      {children}
    </LoginContext.Provider>
  );
};

// Custom hook untuk menggunakan login context
export const useLogin = () => useContext(LoginContext);
