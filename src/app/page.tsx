import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Service from './components/Service'
import Testimonials from './components/Testimonials'
import Banner from './components/Banner1'
import Banner2 from './components/Banner2'
import Banner3 from './components/Banner3'
import Contact from './components/Contacts'

const page = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Service/>
      <Testimonials/>
      <Banner/>
      <Banner2/>
      <Banner3/>
      <Contact/>
    </div>
  )
}

export default page








