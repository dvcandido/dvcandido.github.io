import React from "react";
import "../../assets/css/components/footer.css";
import Github from "../../assets/img/github.svg";
import Linkedin from "../../assets/img/linkedin.svg";

const Footer = () => {
  return (
    <footer>
      <div className="wrap">
        <div className="footer-text">
          <ul>
            <li>
            <a href="https://github.com/dvcandido" rel="nofollow" target="_black">
                <img src={Github} alt="Github" />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/dvcandido" rel="nofollow" target="_black">
                <img src={Linkedin} alt="Github" />
              </a>
            </li>
          </ul>
          <p>Copyright © 2021 Douglas Candido</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
