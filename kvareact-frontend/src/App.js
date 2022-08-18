import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar'
import ParallaxComp from './components/ParallaxComp';
import Photography from './components/Photography';
import Videography from './components/Videography';

function App() {
  return (
    <div className="App">
      <ParallaxComp />
      <Navbar />
      <About />
      <Photography />
      <Videography />
      <Contact />
    </div>
  );
}

export default App;
