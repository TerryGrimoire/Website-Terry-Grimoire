import React from "react";
import { Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { Carousel } from "react-responsive-carousel";
import coche from "../assets/coche.png";
import expertiseData from "../datas/ExpertiseData";
import formulesData from "../datas/FormulesData";
import partenairesData from "../datas/PartenairesData";

export default function Home() {
  const handleDragStart = (e) => e.preventDefault();

  const items = partenairesData.map((partenaire) => (
    <div className="margin0r1r">
      <img
        src={partenaire.image}
        alt={partenaire.alt}
        onDragStart={handleDragStart}
        role="presentation"
        width="100rem"
      />
      <h4>{partenaire.title}</h4>
    </div>
  ));

  const responsive = {
    0: {
      items: 4,
    },
    1024: {
      items: 10,
    },
  };
  return (
    <main className="main_container">
      <h2 className="first_h2_home">
        La formule qu'il vous faut pour grandir votre entreprise.
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
            <span>Prix juste.</span> Une tarification claire, transparente et
            sans surprise.
          </p>
        </div>
      </section>
      <section>
        <h2 className="second_h2_home">
          Une offre complète pour tous vos besoins
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
          Des formules simples et transparentes.
        </h2>
        <Carousel
          autoPlay
          showArrows={false}
          showIndicators={false}
          showStatus={false}
          showThumbs={false}
          infiniteLoop
          interval="5000"
        >
          {formulesData.map((formule) => (
            <div>
              <h3>{formule.title}</h3>
              <p>{formule.price}</p>
              <p>{formule.time}</p>
              <p>{formule.description}</p>
              <Link to="/Services">
                <button
                  type="button"
                  className={`button_style margin1r0 ${formule.bg}`}
                >
                  Plus d'infos
                </button>
              </Link>
            </div>
          ))}
        </Carousel>
      </section>
      <section>
        <h2 className="second_h2_home">Ils nous font confiance</h2>
        <AliceCarousel
          autoPlay
          disableButtonsControls
          disableDotsControls
          disableSlideInfo
          infinite
          responsive={responsive}
          items={items}
          autoPlayInterval="500"
          animationDuration="250"
        />
      </section>
    </main>
  );
}
