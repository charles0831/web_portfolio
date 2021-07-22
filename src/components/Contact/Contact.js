import React from "react";
import "./../../index.css";

const Contact = () => {
  return (
    <section className="contact-container" name="contact" id="contact">
      <div className="profile-image"></div>
      <h1 className="heading">Contact</h1>

      <div className="cards-container">
        {/* Card 1 - Email */}
        <div className="cards">
          <div className="contact-icons">
            <i className="fas fa-envelope"></i>
          </div>
          <div className="contact-text">
            <span>Email</span>
          </div>
          <div className="contact-links">
            <span>alachikyan@outlook.com</span>
          </div>
        </div>

        {/* Card 2 - Social Media */}
        <div className="cards">
          <div className="contact-icons">
            <i className="fas fa-globe"></i>
          </div>
          <div className="contact-text">
            <span>Social Media</span>
          </div>
          <div className="contact-links">
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://github.com/alachikyan/"
            >
              <i className="fab fa-github" title="github" id="github"></i>
            </a>

            {/* <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.facebook.com/profile.php?id=100041078220896123"
            >
              <i className="fab fa-facebook" title="facebook" id="facebook"></i>
            </a> */}

            {/* <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.linkedin.com/in/Aik Lachikyan-912296215/"
            >
              <i className="fab fa-linkedin" title="linkedin" id="linkedin"></i>
            </a> */}

            {/* <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://twitter.com/Oleg_Khurtin084869/"
            >
              <i className="fab fa-twitter" title="twitter" id="twitter"></i>
            </a>

            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.instagram.com/oOleg_Khurtinleg/"
            >
              <i
                className="fab fa-instagram"
                title="instagram"
                id="instagram"
              ></i>
            </a> */}
          </div>
        </div>

        {/* Card 3 - Phone */}
        {/* <div className="cards">
          <div className="contact-icons">
            <i className="fas fa-phone"></i>
          </div>
          <div className="contact-text">
            <span>Phone</span>
          </div>
          <div className="contact-links">
            <span>+491743678118</span>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Contact;
