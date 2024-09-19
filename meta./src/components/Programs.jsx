import React from 'react'
import Pic1 from '../images/software-developer-6521720_1920.jpg'
import Pic2 from '../images/programming-1009134_1920.jpg'
import Pic3 from '../images/macbook-2587217_1920.jpg'

const Programs = () => {
  return (
    <div className='programs'>
        <div className="top">
            <h2>OUR EXPERTISE</h2>
            <p>MetaMind is a full IT service and solution provider with over 10 years of experience in software development. Our services include:</p>
        </div>
        <div className="bottom">
            <div className="card">
                <img className="card-img-top" src={Pic1} alt="Card cap" />
                <div className="card-body">
                    <h5 className="card-title">Software Development</h5>
                    <p className="card-text">
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                    </p>
                    <a href="/services" className="btn btn-primary">Read More</a>
                </div>
            </div>

            <div className="card">
                <img className="card-img-top" src={Pic2} alt="Card cap" />
                <div className="card-body">
                    <h5 className="card-title">Web Development</h5>
                    <p className="card-text">
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                    </p>
                    <a href="/services" className="btn btn-primary">Read More</a>
                </div>
            </div>
            <div className="card">
                <img className="card-img-top" src={Pic3} alt="Card cap" />
                <div className="card-body">
                    <h5 className="card-title">POS Software</h5>
                    <p className="card-text">
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                    </p>
                    <a href="/services" className="btn btn-primary">Read More</a>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Programs