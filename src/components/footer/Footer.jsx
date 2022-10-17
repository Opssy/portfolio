import React from "react";
import FooterStyle from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={`${FooterStyle.footerCon}`}>
      <div className="container">
        <p>Williams Temitope Oluwadamilare</p>
      </div>
    </footer>
  );
};

export default Footer;
