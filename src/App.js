import './App.css';
import Contact from './Components/Contact/Contact';
import Home from './Components/HomePage/Home';
import Navbar from './Components/Navbar/Navbar'
import Parallax from './Components/Parallax/Parallax';
import Services from './Components/Services/Services';
function App() {
  return (
    <div className="App">
      <section id='HomePage'>
       <Navbar/>
       <Home/>
      </section>
      <section  id='Services'><Services/></section>
      <section><Parallax type="we did"/></section>
      <section  id='About'>Blockchain</section>
      <section>IOT</section>
      <section  id='Contact'><Contact/></section>
    </div>
  );
}

export default App;
