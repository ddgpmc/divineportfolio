import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './ContactMe.css'; // Import your CSS file

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [feedbackMessage, setFeedbackMessage] = useState(''); // Store the feedback message

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_ppv58a5', 'template_fvcqxio', e.target, 'JpPBQQ_Ua0AfLazHR') // Replace with your EmailJS service details
      .then((result) => {
        console.log(result.text);
        setFeedbackMessage('Message sent successfully!'); // Show success message
      }, (error) => {
        console.log(error.text);
        setFeedbackMessage('Failed to send message. Please try again later.'); // Show error message
      });
  };

  return (
    <div className="contact-container">
      <div className="contact-form neumorphic">
        <h1 className="form-title">Contact Me!</h1>
        <form onSubmit={handleSubmit} className="form-elements">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="input-field"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="input-field"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="textarea-field"
            rows="4"
            required
          />
          <button
            type="submit"
            className="submit-button"
          >
            Send Message
          </button>
        </form>

        {/* Display feedback message directly on the page */}
        {feedbackMessage && (
          <p className="feedback-message">{feedbackMessage}</p>
        )}
      </div>
    </div>
  );
};

export default ContactMe;
