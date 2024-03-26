import React from 'react'
import './usecases.css'
const Usecases = () => {
  return (
    <div className='iot-usecases'>
        <h1 className='usecases-title'>usecases</h1>
        
       
            <div className='usecases-content'>
                <div className='usecases'>
                   
                    <div className='usecases-about'>
                        <h1>Smart Home Automation:</h1>
                        <p>
                        Control lights, thermostats, and appliances from your smartphone.
                        </p>
                    </div>
                    <img src='https://cdn-icons-png.flaticon.com/128/10395/10395842.png' alt=''/>
                </div>
                <div className='usecases'>
                    <img src='https://cdn-icons-png.flaticon.com/128/3806/3806210.png' alt=''/>
                    <div className='usecases-about'>
                        <h1>Industrial IoT: </h1>
                        <p>
                       
                        Monitor equipment performance and predict maintenance needs in factories.
                        </p>
                    </div>
                </div>
                <div className='usecases'>
                   
                    <div className='usecases-about'>
                        <h1>Smart Agriculture: </h1>
                        <p>
                        Optimize irrigation and crop management based on environmental data.
                        </p>
                    </div>
                    <img src='https://cdn-icons-png.flaticon.com/128/10130/10130604.png' alt=''/>
                </div>
                <div className='usecases'>
                    <img src='https://cdn-icons-png.flaticon.com/128/4757/4757563.png' alt=''/>
                    <div className='usecases-about'>
                        <h1>Healthcare IoT: </h1>
                        <p>
                        Track patient vitals remotely and improve healthcare delivery.
                        </p>
                    </div>
                </div>
                
            </div>
           
      
    </div>
  )
}

export default Usecases
