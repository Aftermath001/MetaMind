import React from 'react'
import CardGrid from './CardGrid'

const Choice = () => {
  return (
    <div className='main_header-container'>
        <div className="main_header_left">
            <div className='top-left'>
                <h2>WHY CHOOSE US?</h2>
                <p>Hundreds of organizations trust us with their yearly cybersecurity needs due to our proven track record of providing tailored, 
                comprehensive solutions, expert team of cybersecurity professionals staying current with industry trends, and dedication to cust.
                At Metamind, we transform businesses through innovative and customized consulting solutions. Unlike traditional consultancy firms, 
                we integrate cutting-edge technology, industry expertise, and a client-centric approach to deliver measurable and sustainable results
                </p>
            </div>
            
        </div>
        <div className="main_header_right">
            <div className="top-bottom">
                <CardGrid/>
            </div>
        </div>
    </div>
  )
}

export default Choice