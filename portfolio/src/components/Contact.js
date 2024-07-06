import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';




  return (
    <section className="contacts" id="contact">
      <h2 className="title">Contact us</h2>
      <div className="contacts1">
        <div className="container">
          <form ref={form} onSubmit={sendEmail}>
            <label htmlFor="fname">First Name</label>
            <input type="text" id="fname" name="firstname" placeholder="Your name.." className="contact-input" />
            <label htmlFor="lname">Last Name</label>
            <input type="text" id="lname" name="lastname" placeholder="Your last name.." className="contact-input" />
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" placeholder="tell us you problem.." style={{ height: '200px' }} className="contact-input"></textarea>
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
