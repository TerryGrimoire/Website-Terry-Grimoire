import React from "react";
import { Link } from "react-router-dom";
import coche from "../assets/coche.png";
import expertiseData from "../datas/ExpertiseData";

export default function Home() {
  return (
    <main className="main_container">
      <h2 className="first_h2_home">
        Le monde change, votre entreprise devrait aussi.
      </h2>

      <div className="flex align-center justify-between">
        <p>Nous contacter</p>
        <button type="button" className="button_style blue">
          Découvrir nos offres
        </button>
      </div>

      <section>
        <div className="flex align-center justify-evenly">
          <img src={coche} alt="coche" className="check" />
          <p className="p_home">
            <span>Rapide et efficace.</span> Un site internet possible en moins
            d'une semaine.
          </p>
        </div>
        <div className="flex align-center justify-evenly">
          <img src={coche} alt="coche" className="check" />
          <p className="p_home">
            <span>Une offre complète.</span> Site web, analyse de données,
            réseaux sociaux et financiers, etc.
          </p>
        </div>
        <div className="flex align-center justify-evenly">
          <img src={coche} alt="coche" className="check" />
          <p className="p_home">
            <span>Prix transparents.</span> Une tarification claire et précise
            dès le début.
          </p>
        </div>
      </section>
      <section>
        <h2 className="second_h2_home">
          Notre expertise vous fait grandir sereinement et sainement
        </h2>

        {expertiseData.map((expertise) => (
          <article className="flex-col align-center article_home">
            <h3>{expertise.title}</h3>
            <img src={expertise.img} alt={expertise.alt} />
            <p>{expertise.content}</p>
            <Link to={expertise.link}>
              <button type="button" className="button_style margin1r0">
                En savoir plus
              </button>
            </Link>
          </article>
        ))}
      </section>

      <section>
        <h2 className="first_h2_home">
          Des tarifs transparents, sans surprise.
        </h2>
      </section>
      <section>
        <h2 className="second_h2_home">Ils nous ont fait confiance</h2>
        <p>Le Montecito</p>
        <p>We Rev'Art</p>
        <p>La plaisir Bistrot Queer</p>
        <p>Charles Girouard</p>
        <p>Le collectif Bubble Gum</p>
        <p>Le cercle rouge</p>
        <p>Les sirs carmes</p>
      </section>
    </main>
  );
}
