import React, { useEffect } from 'react';
import './Bio.css';

export default function Bio() {
  useEffect(() => {
    // Add LinkedIn badge script
    const script = document.createElement('script');
    script.src = 'https://platform.linkedin.com/badges/js/profile.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="bio" id="bio">
      <h2>Professional Bio</h2>
      <p>I am a software developer with experience in web and backend development. I enjoy building scalable solutions and collaborating with diverse teams.</p>
      <div className="linkedin-section">
        <a href="https://www.linkedin.com/in/noah-berry-32700825a/" 
           target="_blank" 
           rel="noopener noreferrer"
           className="linkedin-link">
          View my LinkedIn
        </a>
        <div className="badge-base LI-profile-badge" 
             data-locale="en_US" 
             data-size="medium" 
             data-theme="dark" 
             data-type="VERTICAL" 
             data-vanity="noah-berry-32700825a" 
             data-version="v1">
        </div>
      </div>
    </section>
  );
}
