import React from 'react';

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <h2>Contact Information</h2>
      <p>Email: <a href="mailto:noah@example.com">noah@example.com</a></p>
      <div className="social-links">
        <a href="https://github.com/noahmb409" target="_blank" rel="noopener noreferrer">GitHub</a> |
        <a href="https://www.linkedin.com/in/noah-berry-32700825a/" target="_blank" rel="noopener noreferrer">LinkedIn</a> |
        <a href="https://www.instagram.com/noahmb300/" target="_blank" rel="noopener noreferrer">Instagram</a> |
        <a href="https://x.com/noahmb300" target="_blank" rel="noopener noreferrer">Twitter</a>
      </div>
      <p>Phone: <a href="tel:+12566316722">+1 (256) 631-6722</a></p>
    </section>
  );
}