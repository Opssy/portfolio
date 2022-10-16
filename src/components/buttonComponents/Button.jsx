import React from "react";

const Button = ({ className, text, link }) => {
  return (
    <button className={`btn ${className}`}>
      <a href={`#${link}`}>{text}</a>
    </button>
  );
};

export default Button;
