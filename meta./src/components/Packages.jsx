import React from 'react'

const Packages = () => {
  return (
    <div className='packages'>
        <div className="upper">
            <h2>Our Services</h2>
        </div>
        <div className="lower">
            <div className="card-container">
                <div className="row no-gutters">
                    <div className="col-md-6">
                    <img 
                        src="https://picsum.photos/400/400/?image=20" 
                        alt="Card" 
                        className="card-img"
                    />
                    </div>
                    <div className="col-md-6">
                    <div className="card-body">
                        <h5 className="card-title">Business Strategy</h5>
                        <p className="card-text">
                        Our business strategy services help you define and achieve your long-term 
                        goals through comprehensive planning and expert guidance
                        </p>
                    </div>
                    </div>
                </div>
            </div>

            <div className="card-container">
                <div className="row no-gutters">
                    <div className="col-md-6">
                    <img 
                        src="https://picsum.photos/400/400/?image=20" 
                        alt="Card" 
                        className="card-img"
                    />
                    </div>
                    <div className="col-md-6">
                    <div className="card-body">
                        <h5 className="card-title">Technology Consulting</h5>
                        <p className="card-text">
                        Our financial advisory services offer expert advice 
                        on managing your finances and making informed investment decisions.
                        </p>
                    </div>
                    </div>
                </div>
            </div>

            <div className="card-container">
                <div className="row no-gutters">
                    <div className="col-md-6">
                    <img 
                        src="https://picsum.photos/400/400/?image=20" 
                        alt="Card" 
                        className="card-img"
                    />
                    </div>
                    <div className="col-md-6">
                    <div className="card-body">
                        <h5 className="card-title">IT Solutions</h5>
                        <p className="card-text">
                        We offer comprehensive IT solutions to streamline your operations 
                        and enhance your technological capabilities.
                        </p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Packages