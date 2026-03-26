import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './Experience.css';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences = [
    {
      role: 'Jr. Software Engineer',
      company: 'Engross Infotech',
      location: 'Surat, Gujarat',
      period: 'July 2025 - Present',
      description: 'Developing scalable web applications using React, Angular, and .NET. Collaborating with cross-functional teams to build beautiful, modern software solutions.',
      type: 'work'
    },
    {
      role: 'Internship',
      company: 'SSM Infotech Solution Pvt Ltd',
      location: 'Surat, Gujarat',
      period: 'Jan 2025 - June 2025',
      description: 'Gained hands-on experience in full-stack development, participating in code reviews, and assisting in the architecture of enterprise web platforms.',
      type: 'work'
    }
  ];

  const education = [
    {
      degree: 'MCA (Master of Computer Applications)',
      institution: 'Department of Computer Science, VNSGU',
      period: '2023 - 2025',
      description: 'Advanced degree focusing on modern software engineering paradigms, database design, and advanced algorithms.',
      type: 'edu'
    },
    {
      degree: 'B.Com (Bachelor of Commerce)',
      institution: 'SPB English Medium College of Commerce',
      period: '2020 - 2023',
      description: 'Solid foundational studies in analytics, enterprise management, and business operations.',
      type: 'edu'
    }
  ];

  return (
    <section id="experience" className="experience section-padding">
      <div className="container" ref={ref}>
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Experience & <span className="text-gradient">Education</span></h2>
          <div className="divider"></div>
        </motion.div>

        <div className="timeline-container">
          {/* Experience Column */}
          <div className="timeline-column">
            <h3 className="timeline-title text-gradient">💼 Work Experience</h3>
            <div className="timeline">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  className="timeline-item glass-panel"
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                  transition={{ duration: 0.6, delay: 0.2 + (index * 0.1) }}
                >
                  <div className="timeline-dot"></div>
                  <span className="timeline-period">{exp.period}</span>
                  <h4 className="timeline-role">{exp.role}</h4>
                  <h5 className="timeline-company">{exp.company} <span className="timeline-location">| {exp.location}</span></h5>
                  
                  <div className="timeline-details">
                    <p>{exp.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education Column */}
          <div className="timeline-column">
            <h3 className="timeline-title text-gradient">🎓 Education</h3>
            <div className="timeline">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  className="timeline-item glass-panel"
                  initial={{ opacity: 0, x: 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                  transition={{ duration: 0.6, delay: 0.4 + (index * 0.1) }}
                >
                  <div className="timeline-dot"></div>
                  <span className="timeline-period">{edu.period}</span>
                  <h4 className="timeline-role">{edu.degree}</h4>
                  <h5 className="timeline-company">{edu.institution}</h5>

                  <div className="timeline-details">
                    <p>{edu.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
