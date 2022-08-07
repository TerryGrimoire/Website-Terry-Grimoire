import React, { useState } from "react";
import { Link } from "react-router-dom";
import menu from "../assets/menu.png";

function Header() {
  const [openBurger, setOpenBurger] = useState(false);
  return (
    <header className="container">
      <div className="flex align-center">
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
        <h3 className="logo">Terry Grimoire</h3>
      </div>

      {openBurger && (
        <nav className="nav flex-col">
          <h3 className="logo">Terry Grimoire</h3>
          <ul className="flex-col">
            <button
              type="button"
              className="no_button"
              onClick={() => setOpenBurger(false)}
            >
              <Link to="/">
                <li className="navlinks">À propos</li>
              </Link>
            </button>
            <button
              type="button"
              className="no_button"
              onClick={() => setOpenBurger(false)}
            >
              <Link to="/Billing">
                <li className="navlinks">Tarification</li>
              </Link>
            </button>
            <button
              type="button"
              className="no_button"
              onClick={() => setOpenBurger(false)}
            >
              <Link to="/Projects">
                <li className="navlinks">Projets</li>
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
