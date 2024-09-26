import React from 'react'
import './home.css'
import MainHeader from '../../components/MainHeader'
import Programs from '../../components/Programs'
import Testimonials from '../../components/Testimonials'
import Choice from '../../components/Choice'
import Packages from '../../components/Packages'
import Counter from '../../components/Counter'

const Home = () => {
  return (
    <>
    <MainHeader />
    <Programs/>
    <Choice/>
    <Packages/>
    <Counter />
    <Testimonials/>
    
    </>
  )
}

export default Home