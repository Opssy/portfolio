import React, { useState } from "react";
import Logo from "../../assets/logo.png";
import Button from "../buttonComponents/Button";
import HeaderStyle from "./header.module.css";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const links = ["About", "Skills", "Portfolio"];
  const [mobile, setMobile] = useState(false);

  return (
    <header className={`${HeaderStyle.headerCon}`}>
      <div className="container">
        <div className={`${HeaderStyle.headerArea}`}>
          <div className={`${HeaderStyle.logo}`}>
            <img src={Logo} alt="logo" />
          </div>
          <ul className={`${HeaderStyle.links} ${mobile ? `left` : `none`}`}>
            {links.map((link) => (
              <li key={link}>
                <a href={`#${link}`}>{link}</a>
              </li>
            ))}
          </ul>
          <Button
            className={`${HeaderStyle.button}`}
            text="Contact Me"
            link="contactme"
          />
          <span className={`${HeaderStyle.toggle}`}>
            {mobile ? (
              <FaTimes onClick={() => setMobile(false)} />
            ) : (
              <FaBars onClick={() => setMobile(true)} />
            )}
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
