import React from 'react';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Journey from './components/Journey';
import CodingProfiles from './components/CodingProfiles';
import TechMatrix from './components/TechMatrix';
import Projects from './components/Projects';
import ContentHub from './components/ContentHub';
import Contact from './components/Contact';
import MegaFooter from './components/MegaFooter';
import Footer from './components/Footer';
import DockNav from './components/DockNav';

gsap.registerPlugin(ScrollToPlugin);

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Journey />
      <TechMatrix />
       {/* <CodingProfiles /> */}
      <Projects />
      <ContentHub />
      <Contact />
      <MegaFooter />
      <Footer />
      <DockNav />
    </div>
  );
}

export default App;