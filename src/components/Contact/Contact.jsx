import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import './Contact.css';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const [formStatus, setFormStatus] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus(true);
    setTimeout(() => setFormStatus(false), 3000);
    e.target.reset();
  };

  return (
    <section id="contact" className="contact section-padding">
      <div className="container" ref={ref}>
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Get In <span className="text-gradient">Touch</span></h2>
          <div className="divider"></div>
        </motion.div>

        <div className="contact-wrapper">
          <motion.div 
            className="contact-info glass-panel"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3>Let's build something amazing together!</h3>
            <p>I'm currently looking for new opportunities. Whether you have a question, a project idea, or just want to say hi, I'll try my best to get back to you!</p>
            
            <div className="info-items">
              <div className="info-item">
                <div className="icon-box glass-panel text-gradient" style={{fontSize: '24px'}}>
                  ✉
                </div>
                <div>
                  <h4>Email</h4>
                  <a href="mailto:ishikaaa.jariwala@gmail.com">ishikaaa.jariwala@gmail.com</a>
                </div>
              </div>
              
              <div className="info-item">
                <div className="icon-box glass-panel text-gradient" style={{fontSize: '24px'}}>
                  📍
                </div>
                <div>
                  <h4>Location</h4>
                  <p>Remote / India</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.form 
            className="contact-form glass-panel"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" required placeholder="John Doe" />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" required placeholder="john@example.com" />
            </div>
            
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" required placeholder="Project Idea" />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" rows="5" required placeholder="Hello, I'd like to talk about..."></textarea>
            </div>
            
            <button type="submit" className="btn btn-primary submit-btn">
              {formStatus ? 'Message Sent!' : (
                <>Send Message <span style={{marginLeft: '8px'}}>➤</span></>
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
