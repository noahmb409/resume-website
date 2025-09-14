import React from 'react';

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <h2>Contact Information</h2>
      <p>Email: <a href="mailto:noah@example.com">noah@example.com</a></p>
      <div className="social-links">
        <a href="https://github.com/noahm" target="_blank" rel="noopener noreferrer">GitHub</a> |
        <a href="https://www.linkedin.com/in/noahm" target="_blank" rel="noopener noreferrer">LinkedIn</a> |
        <a href="https://instagram.com/noahm" target="_blank" rel="noopener noreferrer">Instagram</a> |
        <a href="https://twitter.com/noahm" target="_blank" rel="noopener noreferrer">Twitter</a>
      </div>
    </section>
  );
}
