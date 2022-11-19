import React, { useState } from "react";
import { Link } from "react-router-dom";
import menu from "../assets/menu.png";
import fermer from "../assets/fermer.png";
import logo from "../assets/favicon.png";
import enveloppe from "../assets/enveloppe.png";

function Header() {
  const [openBurger, setOpenBurger] = useState(false);
  return (
    <header className="container">
      <div className="flex align-start justify-between padding05 mobile">
        <button
          type="button"
          className="no_button"
          onClick={() => setOpenBurger(!openBurger)}
        >
          <img
            src={menu}
            alt="button pour ouvrir et fermer le menu"
            className="menu_burger"
          />
        </button>
        <Link to="/">
          <img
            src={logo}
            alt="logo de Grimoire numérique avec un livre ouvert qui ressort des petites planetes avec le signe www"
            className="logo"
          />
        </Link>
        <Link to="/Contact">
          <img
            src={enveloppe}
            alt="enveloppe pour être contacté"
            className="enveloppe"
          />
        </Link>
      </div>

      <div className="desktop nav_desktop">
        <nav className="flex justify-between align-center text-center">
          <Link to="/">
            <img
              src={logo}
              alt="logo de Grimoire numérique avec un livre ouvert qui ressort des petites planetes avec le signe www"
              className="logo"
            />
          </Link>
          <ul className="flex">
            <button
              type="button"
              className="no_button"
              onClick={() => setOpenBurger(false)}
            >
              <Link to="/Services">
                <li className="navlinks">Nos offres</li>
              </Link>
            </button>
            <button
              type="button"
              className="no_button"
              onClick={() => setOpenBurger(false)}
            >
              <Link to="/Clients">
                <li className="navlinks">Nos clients </li>
              </Link>
            </button>
            <button
              type="button"
              className="no_button"
              onClick={() => setOpenBurger(false)}
            >
              <Link to="/Contact">
                <li className="navlinks">Contact</li>
              </Link>
            </button>
            <button
              type="button"
              className="no_button"
              onClick={() => setOpenBurger(false)}
            >
              <Link to="/Blog">
                <li className="navlinks">Blog</li>
              </Link>
            </button>
            <Link to="/Services">
              <button type="button" className="button_style blue">
                Notre offre
              </button>
            </Link>
          </ul>
        </nav>
      </div>

      {openBurger && (
        <nav className="nav flex-col">
          <button
            type="button"
            className="no_button"
            onClick={() => setOpenBurger(false)}
          >
            <img
              src={fermer}
              alt="croix pour fermer le menu"
              className="croix"
            />
          </button>

          <Link
            to="/"
            className="flex-col jusify-center align-center text-center"
            onClick={() => setOpenBurger(false)}
          >
            <img
              src={logo}
              alt="logo de Grimoire numérique avec un livre ouvert qui ressort des petites planetes avec le signe www"
              className="logo"
            />
            <h1 className="title_nav">GRIMOIRE NUMÉRIQUE</h1>
          </Link>
          <ul className="flex-col ul_links">
            <button
              type="button"
              className="no_button"
              onClick={() => setOpenBurger(false)}
            >
              <Link to="/Services">
                <li className="navlinks">Nos offres</li>
              </Link>
            </button>
            <button
              type="button"
              className="no_button"
              onClick={() => setOpenBurger(false)}
            >
              <Link to="/Clients">
                <li className="navlinks">Nos clients </li>
              </Link>
            </button>
            <button
              type="button"
              className="no_button"
              onClick={() => setOpenBurger(false)}
            >
              <Link to="/Contact">
                <li className="navlinks">Contact</li>
              </Link>
            </button>
            <button
              type="button"
              className="no_button"
              onClick={() => setOpenBurger(false)}
            >
              <Link to="/Blog">
                <li className="navlinks">Blog</li>
              </Link>
            </button>
          </ul>
        </nav>
      )}
    </header>
  );
}

export default Header;
