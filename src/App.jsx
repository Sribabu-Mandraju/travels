import React from 'react'
import './App.css'
import './index.css'
import { Routes, Route } from "react-router-dom";
import Footer from './components/Footer';
import Home from './pages/Home';
import Contact from './components/contact/Contact';
import Phone from './components/auth/Phone';
import Login from './components/auth/Login';
import Header from './landing/Header';
import Button from './components/share/Button';
const App = () => {
  return (
    <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/button" element={<Button />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/phone" element={<Phone />} />
          <Route path="/login" element={<Login />} />
          <Route path="/header" element={<Header />} />
        </Routes>
    </>
  )
}

export default App
