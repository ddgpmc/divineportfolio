import React, { useEffect } from 'react';
import './About.css'; // Import the CSS for styling
import profilePic from '../src/assets/picprof.png'; // Import your image
import CVdivs from './assets/DIV_CV.pdf';

function About() {

  // UseEffect to add loading animation
  useEffect(() => {
    const bars = document.querySelectorAll('.loading-bar');
    bars.forEach((bar) => {
      const width = bar.getAttribute('data-skill');
      bar.style.width = '0%';
      setTimeout(() => {
        bar.style.width = width;
      }, 300); // Delay to allow smooth animation after rendering
    });
  }, []);

  return (
    <div>
      {/* About Section */}
      <section id="about" className="about-container">
        <img src={profilePic} alt="Divine Cabigting" className="profile-picture" />
        <div className="about-text">
          <h2>Hello, I'm Divine!</h2>
          <p>
            Hi, I’m Divine Cabigting, a passionate Developer with a keen interest in web and application development.
            With over 3 years of experience in the IT industry, I specialize in design and front-end development.
          </p>
          <a href={CVdivs} className="download-cv" download>Download CV</a>
        </div>
      </section>

      {/* My Tech Stack Section */}
      <section id="tech-stack" className="tech-stack-section">
        <h3 className="tech-stack-title">My Tech Stack</h3>
        <div className="tech-stack-container">
          {[
            { skill: "HTML/CSS", level: "90%" }, // 9/10
            { skill: "JavaScript", level: "70%" }, // 7/10
            { skill: "ReactJS", level: "70%" }, // 7/10
            { skill: "Laravel", level: "80%" }, // 8/10
            { skill: "PHP", level: "70%" }, // 7/10
            { skill: ".NET", level: "60%" }, // 6/10
            { skill: "C#", level: "50%" }, // 5/10
            { skill: "Next.js", level: "80%" }, // 8/10
            { skill: "Node.js", level: "90%" }, // 9/10
            { skill: "TypeScript", level: "70%" }, // 7/10
            { skill: "WordPress", level: "70%" }, // 7/10
          ].map((item, index) => (
            <div className="skill-item" key={index}>
              <span>{item.skill}</span>
              <div className="progress-bar">
                <div className="loading-bar" data-skill={item.level}></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="education-section">
        <h3 className="education-title">Education Background</h3>

        {/* Flex container for education items */}
        <div className="education-container">
          {/* Arellano University */}
          <div className="neumorphic-container education-item">
            <h4>AU-JAS SHS</h4>
            <h4>STEM (2019)</h4>
            <p>High Honors</p>
            <p>Consistent Dean's lister</p>
          </div>

          {/* Technological University of the Philippines */}
          <div className="neumorphic-container education-item">
            <h4>TUP Manila</h4>
            <h4>BSIT (2023)</h4>
            <p>Magna Cum Laude</p>
            <p>2nd Best Thesis Awardee</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
