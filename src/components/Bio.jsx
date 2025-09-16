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
      <div className="bio-content">
        <h2>About Me</h2>
        <div className="bio-text">
          <div className="bio-section">
            <h3>Background</h3>
            <p>
              Hello! I'm Noah, a Computer Science student at Samford University from Huntsville, Alabama. 
              I bring a unique blend of athletic discipline and technical expertise as a member of the 
              Samford baseball team.
            </p>
          </div>
          
          <div className="bio-section">
            <h3>Professional Focus</h3>
            <p>
              I'm passionate about software development and cybersecurity, currently pursuing a 
              concentration in cyber security. My goal is to strengthen my expertise through 
              additional certifications and hands-on experience in the field.
            </p>
          </div>

          <div className="bio-section">
            <h3>Skills & Interests</h3>
            <div className="skills-container">
              <div className="skills-row">
                <div className="skill">Software Development</div>
                <div className="skill">Cybersecurity</div>
                <div className="skill">MySQL</div>
              </div>
              <div className="skills-row">
                <div className="skill">Problem Solving</div>
                <div className="skill">Team Collaboration</div>
                <div className="skill">Athletic Leadership</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bio-social">
          <a href="https://www.linkedin.com/in/noah-berry-32700825a/" 
             target="_blank" 
             rel="noopener noreferrer"
             className="linkedin-link">
            Connect on LinkedIn
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
      </div>
    </section>
  );
}
