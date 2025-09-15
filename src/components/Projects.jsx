import React from 'react';

const projects = [
  {
    title: 'Project One',
    description: 'A cool project about X.',
    technologies: ['React', 'Vite', 'CSS'],
    github: 'https://github.com/noahmb409/resume-website',
    screenshot: '', // Add image path or demo link
  },
  {
    title: 'Project Two',
    description: 'Another awesome repo.',
    technologies: ['Node.js', 'Express'],
    github: 'https://github.com/noahmb409/cosc470',
    screenshot: '',
  },
  {
    title: 'Project Three',
    description: 'A third project with impact.',
    technologies: ['Python', 'Flask'],
    github: 'https://github.com/noahm/project-three',
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
