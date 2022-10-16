import React from "react";
import Logo from "../../assets/logo.png";
import HeaderStyle from "./header.module.css";

const Header = () => {
  const links = ["About", "Skills", "Portfolio"];
  return (
    <div className={`${HeaderStyle.headerCon}`}>
      <div className="container">
        <div className="logo">
          <img src={Logo} alt="logo" />
        </div>
        <ul></ul>
      </div>
    </div>
  );
};

export default Header;
