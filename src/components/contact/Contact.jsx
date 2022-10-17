import React from "react";
import ContactStyle from "./contact.module.css";

const Contact = () => {
  return (
    <section id="contactme" className={`${ContactStyle.contactCon}`}>
      <div className="container">
        <div className={`${ContactStyle.contactArea}`}>
          <h2>Get In Touch</h2>
          <p>
            <a href="#email">Shoot me an email</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
