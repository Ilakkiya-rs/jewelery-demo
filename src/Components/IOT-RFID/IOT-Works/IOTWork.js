import React from 'react'
import Lottie from 'lottie-react';
import PhoneImage from '../../../Assets/IOT.json'
import './work.css'
const IOTWork = () => {
    

    return (
        <div className='how-it-works'>
            <h1>Welcome to the Era of Connected Intelligence!</h1>
            <div className="title__separete"></div>
            <div className='worksection'>
                <div className='work-content'>
                    <h2>IoT: Illuminating the Invisible Threads of Connectivity.</h2>
                    <p>
                        In the intricate web of the Internet of Things (IoT), everyday objects become intelligent nodes in a vast network, communicating and exchanging data seamlessly. Sensors embedded in these objects gather information about their surroundings, while actuators respond to this data, executing actions in the physical world. This interconnected ecosystem enables unprecedented levels of automation, efficiency, and convenience in various domains. From smart homes that adjust settings based on user preferences to industrial systems that optimize production processes, IoT revolutionizes how we interact with technology. It's a transformative force that blurs the lines between the digital and physical worlds, unlocking new possibilities and shaping the future of connectivity. Welcome to the era of IoT, where innovation knows no bounds.
                    </p>
                </div>
                <div className='work-image'>
                    <Lottie animationData={PhoneImage} loop={true}  />
                </div>
            </div>
            <div className='iot-concepts'>
                <div className='concepts'>
                    <img src='https://cdn-icons-gif.flaticon.com/14642/14642221.gif' alt=''/>
                    <h3>Sensors:</h3>
                    <p>
                    Sensors serve as the eyes and ears of IoT systems, capturing data from the physical world. They detect various environmental parameters like temperature, humidity, motion, and light. This data is essential for making informed decisions and triggering actions in response to changing conditions.
                    </p>
                </div>
                <div className='concepts'>
                    <img src='https://cdn-icons-gif.flaticon.com/10398/10398530.gif' alt=''/>
                    <h3>Actuators:</h3>
                    <p>
                    Actuators are the hands and feet of IoT, executing actions based on the insights derived from sensor data. They translate digital commands into physical movements or changes in the environment. Actuators can control devices such as motors, valves, switches, and actuators play a crucial role in automating processes and responding to real-time data.
                    </p>
                </div>
                <div className='concepts'>
                    <img src='https://cdn-icons-gif.flaticon.com/14984/14984797.gif' alt=''/>
                    <h3>Network Connectivity:</h3>
                    <p>
                    Network connectivity forms the backbone of IoT, enabling seamless communication between devices and systems. It facilitates the transmission of data from sensors to centralized platforms for analysis. Whether through Wi-Fi, Bluetooth, cellular networks, or specialized IoT protocols, connectivity ensures data flows efficiently and reliably across the IoT ecosystem.
                    </p>
                </div>

            </div>
            <div className='work-about'>
                <div className="tabs">
                    <input type="radio" name="tabs" id="tabone" defaultChecked />
                    <label htmlFor="tabone">Data Collection:</label>
                    <div className="tab">
                        <h1>Role of Sensors:</h1>
                       <p>
                       Sensors, embedded within IoT devices, gather data from the physical environment. These sensors capture various types of information such as temperature, humidity, motion, light, and more. The collected data is then processed into a digital format for further analysis.
                       </p>
                    </div>

                    <input type="radio" name="tabs" id="tabtwo" />
                    <label htmlFor="tabtwo">Data Transmission:</label>
                    <div className="tab">
                        <h1>Role of Actuators</h1>
                     <p>
                     Once the data is collected, it needs to be transmitted to centralized systems or cloud platforms for analysis. This transmission occurs through various communication protocols such as Wi-Fi, Bluetooth, cellular networks, or specialized IoT protocols like MQTT or CoAP. The data travels across networks, traversing routers, switches, and gateways, until it reaches its destination.


                     </p>
                    </div>

                    <input type="radio" name="tabs" id="tabthree" />
                    <label htmlFor="tabthree">Data Analysis:</label>
                    <div className="tab">
                        <h1>Role of Network Connectivity: </h1>
                      <p>
                      Upon reaching the centralized systems or cloud platforms, the collected data undergoes analysis using advanced algorithms and machine learning techniques. This analysis aims to extract meaningful insights, identify patterns, trends, anomalies, or correlations within the data. The processed data provides valuable information that can be used for decision-making and optimization.
                      </p>
                    </div>
                    <input type="radio" name="tabs" id="tabfour" />
                    <label htmlFor="tabfour">Response:</label>
                    <div className="tab">
                        <h1>Role of Network Connectivity: </h1>
                       <p>Based on the insights derived from the data analysis, IoT systems generate responses or take actions to address specific needs or optimize processes. These responses can range from simple alerts or notifications to more complex actions such as adjusting environmental conditions, controlling machinery, or triggering automated workflows. The goal is to leverage the analyzed data to drive informed decisions and improve efficiency, productivity, and user experiences.</p>
                    </div>
                    
                </div>
            </div>
            
        </div>
    )
}

export default IOTWork
