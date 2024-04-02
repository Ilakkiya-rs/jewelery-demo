import React from 'react'
import './feature.css'
const BlockFeature = () => {
    return (
        <div className='feature-section' id="features">
            <h1>Features
            <div className="title__separete"></div>
            </h1>
            
        <div className='feature-card'>
           
            <div className='cards'>
                <img src='https://cdn-icons-png.flaticon.com/128/5901/5901844.png' alt='' />
                <div className='card-content'>
                    <h2>Decentralization:</h2>
                    <p>
                    Eliminate the need for central authorities and intermediaries.
                    </p>
                </div>
            </div>
            <div className='cards'>
                <img src='https://cdn-icons-png.flaticon.com/128/12350/12350577.png' alt='' />
                <div className='card-content'>
                <h2>Immutability:</h2>
                <p>
                Ensure the integrity and security of data with tamper-proof records.
                </p>
                </div>
            </div>
            <div className='cards'>
                <img src='https://cdn-icons-png.flaticon.com/128/4371/4371115.png' alt='' />
                <div className='card-content'>
                <h2>Transparency: </h2>
                <p>
                Facilitate transparent transactions and audit trails.
                </p>
                </div>
            </div>
            <div className='cards'>
                <img src='https://cdn-icons-png.flaticon.com/128/6229/6229568.png' alt='' />
                <div className='card-content'>
                <h2>Smart Contracts: </h2>
                <p>
                   Automate agreements and enforce contract terms without intermediaries.
                </p>
            </div>
        </div>
    </div >
    </div>
  )
}

export default BlockFeature