import React from 'react'
import './App.css'
import './index.css'
import { Routes, Route } from "react-router-dom";
import Footer from './landing/Footer';
import Home from './pages/Home';
import Contact from './components/contact/Contact';
import Phone from './components/auth/Phone';
import Login from './components/auth/Login';
import Header from './landing/Header';
import Button from './components/share/Button';
import Hero from './landing/Hero';
import MainPage from './landing/MainPage';
import SignUp from './components/auth/SignUp';
import Bento from './landing/Bento';
import BoxesCore from './components/ui/Test';
import { BackgroundBeamsWithCollision } from './components/ui/Test2';
import Earth from './components/ui/Earth';
import Stars from './components/ui/Stars';
import Grid from './game/Grid';
const App = () => {
  return (
    <>
        <Routes>
        <Route path="/" element={<Grid />} />
          {/* <Route path="/" element={<MainPage />} /> */}
          <Route path="/footer" element={<Footer />} />
          <Route path="/button" element={<Button />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/phone" element={<Phone />} />
          <Route path="/login" element={<Login />} />
          <Route path="/header" element={<Header />} />
          <Route path="/hero" element={<Hero />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/bento" element={<Bento />} />
          <Route path="/box" element={<BoxesCore />} />
          <Route path="/earth" element={<Earth />} />
          <Route path="/stars" element={<Stars />} />
          <Route path="/box2" element={<BackgroundBeamsWithCollision />} />
        </Routes>
    </>
  )
}

export default App
