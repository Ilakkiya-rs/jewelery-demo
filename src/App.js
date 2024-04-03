import './App.css';
import Whatsapp from '../src/Assets/pngimg.com - whatsapp_PNG1.png'
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import IOTPage from './Components/ServicePage/IOT';
import BlockchainPage from './Components/ServicePage/Blockchain';
import HomePage from './Pages/HomePage/Home';
import ProductCategories from './Components/OurProduct/ProductCategories';
import Product1 from './Components/OurProduct/ProductDesign/Product1';
import Calendly from './Components/Calendly/Calendly';


function App() {
  return (
    <>
      <div className='whatsapp'>
        <a
          href="https://wa.me/9829779890"
          title="Chat with us on WhatsApp">
          <img src={Whatsapp} alt='' />
        </a>
      </div>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path='/iot-page' element={<IOTPage />} />
          <Route path='/blockchain-page' element={<BlockchainPage />} />
          <Route path='/product-categories' element={<ProductCategories/>} />
          <Route path='/calendly' element={<Calendly/>} />
          <Route path='/product1' element={<Product1/>} />
          
        </Routes>
      


      </div>

    </>
  );
}

export default App;
