import React from 'react'
import Header from '../../components/Header'
import AboutPic from '../../images/pexels-fauxels-3184424.jpg'
import StoryImage from '../../images/story.png'
import VisionImage from '../../images/vision.png'
import MissionImage from '../../images/mission.png'
import './About.css'
import Profile from '../../components/Profile'


const About = () => {
  return (
   <>
   <Header title="About MetaMind Limited" image={AboutPic} className='about-wrapper'>
    Metamind has grown from a small startup into a renowned consultancy firm, committed to delivering personalized and impactful solutions.
   </Header>
   <section className="about">
    <div className='container about-container'>
      <div className="about_section">
        
        <img src={StoryImage} alt="Our Story" className="about_section-image"/>
      </div>
      <div className="about_section-content">
        <h2>OUR STORY</h2>
        <p>Metamind was founded in 2023 by Alvin Adams who had a passion for innovation and excellence. 
          Over the monthss, we have grown from a small startup into a renowned consultancy firm, helping businesses across various 
          industries navigate complex challenges and achieve sustainable growth.
          Our journey began with a commitment to delivering personalized and impactful solutions, and this philosophy continues to drive us today
        </p>
      </div>
    </div>

   </section>
   <section className="about">
    <div className='container about_Vision-container'>
      <div className="about_section-image">
        <img src={VisionImage} alt="Our Vision" className="about_section-image"/>
      </div>
      <div className="about_section-content">
        <h2>OUR VISION</h2>
        <p>Metamind was founded in 2023 by Alvin Adams who had a passion for innovation and excellence. 
          Over the monthss, we have grown from a small startup into a renowned consultancy firm, helping businesses across various 
          industries navigate complex challenges and achieve sustainable growth.
          Our journey began with a commitment to delivering personalized and impactful solutions, and this philosophy continues to drive us today
        </p>
      </div>
     
    </div>

   </section>
   <section className="about">
    <div className='container about_mission-container'>
      <div className="about_section-image">
        <img src={MissionImage } alt="Our Mission" className="about_section-image"/>
      </div>
      <div className="about_section-content">
        <h2>OUR MISSION</h2>
        <p>At Metamind, our mission is to empower businesses to unlock their full potential through innovative and tailored consulting solutions.
           We strive to be the catalyst for transformation, providing our clients with the tools, 
          strategies, and insights needed to thrive in an ever-evolving marketplace. Our goal is to build lasting partnerships based on trust, excellence, and measurable success.
        </p>
         
      </div>
    </div>

   </section>
   <div className='about-profiles'>
      <Profile/>
   </div>
   </>
  )
}

export default About