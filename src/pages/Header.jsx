import React, { useState } from "react";
import { Link } from "react-router-dom";
import menu from "../assets/menu.png";
import fermer from "../assets/fermer.png";
import logo from "../assets/GN.png";

function Header() {
  const [openBurger, setOpenBurger] = useState(false);
  return (
    <header className="container">
      <div className="flex align-center justify-between">
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

          <Link to="/">
            <img
              src={logo}
              alt="logo de Grimoire numérique avec un livre ouvert qui ressort des petites planetes avec le signe www"
              className="logo"
            />
          </Link>
          <ul className="flex-col ul_links">
            <button
              type="button"
              className="no_button"
              onClick={() => setOpenBurger(false)}
            >
              <Link to="/">
                <li className="navlinks">Accueil</li>
              </Link>
            </button>
            <button
              type="button"
              className="no_button"
              onClick={() => setOpenBurger(false)}
            >
              <Link to="/Services">
                <li className="navlinks">Services</li>
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
          </ul>
        </nav>
      )}
    </header>
  );
}

export default Header;
