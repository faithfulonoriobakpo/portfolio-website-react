import React from 'react';
import './Home.css';
import Typewriter from 'typewriter-effect';

const Home = () => {
  return (
    <div className='container-fluid home'>
      <div className='container home-content'>
        <h1>Hi, Welcome to my Page!</h1>
        <h3>
          <Typewriter 
            options={{
              strings: ["My Name is Faithful Onoriobakpo and I'm a Frontend Developer."],
              autoStart: true,
              loop: true,
              delay: 5
            }}
          />
        </h3>
        <div className='hire-resume-button-container'>
          <div className='hire-me-button'>Hire Me</div>
          <div>Get Resume</div>
        </div>
      </div>
    </div>
  )
}

export default Home