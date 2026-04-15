import React, { useState } from 'react';
import './Projects.css';

// UI/UX images
import esagipImage from './assets/UIUX/esagip.png';
import telegramRedesign from './assets/UIUX/telegram.png';
import bookpass from './assets/UIUX/bookpass.png';
import beneath from './assets/UIUX/beneath.png';
import mappiya from './assets/UIUX/mappiy.png';
import esagipweb from './assets/UIUX/esagipweb.png';

// New Development
import anetteDevelopment from './assets/development/anetteerickson.jpg';
import flexilabsDevelopment from './assets/development/flexilabs.jpg';
import innovauDevelopment from './assets/development/innovau.jpg';
import hiddenDevelopment from './assets/development/hiddencity.jpg';
import fyrDevelopment from './assets/development/fyr.jpg';
import bfdwebsite from './assets/development/bfdweb.jpg';


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

const projects = [
  // Development Projects

  { id: 1,
    title: 'Brandfox Digital Marketing',
    description: 'Landing page for Brandfox Digital',
    image: bfdwebsite,
    category: 'Development',
  },
    {
    id: 4,
    title: 'Digipath Solutions Website',
    description: 'A system that streamlines school operations, student enrollment, and grading.',
    image: digiDevelopment,
    category: 'Development',
    stack: 'WordPress',
    features: 'Company pages, service showcase, lead capture',
    integrations: 'Yoast SEO, Contact Form 7',
  },
  {
    id: 23,
    title: 'Accounting Management System',
    description: 'A system that streamlines accounting and HR management.',
    image: acctDevelopment,
    category: 'Development',
    stack: 'Laravel PHP, Bootstrap, MySQL',
    features: 'Expense tracking, invoice management, financial reports',
    integrations: 'Chart.js, email export, payment integrations, automations',
  },

  // New Development Projects
  {
    id: 32,
    title: 'Anette',
    description: 'A Shopify website for Anette Erickson.',
    image: anetteDevelopment,
    category: 'Development',
    stack: 'Shopify',
    features: 'Add to Cart, Checkout, E-commerce',
    integrations: 'Payment Gateway',
  },
  {
    id: 33,
    title: 'FlexiLabs',
    description: 'A development project for FlexiLabs.',
    image: flexilabsDevelopment,
    category: 'Development',
    stack: 'WordPress',
    features: 'Landing Page',
  },
  {
    id: 34,
    title: 'Innovation AU',
    description: 'Landing page for Innovation AU.',
    image: innovauDevelopment,
    category: 'Development',
    stack: 'WordPress',
    features: 'Landing Page',
  },
  {
    id: 35,
    title: 'Hidden City Secrets',
    description: 'A development project for Hidden City Secrets.',
    image: hiddenDevelopment,
    category: 'Development',
    stack: 'WordPress',
    features: 'Multiple User Roles, List a Venue, Bookings, Plugin Development',
    integrations: 'Payment integration, Email Marketing, Automations, Database',
  },
  {
    id: 36,
    title: 'FYR',
    description: 'A development project for FYR.',
    image: fyrDevelopment,
    category: 'Development',
    stack: 'WordPress',
    features: 'Add to Cart, Checkout, E-commerce',
    integrations: 'Payment integration',
  },
  {
    id: 12,
    title: 'E-SAGIP',
    description: 'Designed and Developed the E-SAGIP Application. The app is an emergency response application tailored for barangay-level deployment.',
    image: esagipDevelopment,
    category: 'Development',
    stack: 'React, Node.js, MySQL',
    features: 'Emergency alerts, incident reporting, barangay response dashboard',
    integrations: 'Google Maps, SMS/email notifications',
  },
  {
    id: 2,
    title: 'HOMS Website',
    description: 'A comprehensive system for managing properties, tenants, and payments.',
    image: homsDevelopment,
    category: 'Development',
    stack: 'VueJS',
    features: 'Landing Page',
    integrations: 'Email notifications',
  },
  {
    id: 3,
    title: 'AWU Foundation Website',
    description: 'An online booking system for hotel reservations with integrated payments.',
    image: awuDevelopment,
    category: 'Development',
    stack: 'ReactJS',
    features: 'Landing page, contact forms',
    integrations: 'Contact Forms',
  },
  // UI/UX Design Projects
  {
    id: 6,
    title: 'E-SAGIP UI/UX',
    description: 'Designed the user interface and experience for the E-SAGIP app.',
    image: esagipImage,
    category: 'UI/UX Design',
  },
  {
    id: 7,
    title: 'Telegram Redesign UI/UX',
    description: 'Crafted a user-friendly dashboard for property owners and managers.',
    image: telegramRedesign,
    category: 'UI/UX Design',
  },
  {
    id: 8,
    title: 'BookPass UI/UX',
    description: 'Designed the interface for a mobile-first e-commerce platform.',
    image: bookpass,
    category: 'UI/UX Design',
  },
  {
    id: 9,
    title: 'Mappiya Delivery App UI/UX',
    description: 'Created a clean and intuitive UI for finance management.',
    image: mappiya,
    category: 'UI/UX Design',
  },
  {
    id: 10,
    title: 'Beneath Minting Website UI/UX',
    description: 'Developed a minimalist design for a social media networking app.',
    image: beneath,
    category: 'UI/UX Design',
  },
  {
    id: 11,
    title: 'E-SAGIP Website UI/UX',
    description: 'User-friendly interface for an online education platform.',
    image: esagipweb,
    category: 'UI/UX Design',
  },

  // Graphic Design Projects
  { id: 13, image: graphicDesign1, category: 'Graphic Design' },
  { id: 14, image: graphicDesign2, category: 'Graphic Design' },
  { id: 15, image: graphicDesign3, category: 'Graphic Design' },
  { id: 16, image: graphicDesign4, category: 'Graphic Design' },
  { id: 17, image: graphicDesign5, category: 'Graphic Design' },
  { id: 18, image: graphicDesign6, category: 'Graphic Design' },
  { id: 19, image: graphicDesign7, category: 'Graphic Design' },
  { id: 20, image: graphicDesign8, category: 'Graphic Design' },
  { id: 21, image: graphicDesign9, category: 'Graphic Design' },
  { id: 22, image: graphicDesign10, category: 'Graphic Design' },
  { id: 31, image: graphicDesign11, category: 'Graphic Design' },
  { id: 24, image: graphicDesign12, category: 'Graphic Design' },
  { id: 25, image: graphicDesign13, category: 'Graphic Design' },
  { id: 26, image: graphicDesign14, category: 'Graphic Design' },
  { id: 27, image: graphicDesign15, category: 'Graphic Design' },
  { id: 28, image: graphicDesign16, category: 'Graphic Design' },
  { id: 29, image: graphicDesign17, category: 'Graphic Design' },
  { id: 30, image: graphicDesign18, category: 'Graphic Design' },
];

function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <div className="projects-page">
      <h1 className="page-title">My Projects</h1><div class="disclaimer-container">
  <p>
    Some projects are subject to confidentiality agreements and cannot be disclosed. Therefore, this portfolio highlights selected works and does not represent the full scope of my development and graphic design experience. To know more about my experiences, book a call.
  </p>

  <a 
    href="https://calendly.com/divinecabigting12345/30min" 
    target="_blank" 
    rel="noopener noreferrer"
    class="book-call-btn"
  >
    Book a Call
  </a>
</div>
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
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className={`project-card ${project.category === 'Development' ? 'development-card' : ''}`}
          >
            <img src={project.image} alt={project.title} className="project-image" />

            {project.category === 'Development' && (
              <div className="hover-bubble">
                <p><strong>Stack:</strong> {project.stack}</p>
                <p><strong>Features:</strong> {project.features}</p>
                <p><strong>Integrations:</strong> {project.integrations}</p>
              </div>
            )}

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