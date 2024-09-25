import React from 'react'
import Pic1 from '../images/imagemeta7.jpg'
import Pic2 from '../images/undraw_Questions_re_1fy7.png'
// import Pic2 from '../images/programming-1009134_1920.jpg'
// import Pic3 from '../images/macbook-2587217_1920.jpg'

const Programs = () => {
  return (
    <div className='programs'>
        <div className="top">
            
            <div className="top-up">
                <h2>WHY CHOOSE US?</h2>
                <p>From a small startup to a renowned consultancy, Metamind has consistently delivered innovative solutions to help businesses thrive. Our commitment to personalized service and excellence has been the cornerstone of our growth.</p>
            </div>
            <div className="top-bottom">
                <h2>Our Philosophy</h2>
                <p>At Metamind, our journey from a small startup to a renowned consultancy firm has been driven by our unwavering commitment to delivering personalized and impactful solutions. We believe in understanding the unique challenges of each client and crafting tailored strategies that lead to sustainable growth. Our core values of innovation, integrity, and excellence guide us in every project we undertake, ensuring that we not only meet but exceed our clients expectations.</p>
            </div>
        </div>
        <div className="bottom">
            
            <img src={Pic2} alt=''/>
        </div>
    </div>
  )
}

export default Programs