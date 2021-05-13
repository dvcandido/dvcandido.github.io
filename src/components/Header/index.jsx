import React from "react";
import "../../assets/css/components/header.css";

const Header = () => {
  return (
    <header>
      <div className="header-container">
        <h1>Douglas | Software Engineer</h1>
        <nav>
          <ul>
            <li>About Me</li>
            <li>Works</li>
            <li>Contact ME</li>
            <li>Exit</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
