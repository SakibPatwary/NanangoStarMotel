import React, { useEffect } from 'react'
import Navbar from './Navbar'
import Map from './Map'
import Features from './Features'
import Gallery from './Gallery'
import Services from './Services'
import Place from './Place'
import Feedback from './Feedback'

const Home = () => {
  return (
    <>

      <Navbar />
      <Features />
      <Place />
      <Gallery />
      <Feedback />
      <Map />
    </>
  )
}

export default Home