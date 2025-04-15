import React from 'react'
import AppAppBar from './AppAppBar'
import Hero from './Hero'
import Features from './Features'
import Testimonials from './Testimonials'
import { Divider } from '@mui/material'
import Highlights from './Highlights'
import Pricing from './Pricing'
import FAQ from './FAQ'
import Footer from './Footer'

const HomePage = () => {
  return (
    <>
      <AppAppBar></AppAppBar>
      <Hero></Hero>
    <div>
      <Features></Features>
      <Divider> </Divider>
      <Testimonials> </ Testimonials>
      <Divider></Divider>
      <Highlights></Highlights>
      <Divider></Divider>
      <Pricing></Pricing>
      <Divider></Divider>
      <FAQ></FAQ>
      <Divider></Divider>
      <Footer></Footer>
    </div>  
    </>
  )
}

export default HomePage