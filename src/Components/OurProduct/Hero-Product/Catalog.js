import React from 'react'
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './catalog.css'
const Catalog = () => {
    const { pathname } = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  return (
    
    <div className="hero">
  
    <div className="hero-cont-block ">
      
      <div className="social-icons">
        <ul>
          <li><a href="#">
                <i className="fab fa-facebook-f"></i>
            </a></li>
          <li><a href="#">
                <i className="fab fa-instagram"></i>
            </a></li>
        </ul>
    </div>
      
      <div className="scroll-down">
            <svg fill="#F95F51" preserveAspectRatio="xMidYMid meet" height="1em" width="1em" viewBox="0 0 40 40" ><g><path d="m27.5 12.5l-7.5 7.5-7.5-7.5-5 5 12.5 12.5 12.5-12.5-5-5z"></path></g></svg>
          </div>
      
    </div>
    <div className="text-block">
      <h1>we design <br/> RFID DEVICES<span className="red">.</span> 
        </h1>
    </div>
        
        
    <div id="hero-block">
      <div id="hero-image">
        <img src="https://hdwr.eu/images/virtuemart/product/HD-RD65_39.jpg" alt="..."/>
      </div>
    </div>
  </div>
  )
}

export default Catalog
