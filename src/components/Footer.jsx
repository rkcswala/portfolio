
import React from "react";

import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="footer-content">

          <h3>
            RK <span>Saini</span>
          </h3>

          <p>
            Full Stack Developer | Building modern web experiences 🚀
          </p>

          <div className="social-links">

            
            <a
              href="https://github.com/rkcswala"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>

           
            <a
              href="https://www.linkedin.com/feed/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>

            
            <a
              href="https://www.instagram.com/mr_rksaini414/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>

       
            <a
              href="https://www.facebook.com/people/Rk-Saini/100068371342756/?rdid=FchnGU0S2nBlKYKo&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1966pntkQ2%2F"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebook />
            </a>

          </div>

          <div className="footer-line"></div>

          <p className="copyright">
            © 2026 RK Saini. All Rights Reserved.
          </p>

          <p className="made-with">
            Built with ❤️ & code
          </p>

        </div>
      </footer>
    </div>
  );
};

export default Footer;

