import React from 'react';
import { FaGlobe, FaMapMarkerAlt, FaPhone, FaIdCard } from 'react-icons/fa'; // Import the necessary icons from react-icons
import './contact.css'; // Import your CSS file

const Contact = () => {
  return (
    <main>
      <div className="container">
        <div className="contact-info">
          <div className="flex flex-col items-center gap-2">
            <FaGlobe />
            <p>United States</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <FaMapMarkerAlt />
            <p>New York, 94126</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <FaPhone />
            <p>+01 234 567 89</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <FaIdCard />
            <p>Tax ID: 273 384</p>
          </div>
        </div>

        {/* Form Section */}
        <div className="form">
          <form action="#" method="POST">
            <div className="form-group">
              <input type="text" name="name" placeholder="Name" required />
              <input type="email" name="email" placeholder="Email address" required />
              <textarea name="message" rows="2" placeholder="Message" required></textarea>
            </div>
            <div className="checkbox-group">
              <input type="checkbox" name="copy" />
              <label htmlFor="copy">Send me a copy of this message</label>
            </div>
            <button type="submit" className="submit-btn">SEND</button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Contact;
