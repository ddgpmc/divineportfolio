import React, { useState } from 'react';
import './Projects.css';

//  UI/UX images
import esagipImage from './assets/UIUX/esagip.png'; // Example: replace with actual image path
import telegramRedesign from './assets/UIUX/telegram.png';
import bookpass from'./assets/UIUX/bookpass.png';
import beneath from'./assets/UIUX/beneath.png';
import mappiya from './assets/UIUX/mappiy.png';
import esagipweb from './assets/UIUX/esagipweb.png'

// Development
import acctDevelopment from './assets/development/accty.png';
import esagipDevelopment from './assets/development/esagipdev.png';
import homsDevelopment from './assets/development/homs.png';
import awuDevelopment from './assets/development/awufdn.png';
import digiDevelopment from './assets/development/digipath.png';

// Graphic Design Images
import graphicDesign1 from './assets/graphics/11.png';
import graphicDesign2 from './assets/graphics/12.png';
import graphicDesign3 from './assets/graphics/13.png';
import graphicDesign4 from './assets/graphics/14.png';
import graphicDesign5 from './assets/graphics/15.png';
import graphicDesign6 from './assets/graphics/16.png';
import graphicDesign7 from './assets/graphics/17.png';
import graphicDesign8 from './assets/graphics/18.png';
import graphicDesign9 from './assets/graphics/19.png';
import graphicDesign10 from './assets/graphics/20.png';
import graphicDesign11 from './assets/graphics/21.png';
import graphicDesign12 from './assets/graphics/22.png';
import graphicDesign13 from './assets/graphics/23.png';
import graphicDesign14 from './assets/graphics/24.png';
import graphicDesign15 from './assets/graphics/25.png';
import graphicDesign16 from './assets/graphics/26.png';
import graphicDesign17 from './assets/graphics/27.png';
import graphicDesign18 from './assets/graphics/28.png';



// Updated project list with specified quantities for each category
const projects = [
  // Development Projects (5)
  {
    id: 1,
    title: 'E-SAGIP',
    description: 'Designed and Developed the E-SAGIP Application. The app is an emergency response application tailored for barangay-level deployment.',
    image: esagipDevelopment, // Replace with actual image path or URL
    category: 'Development',
  },
  {
    id: 2,
    title: 'HOMS Website',
    description: 'A comprehensive system for managing properties, tenants, and payments.',
    image: homsDevelopment, // Replace with actual image path or URL
    category: 'Development',
  },
  {
    id: 3,
    title: 'AWU Foundation Website',
    description: 'An online booking system for hotel reservations with integrated payments.',
    image: awuDevelopment, // Replace with actual image path or URL
    category: 'Development',
  },
  {
    id: 4,
    title: 'Digipath Solutions Website',
    description: 'A system that streamlines school operations, student enrollment, and grading.',
    image: digiDevelopment, // Replace with actual image path or URL
    category: 'Development',
  },
  {
    id: 23,
    title: 'Accounting Management System',
    description: 'A system that streamlines school operations, student enrollment, and grading.',
    image: acctDevelopment, // Replace with actual image path or URL
    category: 'Development',
  },

  // UI/UX Design Projects (7)
  {
    id: 6,
    title: 'E-SAGIP UI/UX',
    description: 'Designed the user interface and experience for the E-SAGIP app.',
    image: esagipImage, // Replace with actual image path or URL
    category: 'UI/UX Design',
  },
  {
    id: 7,
    title: 'Telegram Redesign UI/UX',
    description: 'Crafted a user-friendly dashboard for property owners and managers.',
    image: telegramRedesign, // Replace with actual image path or URL
    category: 'UI/UX Design',
  },
  {
    id: 8,
    title: 'BookPass UI/UX',
    description: 'Designed the interface for a mobile-first e-commerce platform.',
    image: bookpass, // Replace with actual image path or URL
    category: 'UI/UX Design',
  },
  {
    id: 9,
    title: 'Mappiya Delivery App UI/UX',
    description: 'Created a clean and intuitive UI for finance management.',
    image: mappiya, // Replace with actual image path or URL
    category: 'UI/UX Design',
  },
  {
    id: 10,
    title: 'Beneath Minting Website UI/UX',
    description: 'Developed a minimalist design for a social media networking app.',
    image: beneath, // Replace with actual image path or URL
    category: 'UI/UX Design',
  },
  {
    id: 11,
    title: 'E-SAGIP Website UI/UX',
    description: 'User-friendly interface for an online education platform.',
    image: esagipweb, // Replace with actual image path or URL
    category: 'UI/UX Design',
  },

  // Graphic Design Projects (10) - Only images, no titles or descriptions
  {
    id: 13,
    image: graphicDesign1,
    category: 'Graphic Design',
  },
  {
    id: 14,
    image: graphicDesign2,
    category: 'Graphic Design',
  },
  {
    id: 15,
    image: graphicDesign3,
    category: 'Graphic Design',
  },
  {
    id: 16,
    image: graphicDesign4,
    category: 'Graphic Design',
  },
  {
    id: 17,
    image: graphicDesign5,
    category: 'Graphic Design',
  },
  {
    id: 18,
    image: graphicDesign6,
    category: 'Graphic Design',
  },
  {
    id: 19,
    image: graphicDesign7,
    category: 'Graphic Design',
  },
  {
    id: 20,
    image: graphicDesign8,
    category: 'Graphic Design',
  },
  {
    id: 21,
    image: graphicDesign9,
    category: 'Graphic Design',
  },
  {
    id: 22,
    image: graphicDesign10,
    category: 'Graphic Design',
  },
  {
    id: 22,
    image: graphicDesign11,
    category: 'Graphic Design',
  },
  {
    id: 22,
    image: graphicDesign12,
    category: 'Graphic Design',
  },
  {
    id: 22,
    image: graphicDesign13,
    category: 'Graphic Design',
  },
  {
    id: 22,
    image: graphicDesign14,
    category: 'Graphic Design',
  },
  {
    id: 22,
    image: graphicDesign15,
    category: 'Graphic Design',
  },
  {
    id: 22,
    image: graphicDesign16,
    category: 'Graphic Design',
  },
  {
    id: 22,
    image: graphicDesign17,
    category: 'Graphic Design',
  },
  {
    id: 22,
    image: graphicDesign18,
    category: 'Graphic Design',
  },
];

function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="projects-page">
      <h1 className="page-title">My Projects</h1>

      {/* Category Filter Buttons */}
      <div className="filter-buttons">
        <button onClick={() => handleCategoryChange('All')} className={selectedCategory === 'All' ? 'active' : ''}>
          All
        </button>
        <button onClick={() => handleCategoryChange('Development')} className={selectedCategory === 'Development' ? 'active' : ''}>
          Development Projects
        </button>
        <button onClick={() => handleCategoryChange('UI/UX Design')} className={selectedCategory === 'UI/UX Design' ? 'active' : ''}>
          UI/UX Designs
        </button>
        <button onClick={() => handleCategoryChange('Graphic Design')} className={selectedCategory === 'Graphic Design' ? 'active' : ''}>
          Graphic Designs
        </button>
      </div>

      <div className="projects-grid">
        {filteredProjects.map(project => (
          <div key={project.id} className="project-card">
            <img src={project.image} alt={project.title} className="project-image" />
            {project.category !== 'Graphic Design' && (
              <>
                <h2 className="project-title">{project.title}</h2>
                <p className="project-description">{project.description}</p>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
