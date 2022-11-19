import React from 'react';
import './About.css';
import aboutPhoto from '../../Images/faithfulbwb.jpeg';

const About = () => {
  return (
    <div className='container about-section'>
        <div className='row'>
            <div className='col-xl-6 col-lg-6 col-md-12 col-sm-12'>
                <div className='about-image'>
                    <img src={aboutPhoto} alt='faithful'/>
                </div>
            </div>
            <div className='col-xl-6 col-lg-6 col-md-12 col-sm-12'>
                <div className='about-details'>
                    <div className='about-title'>
                        <h5>About Me</h5>
                        <span id='about-title-line'></span>
                    </div>
                    <p> 
                    I am a Frontend Developer with over 3 years of experience in the tech industry. I have in depth 
                    knowledge and experience of modern technologies like React, Angular, Typescript and NodeJs.<br></br><br></br>
                    My experience spans from fulltime jobs especially in the finance industry and freelance jobs.
                    <br></br><br></br>
                    Asides working, I love exploring new technologies, playing the piano and watching Anime.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About