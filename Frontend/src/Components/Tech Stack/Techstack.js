import React from 'react';
import './Techstack.css';
import {FaHtml5,FaCss3,FaJs,FaNodeJs} from 'react-icons/fa';
import {SiCss3,SiTypescript,SiReact,SiAngular,SiPython,SiFlask,SiPostgresql} from 'react-icons/si';

const Techstack = () => {

    const data = [

        {
            name: "HTML",
            icon: <FaHtml5 size={50} color='orangered'/>
        },
        {
            name: "CSS",
            icon: <SiCss3 size={50} color='blue'/>
        },
        {
            name: "Javascript",
            icon: <FaJs size={50} color='gold'/>
        },
        {
            name: "Typescript",
            icon: <SiTypescript size={50} color='skyblue'/>
        },
        {
            name: "ReactJs",
            icon: <SiReact size={50} color='skyblue'/>
        },
        {
            name: "Angular",
            icon: <SiAngular size={50} color='red'/>
        },
        {
            name: "Node JS",
            icon: <FaNodeJs size={50} color='green'/>
        },
        {
            name: "Python",
            icon: <SiPython size={50}/>
        },
        {
            name: "Flask",
            icon: <SiFlask size={50}/>
        },
        {
            name: "Postgresql",
            icon: <SiPostgresql size={50} color='skyblue'/>
        }
    ]

  return (
    <div className='container techstack-section'>
        <div className='section-title'>
            <h5>Tech Stack</h5>
            <span id='line'></span>
        </div>
        <div className='row'>
            {data.map((item, index) => (<div className='col-xl-4 col-lg-4 col-md-6 col-sm-12'>
                    <div className='techstack-content'>
                        <p>{item.icon}</p>
                        <p>{item.name}</p>
                    </div>
                </div>)
            )}
        </div>
    </div>
  )
}

export default Techstack