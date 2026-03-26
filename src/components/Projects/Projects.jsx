import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './Projects.css';

const projects = [
  {
    id: 1,
    title: 'Interior Design Portfolio',
    description: 'A professional showcase for interior design work, featuring high-quality image galleries and a clean, modern aesthetic.',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80',
    tags: ['React', 'Framer Motion', 'Vanilla CSS'],
    github: '#',
    demo: 'https://darshjariwalainteriorportfolio.netlify.app'
  },
  {
    id: 2,
    title: 'Ecommerce Platform',
    description: 'A comprehensive online shopping platform with product categories, cart functionality, and integrated payment gateways.',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80',
    tags: ['React', '.NET', 'SQL Server', 'Web API'],
    github: '#',
    demo: '#'
  },
  {
    id: 3,
    title: 'Hospital Management System',
    description: 'An efficient system for managing patient records, appointments, and hospital resources with a user-friendly interface.',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80',
    tags: ['Angular', '.NET Core', 'EF Core', 'SQL'],
    github: '#',
    demo: '#'
  }
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="projects section-padding">
      <div className="container" ref={ref}>
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Featured <span className="text-gradient">Projects</span></h2>
          <div className="divider"></div>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div 
              key={project.id}
              className="project-card glass-panel"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} loading="lazy" />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href={project.github} target="_blank" rel="noreferrer" className="glass-panel" aria-label="Github link" style={{textDecoration: 'none', padding: '0 10px', width: 'auto'}}>
                      <span style={{fontSize: '14px', fontWeight: 'bold'}}>GitHub</span>
                    </a>
                    <a href={project.demo} target="_blank" rel="noreferrer" className="glass-panel" aria-label="Live demo link" style={{textDecoration: 'none', padding: '0 10px', width: 'auto'}}>
                      <span style={{fontSize: '18px', fontWeight: 'bold'}}>↗</span>
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map(tag => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
