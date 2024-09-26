import React from 'react';
import '../Pages/Home/home.css';
import profile1 from '../images/joe.jpeg'
import profile2 from '../images/alvo.jpeg'

const Profile = () => {
  return (
    <>
    <div className="profile-container">
      <div className="profile-image">
        <img src={profile2} alt="CEO" />
      </div>
      <div className="profile-info">
        <h2>ALVIN ADAMS</h2>
        <p>
            Alvin Adams is the Director and Co-founder of MetaMind Limited. 
            With years of experience in the industry, he has led the company to new heights. 
            Under his leadership, the company has grown significantly and achieved numerous awards.
        </p>
        <div className="achievements">
          <h3>Achievements</h3>
          <ul>
            <li>Named Best CEO of the Year, 2023</li>
            <li>Over 20+ successful projects completed</li>
            <li>Recognized as a top industry leader in innovation</li>
          </ul>
        </div>
      </div>
    </div>

    <div className="profile-container">
      <div className="profile-image">
        <img src={profile1} alt="CEO" />
      </div>
      <div className="profile-info">
        <h2>JOE OTUYA</h2>
        <p>
            Joe Otuya is the CEO of [Your Company Name]. With over 15 years of experience in the industry, she has led the company to new heights. Under her leadership, the company has grown significantly and achieved numerous awards.
        </p>
        <div className="achievements">
          <h3>Achievements</h3>
          <ul>
            <li>Named Best CEO of the Year, 2023</li>
            <li>Over 20+ successful projects completed</li>
            <li>Recognized as a top industry leader in innovation</li>
          </ul>
        </div>
      </div>
    </div>
    </>
  );
};

export default Profile;
