import React from 'react'
import './feature.css'
const Feature = () => {
    return (
        <div className='feature-section'>
            <h1>Features
            <div className="title__separete"></div>
            </h1>
            
        <div className='feature-card'>
           
            <div className='cards'>
                <img src='https://cdn-icons-png.flaticon.com/128/11682/11682129.png' alt='' />
                <div className='card-content'>
                    <h2>Enhanced Connectivity:</h2>
                    <p>
                        Connect and manage devices remotely for improved efficiency.
                    </p>
                </div>
            </div>
            <div className='cards'>
                <img src='https://cdn-icons-png.flaticon.com/128/10179/10179168.png' alt='' />
                <div className='card-content'>
                <h2>Data Insights:</h2>
                <p>
                    Gain valuable insights from real-time data collected by IoT sensors.
                </p>
                </div>
            </div>
            <div className='cards'>
                <img src='https://cdn-icons-png.flaticon.com/128/10492/10492513.png' alt='' />
                <div className='card-content'>
                <h2>Automation: </h2>
                <p>
                    Automate processes and streamline operations to reduce manual effort.
                </p>
                </div>
            </div>
            <div className='cards'>
                <img src='https://cdn-icons-png.flaticon.com/128/13063/13063175.png' alt='' />
                <div className='card-content'>
                <h2>Scalability: </h2>
                <p>
                    Easily scale your IoT infrastructure to accommodate growth and expansion.
                </p>
            </div>
        </div>
    </div >
    </div>
  )
}

export default Feature
