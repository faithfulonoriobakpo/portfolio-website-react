import React from 'react';
import './Sidelist.css';
import profilepic from '../../../Images/faithful.jpg';

const Sidelist = ({showProfilePic}) => {
  return (
    <React.Fragment>
        {
            showProfilePic ? (<div className='profilepic'>
                                <img src={profilepic} alt='profile pic'></img>
                            </div>) : null
        }
    </React.Fragment>
  )
}

export default Sidelist