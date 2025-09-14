import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <section className="home">
      <h1>Hello, I'm Noah</h1>
      <p>Welcome to my personal website! I'm a passionate developer and lifelong learner.</p>
      <div className="home-links">
        <Link to="/projects" className="home-button">View My Projects</Link>
        <Link to="/contact" className="home-button">Get in Touch</Link>
      </div>
    </section>
  );
}
