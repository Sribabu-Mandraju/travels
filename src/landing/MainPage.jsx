import React from 'react'
import Header from './Header'
import Hero from './Hero'
import Contact from '../components/contact/Contact'
import Footer from './Footer'
import Services from './Services'
import Do from './Do'

const MainPage = () => {
  return (
    <>
        <Header />
        <Hero />
        <Services />
        <Do />
        <Contact /> 
        <Footer />
    </>
  )
}

export default MainPage
