import React, {useState} from 'react';
import './Sidebar.css';
import Home from '../Home/Home';
import Sidelist from './Sidelist/Sidelist';
import { BsChevronLeft,BsChevronRight } from "react-icons/bs";

const Sidebar = () => {

    const [expandSideBar,setExpandSideBar] = useState(true);

    const handleSideBarExpandClick = () => {
        setExpandSideBar(!expandSideBar);
    }

  return (
    <div className='container-fluid sidebar-section'>
        <div className={expandSideBar? 'sidebar-expand sidebar' : 'sidebar'}>
            <div className='sidebar-expand-icon'>
                <p onClick={handleSideBarExpandClick}>{expandSideBar? <BsChevronLeft size={30}/> : <BsChevronRight size={30}/>}</p>
            </div>
            <Sidelist showProfilePic={expandSideBar} />
        </div>

        <div className='container' style={{'padding': '0 200px'}}>
            <Home />
        </div>
    </div>
  )
}

export default Sidebar