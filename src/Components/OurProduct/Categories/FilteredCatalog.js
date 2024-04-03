import React, { useState } from 'react';
import './category.css';
import { useNavigate } from "react-router-dom"

const productsData = [
  { id: 1, name: 'Product 1', image: 'https://www.bradyid.com/-/media/intelligent-manufacturing/image/blog-block---3-across/400x225_rfid-asset-tracking.jpg', about:'Industry-leading RFID Performance (Impinj E710/R2000 Chip, Up to 30m)', category: 'category1' },
  { id: 2, name: 'Product 2', image: 'https://media.istockphoto.com/id/1363738734/vector/neon-rfid-tag-icon-in-line-style.jpg?s=612x612&w=0&k=20&c=-N-U1XeHbb7Z6N_6A2u19tDS0y-kngQtGW8q3Y6MUuE=', about:'Industry-leading RFID Performance (Impinj E710/R2000 Chip, Up to 30m)', category: 'category1' },
  { id: 3, name: 'Product 3', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT87kxdNCQYNLsVe0JUTyFNZzUO8ULr9SLvNSX3cE0Pqw&s', about:'Industry-leading RFID Performance (Impinj E710/R2000 Chip, Up to 30m)',category: 'category2' },
  { id: 4, name: 'Product 4', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdeq5vTIpzkCL1I5yEhbhGsveGo2UCYEZl_o8SNC_9LA&s', about:'Industry-leading RFID Performance (Impinj E710/R2000 Chip, Up to 30m)', category: 'category2' },
  { id: 5, name: 'Product 5', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1wCUTN4xz41MknCuLWnb7g-8g1AvCGo6aaWAXyiroJQ&s', about:'Industry-leading RFID Performance (Impinj E710/R2000 Chip, Up to 30m)', category: 'category3' },
  { id: 6, name: 'Product 6', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3gzcfZHH806RZh8Grk-prhy4xvow1kUhxpxgr09Sfmw&s', about:'Industry-leading RFID Performance (Impinj E710/R2000 Chip, Up to 30m)', category: 'category3' },
  { id: 7, name: 'Product 7', image: 'https://rfidnation.com/57-home_default/rfid-zebra-ds9908-hd-lab-scanner.jpg', about:'Industry-leading RFID Performance (Impinj E710/R2000 Chip, Up to 30m)', category: 'category4' },
  { id: 8, name: 'Product 8', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvArybf_HXhgHbLB4MtRPmmuq3NJlDo7ucdBXZcmQMxg&s', about:'Industry-leading RFID Performance (Impinj E710/R2000 Chip, Up to 30m)', category: 'category4' },
  { id: 9, name: 'Product 9', image: 'https://www.zebra.com/content/dam/zebra_dam/global/zcom-web-production/web-production-photography/web001/ds9900-series-ds9908hd-r-front-left-3x2-3600.jpg', about:'Industry-leading RFID Performance (Impinj E710/R2000 Chip, Up to 30m)', category: 'category5' },
  { id: 10, name: 'Product 10', image: 'https://ivel.pl/galerie/k/kamera-drc-10mlfd-rfid-10-abo_69110_p.webp', about:'Industry-leading RFID Performance (Impinj E710/R2000 Chip, Up to 30m)', category: 'category5' },
];

const FilteredCatalog = () => {
  let navigate = useNavigate()
  const [selectedFilters, setSelectedFilters] = useState([]);

  const handleCheckboxChange = (value) => {
    if (value === 'all') {
      setSelectedFilters([]);
    } else {
      const updatedFilters = selectedFilters.includes(value)
        ? selectedFilters.filter(filter => filter !== value)
        : [...selectedFilters, value];

      setSelectedFilters(updatedFilters);
    }
  };

  return (
    <div className="filter-container">
      <div className="filter-sidebar">
    <h2>Filters</h2>
        <div className="filter-options">
          <label className="filter-label">
            <input
              type="checkbox"
              value="all"
              checked={selectedFilters.length === 0}
              onChange={() => handleCheckboxChange('all')}
              onClick={() =>  navigate("/iot-page") }
            /> <span className="checkbox-custom"></span>All
            
          </label>
          <label className="filter-label">
            <input
              type="checkbox"
              value="category1"
              checked={selectedFilters.includes('category1')}
              onChange={() => handleCheckboxChange('category1')}
            /> <span className="checkbox-custom"></span>Category 1
          </label>
          <label className="filter-label">
            <input
              type="checkbox"
              value="category2"
              checked={selectedFilters.includes('category2')}
              onChange={() => handleCheckboxChange('category2')}
            /><span className="checkbox-custom"></span> Category 2
          </label>
          <label className="filter-label">
            <input
              type="checkbox"
              value="category3"
              checked={selectedFilters.includes('category3')}
              onChange={() => handleCheckboxChange('category3')}
            /><span className="checkbox-custom"></span> Category 3
          </label>
          <label className="filter-label">
            <input
              type="checkbox"
              value="category4"
              checked={selectedFilters.includes('category4')}
              onChange={() => handleCheckboxChange('category4')}
            /><span className="checkbox-custom"></span> Category 4
          </label>
          <label className="filter-label">
            <input
              type="checkbox"
              value="category5"
              checked={selectedFilters.includes('category5')}
              onChange={() => handleCheckboxChange('category5')}
            /><span className="checkbox-custom"></span> Category 5
          </label>
        </div>
      </div>
      <div className="catalog">
      
        {productsData.filter(product => selectedFilters.length === 0 || selectedFilters.includes(product.category)).map(product => (
          <div key={product.id} className="product-card" onClick={() =>  navigate("/product1") }>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.about}</p>
            <div className="detail-button" >Details</div>
            <div className="line__separete"></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FilteredCatalog;

