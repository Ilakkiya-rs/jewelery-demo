import React from 'react'
import './hero.css'
const HeroBlock = () => {
  return (
    <div className='iot-herosection'>
      <div className='iot-title'>
      Discover the Potential of Blockchain Technology"
      </div>
      <div className="title__separete"></div>
      <div className='iot-hero'>
        <div className='iot-gif'>
            <img src='https://imarticus.org/blog/wp-content/uploads/2019/07/blockchain.gif' alt=''/>
            <div className="overlay">
        <h2 className="hero-title"> "Blockchain Revolutionizing Trust"</h2>
        <p className='iot-herocontent'>
        Innovative blockchain technology offers unparalleled security, transparency, and decentralization, fostering trust and efficiency in digital transactions. Its immutable ledger ensures tamper-proof recordkeeping, while decentralized networks empower individuals and businesses globally, heralding a new era of trust and transparency in various industries.</p>
        <div className='hero-button'>know more</div>
      </div>
        </div>
      </div>
    </div>
  )
}

export default HeroBlock
