import './App.css';
import About from './Components/AboutTeam/About';
import Contact from './Components/Contact/Contact';

import Home from './Components/HomePage/Home';
import Navbar from './Components/Navbar/Navbar'
import Services from './Components/Services/Services';
function App() {
  return (
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
  );
}

export default App;
