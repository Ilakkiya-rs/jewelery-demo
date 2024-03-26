import React from 'react'
import '@fortawesome/fontawesome-free/css/all.css';
import './footer.css'
const Footer = () => {
  return (
    

      <footer className="footer-hero">
        <div className="row">

          <div className="single-cta">
            <i className="fas fa-map-marker-alt"></i>
            <div className="cta-text">
              <h4>Find us</h4>
              <span>B 5-6, Akshat Apartment, Bani Park, Jaipur 302 016 (India)</span>
            </div>

          </div>

          <div className="single-cta">
            <i className="fas fa-phone"></i>
            <div className="cta-text">
              <h4>Call us</h4>
              <span>9876543210 0</span>
            </div>

          </div>

          <div className="single-cta">
            <i className="far fa-envelope-open"></i>
            <div className="cta-text">
              <h4>Mail us</h4>
              <span>mail@info.com</span>
            </div>

          </div>
         
        </div>

        <div className="line__separete"></div>
        <div className="by flex">
          <p>Copyright © 2024 All Rights,BQtech</p>
          <div className='footer-links'>
            <ul>
            <li><a href=''>About Us</a></li>
            <li> <a href=''>Blog</a></li>
            <li><a href=''> Careers</a></li>
            </ul>
          </div>
          <div className="icons">
            <a href="" className="icon1 icon--instagram">
              <i className="ri-instagram-line"></i>
            </a>
            <a href="#" className="icon1 icon--twitter">
              <i className="ri-twitter-line"></i>
            </a>
            <a href="" className="icon1 icon--linkedin">
              <i className="ri-linkedin-line"></i>
            </a>
            <a href="" className="icon1 icon--github">
              <i className="ri-github-line"></i>
            </a>
          </div>
        </div>

      </footer >

    
  )
}

export default Footer
