import React from 'react';

const projects = [
  {
    title: 'Project One',
    description: 'The repo for this website.',
    technologies: ['React', 'Vite', 'CSS', 'JavaScript'],
    github: 'https://github.com/noahmb409/resume-website',
    screenshot: '', // Add image path or demo link
  },
  {
    title: 'Project Two',
    description: 'The repo for some AI experiments done in AI class.',
    technologies: ['Python', 'JSON'],
    github: 'https://github.com/noahmb409/cosc470',
    screenshot: '',
  },
  {
    title: 'Project Three',
    description: 'The repo from my advanced java class.',
    technologies: ['Java', 'Superclasses', 'Inheritance hierarchy'],
    github: 'https://github.com/noahmb409/COSC310',
    screenshot: '',
  },
];

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <h2>GitHub Projects</h2>
      <div className="project-list">
        {projects.map((proj, idx) => (
          <div className="project" key={idx}>
            <h3>{proj.title}</h3>
            <p>{proj.description}</p>
            <p><strong>Technologies:</strong> {proj.technologies.join(', ')}</p>
            <a href={proj.github} target="_blank" rel="noopener noreferrer">GitHub Repo</a>
            {proj.screenshot && <img src={proj.screenshot} alt={proj.title + ' screenshot'} />}
          </div>
        ))}
      </div>
    </section>
  );
}
