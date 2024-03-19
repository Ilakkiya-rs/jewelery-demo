import React, { useState } from 'react';
import './about.css';

import Picture from '../../Assets/picture.avif'
import Pic from '../../Assets/boy.jpg'

const About = () => {
    const [profileIndex, setProfileIndex] = useState(0);

    const profiles = [Picture, Picture,Pic]; 
    const names = ["Ilakkiya Shanmugam", "Vaishnavi", "Umang"];
    const statuses = ["Front-End Developer", "Developer", "CEO-BQTech"];
    const abouts = [
        "As a frontend developer, I specialize in crafting captivating user experiences on the web. My role revolves around transforming design concepts into fully functional and interactive interfaces that users engage with daily.",
        "As a frontend developer, I specialize in crafting captivating user experiences on the web. My role revolves around transforming design concepts into fully functional and interactive interfaces that users engage with daily",
        "As the CEO, I am dedicated to leading our team with a vision for innovation and excellence. With a focus on strategic planning and fostering a collaborative environment, I aim to drive the company towards growth and success. My passion for empowering individuals and delivering exceptional results guides our organization towards achieving its goals.",
       
    ];

    const handleProfileChange = (index) => {
        setProfileIndex(index);
    };

    return (
        <div className='About'>
            <h2 className='about-title'>Our Team</h2>
            <div className='image-container'>
                {profiles.map((profile, index) => (
                    <div className='image' key={index} onClick={() => handleProfileChange(index)}>
                        <img src={profile} alt={`Profile ${index}`} className='profile1' />
                    </div>
                ))}
            </div>
            <div className='info-container'>
                <img src={profiles[profileIndex]}  alt="Profile" />
                <div className='info'>
                    <h1 className='name'>{names[profileIndex]}</h1>
                    <h3 className='status'>{statuses[profileIndex]}</h3>
                    <p className='about'>{abouts[profileIndex]}</p>
                </div>
            </div>
        </div>
    );
}

export default About;
