import React from 'react'
import './hero.css'
const HeroIot = () => {
  return (
    <div className='iot-herosection'>
      <div className='iot-title'>
        Explore the power of IOT
      </div>
      <div className="title__separete"></div>
      <div className='iot-hero'>
        <div className='iot-gif'>
            <img src='https://media.licdn.com/dms/image/D4D12AQF0Js6t7kBGug/article-cover_image-shrink_720_1280/0/1685103171366?e=1716422400&v=beta&t=mAEiqvVjLUspFS83GTxYGU3_NrRNCi8f_a7v2my3x7A' alt=''/>
            <div className="overlay">
        <h2 className="hero-title"> "Transform Your Business with IoT Solutions"</h2>
        <p className='iot-herocontent'>
        Discover a world of connectivity with our IoT solutions, where innovation meets efficiency. Seamlessly integrate devices, harness data, and unlock transformative insights. Experience the future of business operations today.
        </p>
        <div className='hero-button'>know more</div>
      </div>
        </div>
      </div>
    </div>
  )
}

export default HeroIot
