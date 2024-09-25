import React from 'react'
import '../Pages/Home/home.css'
import { Link } from 'react-router-dom'
import backgroundImage from '../images/pexels-junior-teixeira-1064069-2047905.jpg'



const MainHeader = () => {
  return (
    <header className='main_header' style={{
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      
    }}>
      <div className="main_header-container">
        <div className="main_header_left">
          <h1>METAMIND LIMITED</h1>
          <p>
          At Metamind, we are dedicated to helping businesses navigate complex challenges and achieve sustainable growth through personalized and impactful solutions.
          </p>
          <Link to="/contact" className='btn 1g'>GET QUOTE</Link>
        </div>
        
      </div>

    </header>
  )
}

export default MainHeader