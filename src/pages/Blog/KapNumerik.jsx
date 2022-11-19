import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Helmet from "react-helmet";
import blogData from "../../datas/blogData";
import fleche from "../../assets/fleche.png";

function KapNumerik() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section>
      <Helmet>
        <title>
          Le kap numérik : Tout savoir sur le kap numérik (anciennement chèque
          numérique).
        </title>
        <link rel="canonical" href="https://grimoire-numerique.re/Blog/2" />
        <meta
          name="description"
          content="Un site internet pas cher grâce au kap numérik. Remboursement jusqu'à 3200.00 € de vos dépenses engagées. On vous explique tout sur ce dispositif de la Région Réunion."
        />
        <meta
          property="og:url"
          content="https://grimoire-numerique.re/Blog/2"
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Le kap numérik : Tout savoir sur le kap numérik (anciennement chèque
            numérique)"
        />
        <meta
          property="og:description"
          content="Un site internet pas cher grâce au kap numérik. Remboursement jusqu'à 3200.00 € de vos dépenses engagées. On vous explique tout sur ce dispositif de la Région Réunion."
        />
        <meta
          property="og:image"
          content="https://regionreunion.com/IMG/jpg/kapnume_rik1000x650-2.jpg"
        />
      </Helmet>
      <main className="blog1">
        <h1 className="h1">GRIMOIRE NUMÉRIQUE | BLOG</h1>
        <div>
          <h2>
            Le kap numérik : Tout savoir sur le kap numérik (anciennement chèque
            numérique)
          </h2>
          <img
            src="https://regionreunion.com/IMG/jpg/kapnume_rik1000x650-2.jpg"
            alt="homme devant un ordinateur"
          />
          <small>21 Novembre 2022 à 12h26</small>
          <article>
            <h3>Zoom sur ce dispositif de la Région Réunion</h3>
            <section>
              <p>
                Aujourd’hui, la Région Réunion et le FEDER proposent aux petites
                et moyennes entreprises réunionnaises et aux associations de
                bénéficier d’une aide à la digitalisation. Cette aide prend la
                forme d’un remboursement d’un montant maximum de 3200.00 € et
                est disponible sous certaines conditions et dans un délai
                limité. Découvrons ensemble tout ce qu’il y a à savoir sur le
                kap numérik :
              </p>
            </section>
            <section>
              <div>
                <button type="button" className="button_kapNumerik">
                  Entreprise
                  <img src={fleche} alt="fleche" className="fleche" />
                </button>
                <button type="button" className="button_kapNumerik">
                  Associations
                  <img src={fleche} alt="fleche" className="fleche" />
                </button>
                <button type="button" className="button_kapNumerik">
                  Auto Entreprise | Entreprise individuelle
                  <img src={fleche} alt="fleche" className="fleche" />
                </button>
              </div>
            </section>
          </article>
        </div>
      </main>
      <section className="egalement_container">
        <h3>À lire également</h3>
        <div className="mini_blog_container">
          {blogData
            .filter((el) => el.id !== 2)
            .map((blog) => (
              <div className="mini_blog">
                <h4>{blog.title}</h4>
                <img src={blog.src} alt={blog.alt} />
                <Link to={blog.link}>
                  <button type="button">Lire l'article</button>
                </Link>
              </div>
            ))}
        </div>
      </section>
    </section>
  );
}

export default KapNumerik;
