import React, { useEffect, useState } from 'react';
import './Home.css';
import profilePicture from './assets/picprof.png';
import profileAfterWork from './assets/d2.jpg';
import CVdivs from './assets/cabigting_cvprojs.pdf';

function Home() {
  const [text, setText] = useState('');
  const name = "Divine";
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      setText(name.slice(0, index + 1));
      index++;

      if (index === name.length) {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="hero">
      <div className="hero-content">

        <div
          className={`hero-image ${isHovered ? 'active' : ''}`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <img className="default-img" src={profilePicture} alt="Divine Cabigting" />
          <img className="hover-img" src={profileAfterWork} alt="Divine after work" />
        </div>

        <div className="hero-text">
          <h1 className="hero-title">
            <span className="hi">Hi,</span> I’m{" "}
            <span className="name-wrapper">
              <span className={`name ${text === name ? "done" : "typing"}`}>
                {text}
              </span>

              <span className="name-bubble">
                Divine • Divino • Divin • Divina • 神圣 • दिव्य • إلهي • 神聖
              </span>
            </span>
          </h1>

          <h3>Website Developer & Designer</h3>

          <p>
            I’m a full-stack web developer and designer with over 4 years of professional experience, having started my career while completing my degree as a Magna Cum Laude at the Technological University of the Philippines. I build structured, user-centered web applications and craft thoughtful designs, with a growing focus on AI-driven solutions.
          </p>

          <div className="button-group">
            <a href={CVdivs} className="cv-button" download>
              Download CV
            </a>

            <a href="https://calendly.com/divinecabigting12345/30min" target="_blank" className="cv-button secondary">
              Book A Call
            </a>
          </div>

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
            <a href="mailto:divinecabigting12345@gmail.com" className="social-link">
              <i className="fa fa-envelope"></i>
            </a>

          </div>
        </div>

      </div>
    </section>
  );
}

export default Home;