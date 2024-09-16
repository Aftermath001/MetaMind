import React from 'react'
import '../Pages/Home/home.css'
import { Link } from 'react-router-dom'
import backgroundImage from '../images/cup-of-coffee-1280537.jpg';



const MainHeader = () => {
  return (
    <header className='main_header' style={{
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      
    }}>
      <div className="main_header-container">
        <div className="main_header_left">
          <h4>No.1 Consulting Company</h4>
          <h1>METAMIND LIMITED</h1>
          <p>
          Over the years, we have grown from a small startup into a renowned consultancy firm, 
          helping businesses across various industries navigate complex challenges and achieve sustainable growth. 
          Our journey began with a commitment to delivering personalized and impactful solutions, and this philosophy continues to drive us today.
          </p>
          <Link to="/contact" className='btn 1g'>GET QUOTE</Link>
        </div>
        <div className="main_header_right">
          <div className="main_header_image">
           


          </div>
        </div>
      </div>

    </header>
  )
}

export default MainHeader