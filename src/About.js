import React, { useEffect } from 'react';
import './About.css';
import profilePic from '../src/assets/picprof.png';
import CVdivs from './assets/CABIGTING_CVPROJECTS.pdf';

function About() {

  useEffect(() => {
    const bars = document.querySelectorAll('.loading-bar');
    bars.forEach((bar) => {
      const width = bar.getAttribute('data-skill');
      bar.style.width = '0%';
      setTimeout(() => {
        bar.style.width = width;
      }, 200);
    });
  }, []);

  const skills = [
    { skill: "HTML/CSS", level: "90%" },
    { skill: "JavaScript", level: "75%" },
    { skill: "ReactJS", level: "75%" },
    { skill: "Next.js", level: "80%" },
    { skill: "Node.js", level: "90%" },
    { skill: "TypeScript", level: "75%" },
    { skill: "Laravel", level: "80%" },
    { skill: "PHP", level: "75%" },
    { skill: ".NET", level: "65%" },
    { skill: "WordPress", level: "75%" },
    { skill: "Shopify", level: "70%" },
    { skill: "Salesforce", level: "60%" },
  ];

  return (
    <div className="about-wrapper">

      {/* ABOUT */}
      <section className="about-container">
        <img src={profilePic} alt="Divine Cabigting" className="profile-picture" />

        <div className="about-text">
          <h2>Hi, I'm Divine</h2>
          <p className="subtitle">Full Stack Developer • UI/UX Enthusiast</p>

          <p>
            Magna Cum Laude graduate from TUP with 4+ years of experience building
            structured, scalable, and user-centered web applications.
          </p>

          <p>
            I combine development and design to create systems that are not only
            functional, but intuitive and visually refined.
          </p>

          <p>
            Currently exploring AI automation and smart workflows to build more
            forward-thinking digital solutions.
          </p>

          <a href={CVdivs} className="download-cv" download>
            Download CV
          </a>
        </div>
      </section>

      {/* TECH STACK */}
      <section className="tech-stack-section">
        <h3 className="section-title">Tech Stack</h3>

        <div className="tech-stack-container">
          {skills.map((item, index) => (
            <div className="skill-item" key={index}>
              <div className="skill-header">
                <span>{item.skill}</span>
                <span className="skill-percent">{item.level}</span>
              </div>

              <div className="progress-bar">
                <div className="loading-bar" data-skill={item.level}></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* EDUCATION */}
      <section className="education-section">
        <h3 className="section-title">Education</h3>

        <div className="education-container">
          <div className="edu-card">
            <h4>Arellano University</h4>
            <span>STEM • 2019</span>
            <p>High Honors</p>
            <p>Consistent Dean’s Lister</p>
          </div>

          <div className="edu-card">
            <h4>TUP Manila</h4>
            <span>BSIT • 2023</span>
            <p>Magna Cum Laude</p>
            <p>2nd Best Thesis Award</p>
          </div>
        </div>
      </section>

    </div>
  );
}

export default About;