import './App.css';
import About from './Components/AboutTeam/About';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Home from './Components/HomePage/Home';
import Navbar from './Components/Navbar/Navbar'
import Services from './Components/Services/Services';
import Whatsapp from '../src/Assets/pngimg.com - whatsapp_PNG1.png'
function App() {
  return (
    <>
        <div className='whatsapp'>
        <a
          href="https://wa.me/9829779890"
          title="Chat with us on WhatsApp"

        >
          <img src={Whatsapp} alt=''/>
          
        </a>
      </div>
    <div className="App">
      <section id='HomePage'>
       <Navbar/>
       <Home/>
      </section>
      <section  id='Services'><Services/></section>
      <section id='Works'></section>
      <section  id='About'><About/></section>
      <section  id='Contact'><Contact/></section>
      
      
    </div>
    </>
  );
}

export default App;
