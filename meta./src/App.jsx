import { Routes, Route } from 'react-router-dom'
// import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Contact from './Pages/Contact/Contact'
import Services from './Pages/Services/Services'
const App = () => {
  return (
   <div>
      <Navbar/>
      <>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" exact element={<About/>} />
        <Route path="/contact" exact element={<Contact/>} />
        <Route path="/services" exact element={<Services />} />
        
       
      </Routes>
      </>
      <Footer/>

   </div>
     
  

      
  )
}

export default App