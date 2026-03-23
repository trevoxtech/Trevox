import React from 'react';
import './App.css';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Tools from './components/Tools';
import Feedback from './components/Feedback';

import Footer from './components/Footer';

import ScrollReveal from './components/ScrollReveal';

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <Navbar />
        <Hero />
        <ScrollReveal>
          <About />
        </ScrollReveal>
        <ScrollReveal>
          <Services />
        </ScrollReveal>
        <ScrollReveal>
          <Portfolio />
        </ScrollReveal>
        <ScrollReveal>
          <Contact />
        </ScrollReveal>
        <ScrollReveal>
          <Tools />
        </ScrollReveal>
        <ScrollReveal>
          <Feedback />
        </ScrollReveal>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;


