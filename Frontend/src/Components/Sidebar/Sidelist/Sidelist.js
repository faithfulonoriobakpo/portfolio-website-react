import React from 'react';
import './Sidelist.css';
import profilepic from '../../../Images/faithful.jpg';
import {FcNightPortrait, FcHome, FcTodoList, FcContacts, FcFactory, FcSalesPerformance} from 'react-icons/fc';
import {MdBiotech, MdCastForEducation} from 'react-icons/md';

const Sidelist = ({showProfilePic}) => {
  return (
    <React.Fragment>
            {
                showProfilePic ? (
                    <div className='nav-items'>
                        <div className='profilepic'>
                            <img src={profilepic} alt='profile pic'></img>
                        </div>
                            <ul>
                                <li className='nav-item'><FcHome size={25}/>Home</li>
                                <li className='nav-item'><FcNightPortrait size={25}/>About</li>
                                <li className='nav-item'><FcFactory size={25}/>Work Experience</li>
                                <li className='nav-item'><MdBiotech size={25} color={'yellow'}/>Tech Stack</li>
                                <li className='nav-item'><MdCastForEducation size={25} color={'yellow'}/>Education</li>
                                <li className='nav-item'><FcTodoList size={25}/>Projects</li>
                                <li className='nav-item'><FcSalesPerformance size={25}/>Testimonials</li>
                                <li className='nav-item'><FcContacts size={25}/>Contact</li>
                            </ul>
                    </div>) : (
                        <div className='nav-items-collapsed'>
                            <ul>
                            <li className='nav-item'><FcHome size={25}/></li>
                                <li className='nav-item'><FcNightPortrait size={25}/></li>
                                <li className='nav-item'><FcFactory size={25}/></li>
                                <li className='nav-item'><MdBiotech size={25} color={'yellow'}/></li>
                                <li className='nav-item'><MdCastForEducation size={25} color={'yellow'}/></li>
                                <li className='nav-item'><FcTodoList size={25}/></li>
                                <li className='nav-item'><FcSalesPerformance size={25}/></li>
                                <li className='nav-item'><FcContacts size={25}/></li>
                            </ul>
                        </div>
                    )
            }
    </React.Fragment>
  )
}

export default Sidelist