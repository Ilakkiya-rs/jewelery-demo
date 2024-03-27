import React from 'react'
import NavItem from './Header/Blockchain-Nav'
import HeroBlock from './HeroSection/HeroBlock'
import BlockFeature from './Features/Block-Feature'
import BlockWork from './HowItWorks/BlockWorks'
import BlockUsecases from './Usecases/BlockUsecases'
import Footer from '../Footer/Footer'
import BlockchainClient from './Testimonials/BlockchainClients'
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const BlockchainPage = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div>
      <NavItem/>
      <HeroBlock/>
      <BlockFeature/>
      <BlockWork/>
      <BlockUsecases/>
      <BlockchainClient/>
      <Footer/>
    </div>
  )
}

export default BlockchainPage
