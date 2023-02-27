import './App.css';
import Header from './Header.js';
import Hero from './Hero.js';
import About from './About.js';

function App() {
  return (
    <div className='container mx-auto'>
      <Header />
      <Hero />
      {/* about us section */}
      <About />
    </div>
  );
}

export default App;
