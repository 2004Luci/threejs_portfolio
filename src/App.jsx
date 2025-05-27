import Navbar from './sections/Navbar.jsx';
import Hero from './sections/Hero.jsx';
import About from './sections/About.jsx';
import Projects from './sections/Projects.jsx';
// import Clients from './sections/Clients.jsx;'
import Experience from './sections/Experience.jsx';
import Contact from './sections/Contact.jsx';
import Footer from './sections/Footer.jsx';

import { useEffect } from 'react';
import Lenis from 'lenis';

const App = () => {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, [])

  return (
    <main className='max-w-7xl mx-auto'>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      {/* <Clients /> */}
      <Experience />
      <Contact />
      <Footer />
    </main>
  )
}

export default App
