import React from 'react'
import '../Features/feature.css'
const IOTUsecase = () => {
  return (
    <div className='feature-section'>
            <h1>usecases
            <div className="title__separete"></div>
            </h1>
            
        <div className='feature-card'>
           
            <div className='cards'>
            <img src='https://cdn-icons-png.flaticon.com/128/10395/10395842.png' alt=''/>
                <div className='card-content'>
                    <h2>Smart Home Automation:</h2>
                    <p>
                    Control lights, thermostats, and appliances from your smartphone.
                    </p>
                </div>
            </div>
            <div className='cards'>
            <img src='https://cdn-icons-png.flaticon.com/128/3806/3806210.png' alt=''/>
                <div className='card-content'>
                <h2>Industrial IoT:</h2>
                <p>
                Monitor equipment performance and predict maintenance needs in factories.
                </p>
                </div>
            </div>
            <div className='cards'>
            <img src='https://cdn-icons-png.flaticon.com/128/10130/10130604.png' alt=''/>
                <div className='card-content'>
                <h2>Smart Agriculture: </h2>
                <p>
                Optimize irrigation and crop management based on environmental data.
                </p>
                </div>
            </div>
            <div className='cards'>
            <img src='https://cdn-icons-png.flaticon.com/128/4757/4757563.png' alt=''/>
                <div className='card-content'>
                <h2>Healthcare IoT:</h2>
                <p>
                Track patient vitals remotely and improve healthcare delivery.
                </p>
            </div>
        </div>
    </div >
    </div>
  )
}

export default IOTUsecase
