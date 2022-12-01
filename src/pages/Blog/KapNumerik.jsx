import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Helmet from "react-helmet";
import blogData from "../../datas/blogData";
import fleche from "../../assets/fleche1.png";
import Entreprise from "../../components/Entreprise";
import Association from "../../components/Association";
import Autoentrepreneur from "../../components/Autoentrepreneur";
import Montant from "../../components/Montant";

function KapNumerik() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [entreprise, setEntreprise] = useState(false);
  const [association, setAssociation] = useState(false);
  const [autoentrepreneur, setAutoentrepreneur] = useState(false);

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
      <main className="blog1 blog2">
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
          <article>
            <h3>Zoom sur ce dispositif de la Région Réunion</h3>
            <section>
              <p>
                Aujourd’hui, la Région Réunion et le FEDER proposent aux petites
                et moyennes entreprises réunionnaises et aux associations de
                bénéficier d’une aide à la digitalisation. Cette aide prend la
                forme d’un remboursement d’un montant maximum de 3200.00 € qui
                correspond à 80% des dépenses HT pour les structures de moins de
                9 salariés et 50% pour celles de plus de 9 salariés.
              </p>

              <Montant />
              {/* <p>
                Nous avons conçu pour vous
                <Link to="/simulateur" className="lien">
                  un simulateur
                </Link>
                afin de vous permettre de vérifier si vous êtes éligible au kap
                numérik.
            </p> */}
              <h4>Toutes les informations importantes :</h4>
            </section>
            <section>
              <div>
                <button
                  type="button"
                  className="button_kapNumerik"
                  onClick={() => setEntreprise(!entreprise)}
                >
                  Entreprises
                  <img
                    src={fleche}
                    alt="fleche"
                    className={entreprise ? "fleche valide" : "fleche"}
                  />
                </button>
                {entreprise && <Entreprise />}
                <button
                  type="button"
                  className="button_kapNumerik"
                  onClick={() => setAssociation(!association)}
                >
                  Associations
                  <img
                    src={fleche}
                    alt="fleche"
                    className={association ? "fleche valide" : "fleche"}
                  />
                </button>

                {association && <Association />}
                <button
                  type="button"
                  className="button_kapNumerik"
                  onClick={() => setAutoentrepreneur(!autoentrepreneur)}
                >
                  Auto Entreprise | Professions Libérales
                  <img
                    src={fleche}
                    alt="fleche"
                    className={autoentrepreneur ? "fleche valide" : "fleche"}
                  />
                </button>
                {autoentrepreneur && <Autoentrepreneur />}
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
