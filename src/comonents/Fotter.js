import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <a href="https://github.com/yourusername" className="hover:text-blue-400">GitHub</a>
        <a href="https://linkedin.com/in/yourusername" className="hover:text-blue-400">LinkedIn</a>
        <a href="mailto:youremail@gmail.com" className="hover:text-blue-400">Gmail</a>
        <a href="tel:+1234567890" className="hover:text-blue-400">Phone</a>
      </div>
    </footer>
  );
};

export default Footer;
