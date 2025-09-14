import React from 'react';
import Home from './components/Home';
import Projects from './components/Projects';
import Bio from './components/Bio';
import Resume from './components/Resume';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Home />
      <Projects />
      <Bio />
      <Resume />
      <Contact />
    </div>
  );
}

export default App;
