import React from "react";
import FooterStyle from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={`${FooterStyle.footerCon}`}>
      <div className="container">
        <p
          style={{
            textAlign: "center",
            fontSize: "16px",
            lineHeight: "26px",
            fontWeight: "600",
          }}
        >
          Williams Temitope Oluwadamilare
        </p>
      </div>
    </footer>
  );
};

export default Footer;
