import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
  const words = "Ishika Jariwala".split("");
  
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <section id="home" className="hero section-padding">
      <div className="container hero-container">
        <div className="hero-content">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="subtitle"
          >
            <span className="sparkle">✨</span> Hello World, I'm
          </motion.div>
          
          <motion.h1 
            variants={container}
            initial="hidden"
            animate="visible"
            className="title"
            style={{ display: "flex", flexWrap: "wrap", overflow: "hidden" }}
          >
            {words.map((word, index) => (
              <motion.span
                variants={child}
                key={index}
                className={index < 6 ? "text-gradient" : ""}
                style={{ marginRight: word === " " ? "15px" : "1px" }}
              >
                {word}
              </motion.span>
            ))}
            <br />
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              style={{ fontSize: "0.5em", display: "block", marginTop: "10px", color: "var(--text-primary)" }}
            >
              Jr. Software Engineer
            </motion.span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.8 }}
            className="description"
          >
            Specializing in .NET, Angular, and React. I architect robust solutions and craft immersive digital experiences with modern tech stacks.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2.0 }}
            className="cta-group"
          >
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact" 
              className="btn btn-primary"
            >
              Contact Me <span style={{marginLeft: '8px'}}>→</span>
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#projects" 
              className="btn btn-secondary glass-panel"
            >
              Explore Projects
            </motion.a>
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="hero-image-wrapper"
        >
          <div className="abstract-shape">
             <motion.div 
               animate={{ rotate: 360 }}
               transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
               className="orbit-element"
             ></motion.div>
          </div>
          <motion.div 
            whileHover={{ y: -10 }}
            className="glass-card tech-stack"
          >
            <h3>Core Stack</h3>
            <div className="tags">
              <span>.NET</span>
              <span>SQL Server</span>
              <span>React</span>
              <span>Angular</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
