import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import './About.css';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skills = [
    { name: '.NET (Core / Web API)', level: 85 },
    { name: 'SQL & Database Management', level: 80 },
    { name: 'React', level: 90 },
    { name: 'Angular', level: 85 },
    { name: 'JavaScript & HTML/CSS', level: 95 },
  ];

  return (
    <section id="about" className="about section-padding">
      <div className="container" ref={ref}>
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">About <span className="text-gradient">Me</span></h2>
          <div className="divider"></div>
        </motion.div>

        <div className="about-content">
          <motion.div 
            className="about-text"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="lead">
              I am a Junior Software Engineer with a solid foundation in both frontend and backend development.
            </p>
            <p>
              My expertise spans modern web technologies including React, Angular, and .NET. I build scalable and interactive applications, constantly learning and applying new architectural patterns to deliver seamless user experiences.
            </p>
            
            <div className="stats-grid">
              <div className="stat-item glass-panel">
                <div style={{fontSize: '32px', marginBottom: '1rem'}}>💻</div>
                <h4>10+</h4>
                <p>Projects Built</p>
              </div>
              <div className="stat-item glass-panel">
                <div style={{fontSize: '32px', marginBottom: '1rem'}}>📖</div>
                <h4>Daily</h4>
                <p>Continuous Learner</p>
              </div>
              <div className="stat-item glass-panel">
                <div style={{fontSize: '32px', marginBottom: '1rem'}}>🏆</div>
                <h4>100%</h4>
                <p>Dedication</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="skills-wrapper glass-panel"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3>Technical Skills</h3>
            <div className="skills-list">
              {skills.map((skill, index) => (
                <div key={skill.name} className="skill-item">
                  <div className="skill-info">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <div className="skill-bar-bg">
                    <motion.div 
                      className="skill-bar-fill"
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                      transition={{ duration: 1, delay: 0.5 + (index * 0.1) }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
