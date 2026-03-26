import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{
      borderTop: '1px solid var(--border-glass)',
      padding: '2rem 0',
      marginTop: '4rem',
      backgroundColor: 'rgba(10, 10, 14, 0.8)',
      backdropFilter: 'blur(10px)'
    }}>
      <div className="container" style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '1rem'
      }}>
        <div className="social-links" style={{ display: 'flex', gap: '1.5rem' }}>
          <a href="https://github.com/Ishika2626" target="_blank" rel="noreferrer" style={{ color: 'var(--text-secondary)' }}>
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/ishika-jariwala-2b2557236?utm_source=share_via&utm_content=profile&utm_medium=member_ios" target="_blank" rel="noreferrer" style={{ color: 'var(--text-secondary)' }}>
            LinkedIn
          </a>
        </div>

        <p style={{ textAlign: 'center', color: 'var(--text-secondary)', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
          © {currentYear} Ishika Jariwala. Built with <span style={{color: '#ef4444'}}>❤</span>.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
