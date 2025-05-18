// src/Home.js

import React from 'react';
import './Home.css';
import profilePicture from './assets/picprof.png'; 
import CVdivs from './assets/DIV_CV.pdf';

function Home() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="hero-image">
          <img src={profilePicture} alt="Divine Cabigting" />
        </div>
        <div className="hero-text">
          <h1>DIVINE</h1>
          <h3>Website Developer & Designer</h3>
          <p>
            Hi, I’m Divine Cabigting, a passionate Developer with a keen interest in web and application development.
            With over 3 years of experience in the IT industry, I specialize in design and front-end development.
          </p>
          <a href={CVdivs} className="cv-button" download>Download CV</a>
          <div className="social-links">
            <a href="https://www.linkedin.com/in/divinecabigting/" className="social-link">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://www.github.com/ddgpmc" className="social-link">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.instagram.com/ddgpmc_" className="social-link">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://t.me/@dcabigting" className="social-link">
              <i className="fab fa-telegram"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
