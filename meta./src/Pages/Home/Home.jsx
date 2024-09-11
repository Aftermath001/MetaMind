import React from 'react'
import './home.css'


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
        <div className="card-body">
          <h5 className="card-title">Personal and Business Websites</h5>
          <p className="card-text">Market your services through interactive websites to showcase your skillsz</p>
          <a href="#" className="card-link">Card link</a>
          <a href="#" className="card-link">Another link</a>
        </div>
      </div>

      
    </div>
    </div>
    
  )
}

export default Home