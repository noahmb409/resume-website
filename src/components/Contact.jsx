import React from 'react';
import { FiMail, FiPhone, FiGithub, FiLinkedin, FiInstagram, FiTwitter } from 'react-icons/fi';
import './Contact.css';

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <h2>Contact Information</h2>
      <div className="contact-info">
        <div className="contact-item">
          <FiMail />
          <a href="mailto:noahmb409@gmail.com">noahmb409@gmail.com</a>
        </div>
        <div className="contact-item">
          <FiPhone />
          <a href="tel:+12566316722">+1 (256) 631-6722</a>
        </div>
      </div>
      <div className="social-links">
        <a href="https://github.com/noahmb409" 
           className="social-link"
           target="_blank" 
           rel="noopener noreferrer">
          <FiGithub />
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/noah-berry-32700825a/" 
           className="social-link"
           target="_blank" 
           rel="noopener noreferrer">
          <FiLinkedin />
          LinkedIn
        </a>
        <a href="https://www.instagram.com/noahmb300/" 
           className="social-link"
           target="_blank" 
           rel="noopener noreferrer">
          <FiInstagram />
          Instagram
        </a>
        <a href="https://x.com/noahmb300" 
           className="social-link"
           target="_blank" 
           rel="noopener noreferrer">
          <FiTwitter />
          Twitter
        </a>
      </div>
    </section>
  );
}