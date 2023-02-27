import './App.css';
import Header from './Header.js';
import Hero from './Hero.js';
import About from './About.js';
import React, {useState, useEffect} from 'react';

function App() {
  const [dark,setDark] = useState(true);
  const onClick = () => {
    setDark(!dark);
  }
  return (
    <div className='container mx-auto'>
        <Header onClick={onClick}/>
        <Hero />
        {/* about us section */}
        <About />
      </div>
  );
}

export default App;
