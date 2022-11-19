import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Helmet from "react-helmet";
import terry from "../../assets/terry_grimoire_mobile.jpg";
import blogData from "../../datas/blogData";

function Fondateur() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section>
      <Helmet>
        <title>
          Le Grimoire Numérique : Qui se cache derrière le Grimoire Numérique ?
        </title>
        <link rel="canonical" href="https://grimoire-numerique.re/Blog/1" />
        <meta
          name="description"
          content="Découvrez Terry Grimoire, fondateur du Grimoire Numérique, réunionnais de retour à La Réunion pour aider les petites et moyennes entreprises dans leur transition digitale en proposant ses services de création de site internet."
        />
        <meta
          property="og:url"
          content="https://grimoire-numerique.re/Blog/1"
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Le Grimoire Numérique : Qui se cache derrière le Grimoire Numérique ?"
        />
        <meta
          property="og:description"
          content="Découvrez Terry Grimoire, fondateur du Grimoire Numérique, réunionnais de retour à La Réunion pour aider les petites et moyennes entreprises dans leur transition digitale en proposant ses services de création de site internet."
        />
        <meta property="og:image" content={terry} />
      </Helmet>
      <main className="blog1">
        <h1 className="h1">GRIMOIRE NUMÉRIQUE | BLOG</h1>
        <div>
          <h2>
            Le Grimoire Numérique : Qui se cache derrière le Grimoire Numérique
            ?
          </h2>
          <img src={terry} alt="portrait Terry Grimoire" />
          <small>21 Novembre 2022 à 12h26</small>
          <article>
            <h3>Zoom sur le fondateur du Grimoire Numérique</h3>
            <p>
              Je suis Terry Grimoire, jeune réunionnais de 28 ans, troisième
              membre d’une famille nombreuse et modeste originaire du Port.
              Depuis mon plus jeune âge, j’ai appris à m’en sortir par mes
              propres moyens, dès mes 14 ans, j’ai travaillé dans les champs
              pour financer mes premiers téléphones portables. J’ai sacrifié de
              nombreux week-ends et mercredi après-midi à étudier dans le but
              d’échapper à la misère de ma situation. J’ai également travaillé à
              côté de mes études non seulement pour les financer mais aussi pour
              être indépendant le plus rapidement possible. Il faut savoir que
              lorsque l’on vient d’une famille nombreuse, on ne peut rester à la
              charge de ses parents trop longtemps. En effet, chaque centime que
              je coûtais à mes parents, était de l’argent en moins pour les plus
              jeunes de ma fratrie.
            </p>
            <p>
              Incapable de laisser mon statut social déterminer mon avenir et
              mes ambitions, je me suis battu sans cesse pour m’en sortir. Ma
              détermination et mon acharnement ont fini par payer. J’ai ainsi pu
              étudier pendant deux ans en Espagne afin d’obtenir un double
              diplôme français | espagnol. Ce qui m’a donné goût aux voyages.
              Ces 8 dernières années, j’ai travaillé à La Réunion, en France, en
              Allemagne, en Autriche, au Portugal et au Canada. Mes expériences
              ont été diverses et variées, du recouvrement amiable, à la startup
              spécialisée dans les paiements mobiles, en passant par des
              plateformes de crypto-monnaies. Ma vie d’expatrié m’a permis
              d’acquérir rapidement des capacités et des connaissances. Aussi,
              Je souhaite à présent mettre tout cela au profit de La Réunion.
            </p>
            <p>
              Comme à chaque étape importante de ma vie, je reviens sur mon île
              natale. Aujourd’hui, je suis à La Réunion pour plusieurs raisons.
              Je veux prouver au monde entier et SURTOUT aux jeunes réunionnais
              et réunionnaises que l’on peut être noir, créole et pauvre et tout
              de même s’en sortir. Que tout est à portée de main quand on s’en
              donne les moyens. Je veux dire à la jeunesse créole qu’elle est
              compétente, qu’elle est capable et que rien n’est inaccessible.
              Aujourd’hui, je souhaite rendre à La Réunion tout ce qu’elle m’a
              donné. Je veux participer au développement économique, social et
              digital des petites et moyennes entreprises réunionnaises. Les
              accompagner de mon mieux à chaque étape de leur transition
              numérique. Parce que kréol lé solidèr, j’ai adapté ma tarification
              en ce sens. Deux fois moins cher que la plupart de mes
              concurrents, je m’attaque principalement et volontairement aux
              très petites entreprises. Celles qui ont besoin de visibilité et
              d’un coup de pouce pour décoller.
            </p>
            <p>
              Mwin sé Terry Grimoire, in ti portois 28 an, é mi invit a zot
              kréol met la min ansanm po amont tout domoun ke nout lil ossi lé
              kapab, nout lil ossi lé kompétan é réyoné y gayn alé en dvan !
            </p>
          </article>
        </div>
      </main>
      <section className="egalement_container">
        <h3>À lire également</h3>
        <div className="mini_blog_container">
          {blogData
            .filter((el) => el.id !== 1)
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

export default Fondateur;
