import React from "react";
import "../../assets/css/components/header.css";

const Header = () => {
  return (
    <header>
      <div className="wrap">
        <div className="title-area">
          <span>[DC]-Software Engineer</span>
        </div>
        <nav>
          <ul>
            <li>Works</li>
            <li>About Me</li>
            <li>Contact</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
