import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  const location = useLocation();

  const getActiveClass = (path) => {
    if (path === '/' && location.hash === '') return 'active';
    return location.hash === `#${path}` ? 'active' : '';
  };

  return (
    <nav className="navbar">
      <div className="nav-brand">
        <Link to="/">Noah's Portfolio</Link>
      </div>
      <div className="nav-links">
        <Link to="/" className={getActiveClass('/')}>
          Home
        </Link>
        <Link to="/projects" className={getActiveClass('/projects')}>
          Projects
        </Link>
        <Link to="/bio" className={getActiveClass('/bio')}>
          Bio
        </Link>
        <Link to="/resume" className={getActiveClass('/resume')}>
          Resume
        </Link>
        <Link to="/contact" className={getActiveClass('/contact')}>
          Contact
        </Link>
      </div>
    </nav>
  );
}