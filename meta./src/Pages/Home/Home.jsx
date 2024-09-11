import React from 'react'
import './home.css'
import Pic1 from '../../Layout/partials/images/portfolio3.png'

const Home = () => {
  return (
    <div className="main">
      <div className='home-upper'>
        <div className="home-left">
          <h2>Unlocking power of Intelligence in Technology</h2>
          <p>At Metamind, we transform businesses through innovative 
            and customized consulting solutions. Unlike traditional consultancy 
            firms, we integrate cutting-edge technology, industry expertise, 
            and a client-centric approach to deliver measurable and 
            sustainable results.
          </p>
          <div className="buttons">
            <button className='btn-home'>Read More</button>
            <button className='btn-home'>Contact Us</button>
          </div>
        </div>
      
    </div>
    <div className="home-middle">
      <div className="home-middle-right"> 
        <h2>Our unique selling points include:</h2>
       
       <ul>
       <li>Innovative Solutions: We leverage the latest technologies 
          and methodologies to offer 
          forward-thinking strategies that keep you ahead of the competition.
        </li>
        <li>Tailored Approach: Every business is unique, and so are our solutions. 
          We provide bespoke consulting services that address your specific 
          challenges and goals.
        </li>
        <li>Expert Team: Our team comprises seasoned professionals with extensive 
          experience across various industries, ensuring expert guidance and insights.
        </li>
        <li>Results-Driven: We focus on delivering tangible results, tracking progress, 
          and ensuring that our solutions have a lasting impact on your business.

        </li>
        <li>Client-Centric: Your success is our priority. We work closely with you, 
          maintaining open communication and adapting to your evolving needs.

        </li>
       </ul>
      </div> 

      <div className="home-middle-left">
        <h2>Why Choose MetaMind?</h2>
        <p>Metamind is your trusted partner in achieving exceptional growth and 
          efficiency through smart, personalized consulting services. 
          Let us help you transform your business and achieve your full potential.
        </p>
      </div>
      

    </div>
  
    <div className="home-lower">
      <div className="card">
        <img className="card-img-top" src={Pic1} alt="Card image cap"/>
        <div className="card-body">
          <h5 className="card-title">Business and Personal Websites</h5>
          <p className="card-text">Market your business and personal skills by showcasing your portfolio websites</p>
        </div>
        <div className="card-body">
          <a href="https://adams-alvin-portfolio-website-28ly.vercel.app/" className="card-link">See More</a>
        </div>
      </div>

      <div className="card">
        <img className="card-img-top" src={Pic1} alt="Card image cap"/>
        <div className="card-body">
          <h5 className="card-title">Business and Personal Websites</h5>
          <p className="card-text">Market your business and personal skills by showcasing your portfolio websites</p>
        </div>
        <div className="card-body">
          <a href="https://adams-alvin-portfolio-website-28ly.vercel.app/" className="card-link">See More</a>
        </div>
      </div>

      <div className="card">
        <img className="card-img-top" src={Pic1} alt="Card image cap"/>
        <div className="card-body">
          <h5 className="card-title">Business and Personal Websites</h5>
          <p className="card-text">Market your business and personal skills by showcasing your portfolio websites</p>
        </div>
        <div className="card-body">
          <a href="https://adams-alvin-portfolio-website-28ly.vercel.app/" className="card-link">See More</a>
        </div>
      </div>

      
    </div>
    </div>
    
  )
}

export default Home