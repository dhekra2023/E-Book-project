import React from 'react';
import './footer.css'; 

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>&copy; {new Date().getFullYear()} Book Library. All rights reserved.</p>
        <p>
          <a  className="footer-link">Privacy Policy</a> | 
          <a  className="footer-link"> Terms of Service</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
