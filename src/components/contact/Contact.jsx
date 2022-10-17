import React from "react";
import ContactStyle from "./contact.module.css";

const Contact = () => {
  return (
    <section id="contactme" className={`${ContactStyle.contactCon}`}>
      <div className="container">
        <div className={`${ContactStyle.contactArea}`}>
          <h2>Get In Touch</h2>
          <p>Shoot me an email</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
