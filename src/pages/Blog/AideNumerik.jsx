import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Helmet from "react-helmet";
import blogData from "../../datas/blogData";

function AideNumerik() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section>
      <Helmet>
        <title>
          Le kap numérik : Le Grimoire Numérique vous accompagne dans le montage
          de dossier du kap numérik (anciennement chèque numérique).
        </title>
        <link rel="canonical" href="https://grimoire-numerique.re/Blog/2" />
        <meta
          name="description"
          content="Économisez du temps et de l'argent en laissant le Grimoire Numérique gérer la partie administrative de votre demande de subvention Kap Numérik auprès de la Région Réunion."
        />
        <meta
          property="og:url"
          content="https://grimoire-numerique.re/Blog/2"
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Le Grimoire Numérique vous accompagne dans le montage de dossier du kap numérik (anciennement chèque numérique)."
        />
        <meta
          property="og:description"
          content="Économisez du temps et de l'argent en laissant le Grimoire Numérique gérer la partie administrative de votre demande de subvention Kap Numérik auprès de la Région Réunion."
        />
        <meta
          property="og:image"
          content="https://cdn.pixabay.com/photo/2018/04/05/15/53/office-work-3293203_960_720.jpg"
        />
      </Helmet>
      <main className="blog1">
        <h1 className="h1">GRIMOIRE NUMÉRIQUE | BLOG</h1>
        <div>
          <h2>
            Le Grimoire Numérique vous aide à monter votre dossier kap numérik |
            chèque numérique.
          </h2>
          <img
            src="https://cdn.pixabay.com/photo/2018/04/05/15/53/office-work-3293203_960_720.jpg"
            alt="pile de dossiers classés et rangés"
          />
          <small>21 Novembre 2022 à 12h26</small>
          <article>
            <h3>Votre dossier kap numérik en un claquement de doigts</h3>
            <section>
              <p>
                Avec le Grimoire Numérique, le montage de votre dossier kap
                numérik se fait sans encombre. Parce que nous savons que les
                démarches administratives peuvent être contraignantes, nous vous
                accompagnons à chaque étape du processus et prenons en charge le
                suivi du dossier et les relances nécessaires sans frais
                supplémentaire.
              </p>
            </section>
            <section>
              <h4>Moins de charge mentale</h4>
              <p>
                Vous n’aimez pas les démarches administratives, vous considérez
                la paperasse comme rébarbative, ennuyante et longue. Le Grimoire
                Numérique réduit votre charge mentale en prenant soin de vos
                demandes de remboursement auprès de la Région Réunion. Nous vous
                aidons à trouver les différentes pièces justificatives de votre
                dossier.
              </p>
            </section>
            <section>
              <h4>Montage de dossier rapide, complet et efficace</h4>
              <p>
                Accompagné par la couveuse de projets RÉUSIT, le Grimoire
                Numérique a tous les atouts pour faire du montage de votre
                dossier un jeu d’enfant. Rapide, simple et efficace, un seul
                contact suffit pour finaliser votre dossier en un claquement de
                doigt. Notre couveuse, RÉUSIT est non seulement référencée par
                la Région Réunion comme offreur de solutions pour le Kap
                Numérik, mais dépose également de nombreuses demandes chaque
                semaine pour ses clients. Ce qui fait de nous, des experts du
                kap numérik (anciennement chèque numérique).
              </p>
            </section>
            <section>
              <h4>Accompagnement au montage 100% gratuit </h4>
              <p>
                En tant que client du Grimoire Numérique, vous bénéficiez
                d’office gratuitement et sans frais supplémentaire de notre
                expertise au sujet du kap numérique. N’hésitez pas à nous
                contacter en cas de questions à ce sujet.
              </p>
              <ul>
                <li className="blog3_contact">
                  <a href="mailto:contact@grimoire-numerique.re">
                    contact@grimoire-numerique.re
                  </a>
                </li>
                <li>
                  <a href="tel:+262693873050">06 93 87 30 50</a>
                </li>
              </ul>
            </section>
          </article>
        </div>
      </main>
      <section className="egalement_container">
        <h3>À lire également</h3>
        <div className="mini_blog_container">
          {blogData
            .filter((el) => el.id !== 3)
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

export default AideNumerik;
