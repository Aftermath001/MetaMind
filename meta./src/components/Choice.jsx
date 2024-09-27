import React from 'react'


const Choice = () => {
  return (
    <div className='steps-wrapper'>
        <div className="steps-top">
            <h2>Steps we take</h2>
              <p>We accomplish our projects in 4 simple steps.</p>
            
        </div>
        <div className="steps-bottom">
          <ul className="steps-list">
            <li className="step-item">Take Order</li>
            <li className="step-item">Design Web</li>
            <li className="step-item">Develop Project</li>
            <li className="step-item">Test & Deploy</li>
          </ul>
      </div>
    </div>
  )
}

export default Choice