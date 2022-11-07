import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Helmet from "react-helmet";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import coche from "../assets/coche.png";
import expertiseData from "../datas/ExpertiseData";

import partenairesData from "../datas/PartenairesData";
import servicesData from "../datas/ServicesData";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const handleDragStart = (e) => e.preventDefault();

  const items = partenairesData.map((partenaire) => (
    <div className="margin1r0 flex flex-col align-center justify-center">
      <img
        src={partenaire.image}
        alt={partenaire.alt}
        onDragStart={handleDragStart}
        role="presentation"
        className="partenaire_image margin1r0"
      />
      <h4>{partenaire.title}</h4>
    </div>
  ));

  const responsive = {
    0: {
      items: 2,
    },
    1024: {
      items: 10,
    },
  };
  return (
    <main className="main_container">
      <Helmet>
        <title> Grimoire Numérique | Accueil </title>
        <link rel="canonical" href="https://grimoire-numerique.re" />
        <meta
          name="description"
          content="Création de sites internet pour les petites et moyennes entreprises réunionnaises. Une page web pour vous aider à grandir et gagner en visibilité. Nous proposons également des interventions pour améliorer votre présence en ligne, via les réseaux sociaux et autres outils digitaux."
        />
      </Helmet>
      <section className="landingpage_container">
        <div>
          <h1 className="h1_home">GRIMOIRE NUMÉRIQUE</h1>
          <h3 className="first_h3_home">
            Entrez dans l'ère numérique en un coup de baguette magique ✨
          </h3>
        </div>

        <img
          src="https://media4.giphy.com/media/kUzZPC32NH7qteJp3G/giphy.gif"
          alt="Grimoire magique qui bouge"
          className="grimoire_magique"
        />
      </section>

      <section className="margin1r0 vh100 flex-col justify-evenly avantage_container">
        <h2 className="h2_home first_h2_home">NOS AVANTAGES</h2>
        <div className="flex align-center justify-evenly ">
          <img src={coche} alt="coche" className="check" />
          <p className="p_home">
            <span>Rapide et efficace.</span> Un site internet possible en 48
            heures.
          </p>
        </div>
        <div className="flex align-center justify-evenly">
          <img src={coche} alt="coche" className="check" />
          <p className="p_home">
            <span>Consommer local.</span> Nous choisir c'est favoriser la
            jeunesse créole.
          </p>
        </div>
        <div className="flex align-center justify-evenly">
          <img src={coche} alt="coche" className="check" />
          <p className="p_home">
            <span>Un prix juste.</span> Deux fois moins cher que la moyenne du
            marché.
          </p>
        </div>
        <div className="flex align-center justify-between margin1r0 buttons_container">
          <Link to="/contact">
            <button type="button" className="button_style white">
              Prendre RDV
            </button>
          </Link>
          <Link to="/Services">
            <button type="button" className="button_style blue">
              Découvrir nos offres
            </button>
          </Link>
        </div>
      </section>

      <section className="margin5r0 expertise_bg">
        <h2 className="h2_home">NOTRE EXPERTISE</h2>
        <div className="expertise_container">
          {expertiseData.map((expertise) => (
            <article className="flex-col align-center article_home">
              <h3>{expertise.title}</h3>
              <img src={expertise.img} alt={expertise.alt} />
              <p className="p_home">{expertise.content}</p>
              <Link to="/Services">
                <button type="button" className="button_style blue margin2r0">
                  Découvrir nos offres
                </button>
              </Link>
            </article>
          ))}
        </div>
      </section>
      <section>
        <h2 className="h2_home">QUELQUES CHIFFRES</h2>

        <div className="chiffres_container">
          {servicesData.map((chiffre) => (
            <article className="margin2r0 flex-col">
              <p className="chiffre">
                {chiffre.title}
                <span className="span_blue"> {chiffre.plus} </span>
              </p>
              <p>{chiffre.description}</p>
            </article>
          ))}
        </div>
      </section>
      <section>
        <h2 className="h2_home">NOS CLIENTS</h2>
        <Link to="/Clients">
          <AliceCarousel
            autoPlay
            disableButtonsControls
            disableDotsControls
            disableSlideInfo
            infinite
            responsive={responsive}
            items={items}
            animationDuration="6000"
          />
        </Link>
      </section>
    </main>
  );
}
