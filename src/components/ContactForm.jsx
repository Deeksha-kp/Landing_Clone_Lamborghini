import React from 'react';
import './ContactForm.css';

const ContactForm = () => {
  return (
    <section className="contact" id="contact">
      <h3>Contact Us</h3>
      <form>
        <label>Name:</label>
        <input type="text" name="name" />
        <label>Email:</label>
        <input type="email" name="email" />
        <label>Message:</label>
        <textarea name="message"></textarea>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default ContactForm;
