import React from 'react'
import './home.css'
import MainHeader from '../../components/MainHeader'
import Programs from '../../components/Programs'
import Testimonials from '../../components/Testimonials'
import Choice from '../../components/Choice'
import Steps from '../../components/Steps'

const Home = () => {
  return (
    <>
    <MainHeader />
    <Programs/>
    <Choice/>
    <Testimonials/>
    
    </>
  )
}

export default Home