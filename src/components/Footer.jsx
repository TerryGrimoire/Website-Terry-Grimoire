import React from "react";
import { Link } from "react-router-dom";
import github from "../assets/github.svg";
import linkedin from "../assets/linkedin.svg";
import portefolio from "../assets/portefolio.png";

function Footer() {
  return (
    <footer>
      <nav className="footer flex-col align-start justify-start">
        <h3>GRIMOIRE</h3>
        <section className="flex justify-between footer-section">
          <div className="flex flex-col align-start justify-start">
            <h4>Plan du site</h4>
            <ul className="flex-col">
              <Link to="/">
                <li>Accueil</li>
              </Link>

              <Link to="/Services">
                <li>Nos offres</li>
              </Link>

              <Link to="/Clients">
                <li>Nos clients </li>
              </Link>

              <Link to="/Contact">
                <li>Contact</li>
              </Link>
            </ul>
          </div>
          <div className="flex flex-col align-start">
            <h4>Nous retrouver</h4>
            <div className="flex">
              <a href="https://www.linkedin.com/in/terry-grimoire/">
                <img src={linkedin} alt="Linkedin" />
              </a>
              <a href="https://github.com/TerryGrimoire">
                <img src={github} alt="Github" />
              </a>
              <a href="https://grimoire-terry.netlify.app/">
                <img src={portefolio} alt="Portefolio" />
              </a>
            </div>
          </div>
        </section>
        <Link to="/Mentions" className="mentions">
          <p>Mentions légales</p>
        </Link>
      </nav>
    </footer>
  );
}

export default Footer;
