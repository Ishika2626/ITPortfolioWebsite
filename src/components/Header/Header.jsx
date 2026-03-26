import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Header.css';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? 'glass-panel header-scrolled' : ''}`}>
      <div className="container header-container">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          whileHover={{ scale: 1.05 }}
          className="logo"
          style={{ cursor: 'pointer' }}
        >
          <span className="text-gradient" style={{ fontFamily: 'var(--font-mono)', fontWeight: '800' }}>
            {"{ "} 
            <motion.span
              animate={{ color: ['var(--accent-purple)', 'var(--accent-blue)', 'var(--accent-purple)'] }}
              transition={{ repeat: Infinity, duration: 4 }}
            >
              Ishika
            </motion.span>
            {" }"}
          </span>
        </motion.div>

        {/* Desktop Nav */}
        <nav className="desktop-nav">
          <ul className="nav-list">
            {navItems.map((item, index) => (
              <motion.li
                key={item.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <a href={item.href} className="nav-link">{item.name}</a>
              </motion.li>
            ))}
          </ul>
        </nav>

        {/* Social Links & Mobile Menu Button */}
        <div className="header-actions">
          <div className="social-links desktop-only">
            <motion.a whileHover={{ y: -3, color: 'var(--accent-purple)' }} href="https://github.com/Ishika2626" target="_blank" rel="noreferrer">GitHub</motion.a>
            <motion.a whileHover={{ y: -3, color: 'var(--accent-blue)' }} href="https://www.linkedin.com/in/ishika-jariwala-2b2557236?utm_source=share_via&utm_content=profile&utm_medium=member_ios" target="_blank" rel="noreferrer">LinkedIn</motion.a>
          </div>

          <button className="mobile-menu-btn" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <span style={{ fontSize: '24px' }}>✕</span> : <span style={{ fontSize: '24px' }}>☰</span>}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.nav
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="mobile-nav glass-panel"
        >
          <ul className="mobile-nav-list">
            {navItems.map((item) => (
              <li key={item.name}>
                <a href={item.href} onClick={() => setIsOpen(false)}>{item.name}</a>
              </li>
            ))}
          </ul>
        </motion.nav>
      )}
    </header>
  );
};

export default Header;
