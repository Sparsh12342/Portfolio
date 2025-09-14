import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ project }) => {
  const handleClick = () => {
    window.open(project.url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="project-card" onClick={handleClick}>
      <div className="project-image">
        <img src={project.image} alt={project.title} />
        <div className="project-overlay">
          <span className="visit-text">Visit Project</span>
        </div>
      </div>
      
      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
        
        <div className="project-technologies">
          {project.technologies.map((tech, index) => (
            <span key={index} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
