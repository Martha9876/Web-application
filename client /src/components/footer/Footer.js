
import React from 'react'
import './Footer.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
    return (
      <footer>
    
     
  <p className="footer-title">About company</p>
  <p className="info">The development of this diagnostic tool  will help a diagnoitic test designer to create a quiz. 
 </p>
 
  <p className="info"> Emails us- developquiz@quizMaker.com</p>
  <p className="info">Telephone (+44) 123 4567</p>
  <div className="footer-social-container">
      <div>
          <a href="/product" className="social-link">Terms & services</a>
          <a href="/product" className="social-link">privacy page</a>
          <a href="/about" className="social-link">About Us </a>
         <a href="/contact" className="social-link">Contact Us</a>
      </div>
      <div>
          <a href="https://www.facebook.com" target="_blank"><i className="fab fa-facebook"></i> Facebook </a>
    
        
   
          <a href="https://twitter.com" target="_blank"><i className="fab fa-twitter"></i> Twitter </a>
          <a href="http://www.instagram.com" target="_blank"><i className="fab fa-instagram"></i> Instagram</a>
      </div>
  </div>
  <p className="footer-credit">Best apparels online Web based diagnostic tool test creater</p>
  </footer>
      );
    }
      

export default Footer
