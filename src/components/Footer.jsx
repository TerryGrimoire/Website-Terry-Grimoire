import React from "react";
import { Link } from "react-router-dom";
import github from "../assets/github.png";
import linkedin from "../assets/linkedin.svg";
import facebook from "../assets/facebook.svg";
import portefolio from "../assets/portefolio.png";

function Footer() {
  return (
    <footer>
      <nav className="footer flex-col align-start justify-start">
        <h3>GRIMOIRE NUMÉRIQUE</h3>
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
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.facebook.com/grimoirenumerique"
              >
                <img src={facebook} alt="Linkedin" />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/company/grimoire-num%C3%A9rique/"
              >
                <img src={linkedin} alt="Linkedin" />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/TerryGrimoire"
              >
                <img src={github} alt="Github" />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.terry-grimoire.fr/"
              >
                <img src={portefolio} alt="Portefolio" />
              </a>
            </div>
          </div>
        </section>

        <div className="w100">
          <Link to="/Mentions" className="mentions">
            <small>Mentions légales</small>
          </Link>
          <small className="droits">Tous droits réservés 2022 ©</small>
        </div>
        <small className="designer">
          Développé et designé par
          <a
            href="https://www.terry-grimoire.fr/"
            target="_blank"
            rel="noreferrer"
            className="lien"
          >
            Terry Grimoire
          </a>
        </small>
      </nav>
    </footer>
  );
}

export default Footer;
