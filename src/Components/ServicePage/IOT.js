import React from 'react'
import NavItems from './Header/IOT-Nav'
import HeroIot from './HeroSection/HeroIot'
import IOTFeature from './Features/IOT-Feature'
import IOTWork from './HowItWorks/IOTWork'
import IOTUsecase from './Usecases/IOTUsecase'
import IOTClient from './Testimonials/IOTClients'
import Footer from '../Footer/Footer'
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
const IOTPage = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div className='IOT-page'>
        <NavItems/>
        <HeroIot/>
        <IOTFeature/>
        <IOTWork/>
        <IOTUsecase/>
        <IOTClient/>
        <Footer/>
      
    </div>
  )
}

export default IOTPage
