import React, { useState } from 'react';
import './design.css';

const Product1 = () => {
    const thumbnailImages = [
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzSSO0H6bdcTH5HlFnfx-CPl4mETBLiFzNXA&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcqxBmEoeBdFU1IoLQG6iDzGbd9Y6a_2YmEg&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIq2IY2Ep9iU2SvvYfhRsj4CSlG8USVTFUjg&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXETdbIrecZrVIBGNQeYJjpTKWpyuU7NKmWA&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRYgp35ZEtdlS_jS9WwMhsVPpqccLvObISZg&usqp=CAU'
    ];

    const [mainImage, setMainImage] = useState(thumbnailImages[0]);

    const handleThumbnailClick = (imageUrl) => {
        setMainImage(imageUrl);
    };

    return (
        <div className='product-design'>
            
            <div className="gallery-container">
            <h1>Product 1</h1>
                <div className="main-picture">
                    <img src={mainImage} alt="Main Picture" />
                </div>

                <div className="thumbnail-container">
                    {thumbnailImages.map((image, index) => (
                        <img
                            key={index}
                            className="thumbnail"
                            src={image}
                            alt={`Thumbnail ${index + 1}`}
                            onClick={() => handleThumbnailClick(image)}
                        />
                    ))}
                </div>
            </div>
            <div className="tabs">
                    <input type="radio" name="tabs" id="tabone" defaultChecked />
                    <label htmlFor="tabone">Description:</label>
                    <div className="tab">
                        <h1>Description</h1>
                       <p>
                       Sensors, embedded within IoT devices, gather data from the physical environment. These sensors capture various types of information such as temperature, humidity, motion, light, and more. The collected data is then processed into a digital format for further analysis.
                       </p>
                    </div>

                    <input type="radio" name="tabs" id="tabtwo" />
                    <label htmlFor="tabtwo">Specification:</label>
                    <div className="tab">
                        <h1>Specification</h1>
                     <p>
                     Once the data is collected, it needs to be transmitted to centralized systems or cloud platforms for analysis. This transmission occurs through various communication protocols such as Wi-Fi, Bluetooth, cellular networks, or specialized IoT protocols like MQTT or CoAP. The data travels across networks, traversing routers, switches, and gateways, until it reaches its destination.


                     </p>
                    </div>

                </div>
        </div>
    );
}

export default Product1;

