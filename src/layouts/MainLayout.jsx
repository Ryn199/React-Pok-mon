import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import { ThemeProvider } from '../context/ThemeContext';

export default function MainLayout() {
  return (
    <>
    <ThemeProvider>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </ThemeProvider>


    </>
  );
}
