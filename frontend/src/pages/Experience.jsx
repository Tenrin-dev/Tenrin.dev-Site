import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Education from '../components/Education'
import Work from '../components/Work'
import MobileNavbar from '../components/MobileNavbar'

const Experience = () => {
  return (
   <>
    <Navbar/>
    <MobileNavbar/>
    <Education/>
    <Work/>
    <Footer/>
   </>
  )
}

export default Experience