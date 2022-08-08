import React from "react";
import coche from "../assets/coche.png";

export default function Home() {
  return (
    <main className="main_container">
      <article className="flex-col article_home">
        <h2 className="first_h2_home">
          Le monde change, votre entreprise devrait aussi.
        </h2>

        <div className="flex align-center justify-between">
          <p>Nous contacter</p>
          <button type="button" className="button_style blue">
            Découvrir nos offres
          </button>
        </div>

        <div>
          <div className="flex align-center justify-evenly">
            <img src={coche} alt="coche" />
            <p className="p_home">
              <span>Rapide et efficace.</span> Un site internet possible en
              moins d'une semaine.
            </p>
          </div>
          <div className="flex align-center justify-evenly">
            <img src={coche} alt="coche" />
            <p className="p_home">
              <span>Une offre complète.</span> Le nécessaire pour faire grandir
              votre entreprise.
            </p>
          </div>
          <div className="flex align-center justify-evenly">
            <img src={coche} alt="coche" />
            <p className="p_home">
              <span>Prix transparents.</span> Une tarification claire et précise
              dès le début.
            </p>
          </div>
        </div>
      </article>
    </main>
  );
}
