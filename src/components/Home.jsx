import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

export default function Home() {
  return (
    <section className="home">
      <h1>Hello, I'm Noah</h1>
      <p>
        Full-Stack Developer & Computer Science Student passionate about creating 
        innovative solutions. I specialize in software development, cybersecurity, 
        and building impactful applications.
      </p>
      <div className="home-links">
        <Link to="projects" className="home-button">View My Projects</Link>
        <Link to="contact" className="home-button">Get in Touch</Link>
      </div>
    </section>
  );
}
