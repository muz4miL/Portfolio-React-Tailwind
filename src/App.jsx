import Navbar from './Components/Navbar';
import { useEffect, useState } from 'react';
import Hero from './Components/Hero';
import AboutMe from './Components/AboutMe';
import Resume from './Components/Resume';
import Projects from './Components/Projects';
import Contact from './Components/Contact';

function App() {
  const [bgVisible, setBgVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setBgVisible(true);
    }, 100);
  }, []);

  return (
    <div
      className={`min-h-screen w-full transition-colors duration-1000 ${bgVisible ? 'bg-black' : 'bg-transparent'}`}
    >
      <Navbar />
      <Hero />
      <AboutMe />
      <Resume />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
