import React from 'react'
import Header from './Header'
import Hero from './Hero'
import Contact from '../components/contact/Contact'
import Footer from '../components/Footer'
import Services from './Services'
import Do from './Do'

const MainPage = () => {
  return (
    <>
      {/* <main className="w-full flex flex-col relative"> */}
        <Header />
        <Hero />
        <Services />
        <Do />
        <Contact /> 
        <Footer />

      {/* </main> */}
    </>
  )
}

export default MainPage
