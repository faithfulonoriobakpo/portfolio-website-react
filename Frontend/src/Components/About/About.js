import React from 'react';
import './About.css';
import aboutPhoto from '../../Images/faithfulbwb.jpeg';

const About = () => {
  return (
    <div className='container about-section'>
        <div className='row'>
            <div className='col-xl-6 col-lg-6 col-md-12 col-sm-12'>
                <div className='about-image'>
                    <img src={aboutPhoto} alt='picture of faithful'/>
                </div>
            </div>
            <div className='col-xl-6 col-lg-6 col-md-12 col-sm-12'></div>
        </div>
    </div>
  )
}

export default About